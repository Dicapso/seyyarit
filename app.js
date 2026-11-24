(function () {
  const $ = (s) => document.querySelector(s);
  const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const waLink = (msg) => `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(msg)}`;

  // Contacts
  document.querySelectorAll(".js-wa").forEach((a) => (a.href = waLink("Salam, Səyyar IT xidmətləri ilə bağlı sualım var.")));
  document.querySelectorAll(".js-phone").forEach((a) => {
    a.textContent = CONTACT.phone;
    a.href = "tel:" + CONTACT.phone.replace(/\s/g, "");
  });
  $("#yr").textContent = new Date().getFullYear();

  // Mobile menu
  $("#burger").addEventListener("click", () => document.body.classList.toggle("menu-open"));
  $("#menu").addEventListener("click", (e) => e.target.tagName === "A" && document.body.classList.remove("menu-open"));

  // Services
  const tabs = $("#svcTabs"), grid = $("#svcGrid");
  function showCat(id) {
    const cat = SERVICE_CATEGORIES.find((c) => c.id === id);
    tabs.querySelectorAll("button").forEach((b) => b.setAttribute("aria-selected", b.dataset.id === id));
    grid.innerHTML = (cat.note ? `<p class="cat-note">ℹ️ ${esc(cat.note)}</p>` : "") +
      cat.services.map((s) => `
      <article class="svc">
        <div class="svc-top"><div class="svc-ic">${cat.icon}</div>${priceTag(s.price)}</div>
        <h3>${esc(s.name)}</h3>
        ${s.desc ? `<p>${esc(s.desc)}</p>` : ""}
        <button class="link" data-order="${esc(s.name)}">Sifariş et →</button>
      </article>`).join("");
  }
  function priceTag(p) {
    if (p == null) return `<span class="price soon">Tezliklə</span>`;
    return `<span class="price">${typeof p === "number" ? p + " ₼" : esc(p)}</span>`;
  }
  $("#statCats").textContent = SERVICE_CATEGORIES.length;
  $("#statSvcs").textContent = SERVICE_CATEGORIES.reduce((n, c) => n + c.services.length, 0) + "+";
  tabs.innerHTML = SERVICE_CATEGORIES.map((c) =>
    `<button role="tab" data-id="${c.id}"><span>${c.icon}</span>${esc(c.title)}<em>${c.services.length}</em></button>`).join("");
  tabs.addEventListener("click", (e) => { const b = e.target.closest("button"); if (b) showCat(b.dataset.id); });
  showCat(SERVICE_CATEGORIES[0].id);

  // Products
  const cats = ["Hamısı", ...new Set(PRODUCTS.map((p) => p.cat))];
  let activeCat = "Hamısı";
  const chips = $("#prodChips"), pgrid = $("#prodGrid"), search = $("#prodSearch");
  chips.innerHTML = cats.map((c) => `<button data-c="${esc(c)}">${esc(c)}</button>`).join("");
  function renderProducts() {
    const q = search.value.trim().toLowerCase();
    chips.querySelectorAll("button").forEach((b) => b.classList.toggle("on", b.dataset.c === activeCat));
    const list = PRODUCTS.filter((p) => (activeCat === "Hamısı" || p.cat === activeCat) &&
      (p.name + " " + p.note).toLowerCase().includes(q));
    pgrid.innerHTML = list.map((p) => `
      <article class="prod">
        <div class="prod-img">${p.icon}</div>
        <span class="tag">${esc(p.cat)}</span>
        <h3>${esc(p.name)}</h3>
        <p>${esc(p.note)}</p>
        <div class="prod-foot">
          <b>${p.price ? p.price + " ₼" : "Qiymət soruşun"}</b>
          <a class="btn btn-sm" target="_blank" rel="noopener"
             href="${waLink("Salam, bu məhsulu sifariş etmək istəyirəm: " + p.name)}">Sifariş</a>
        </div>
      </article>`).join("");
    $("#prodEmpty").hidden = list.length > 0;
  }
  chips.addEventListener("click", (e) => { const b = e.target.closest("button"); if (b) { activeCat = b.dataset.c; renderProducts(); } });
  search.addEventListener("input", renderProducts);
  renderProducts();

  // Form
  const sel = $("#formService");
  sel.innerHTML = SERVICE_CATEGORIES.map((c) =>
    `<optgroup label="${esc(c.title)}">${c.services.map((s) => `<option>${esc(s.name)}</option>`).join("")}</optgroup>`).join("") +
    `<optgroup label="Məhsullar">${PRODUCTS.map((p) => `<option>${esc(p.name)}</option>`).join("")}</optgroup>`;

  // Popular services (hero)
  const all = SERVICE_CATEGORIES.flatMap((c) => c.services.map((s) => ({ ...s, icon: c.icon })));
  $("#popular").innerHTML = POPULAR.map((n) => all.find((s) => s.name === n)).filter(Boolean).map((s) => `
    <button class="hc-row" data-order="${esc(s.name)}">
      <span class="hc-ic">${s.icon}</span><span class="hc-name">${esc(s.name)}</span>${priceTag(s.price)}
    </button>`).join("");

  function goOrder(e) {
    const b = e.target.closest("[data-order]");
    if (!b) return;
    sel.value = b.dataset.order;
    $("#elaqe").scrollIntoView({ behavior: "smooth" });
  }
  grid.addEventListener("click", goOrder);
  $("#popular").addEventListener("click", goOrder);

  $("#orderForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const msg = `Salam! Sifariş:\nAd: ${f.get("ad")}\nTelefon: ${f.get("tel")}\nXidmət: ${f.get("xidmet")}\nÜnvan: ${f.get("unvan") || "-"}\nQeyd: ${f.get("qeyd") || "-"}`;
    window.open(waLink(msg), "_blank", "noopener");
  });
})();
