/* ====== SAYT MƏLUMATLARI — burada redaktə edin ======
   price: rəqəm  → "50 ₼"
          mətn   → olduğu kimi göstərilir (məs: "40 ₼-dən")
          null   → "Tezliklə"
*/

// Əlaqə nömrəsi (WhatsApp üçün yalnız rəqəmlər, məs: 994501234567)
const CONTACT = {
  phone: "+994 00 000 00 00",
  whatsapp: "994000000000"
};

// Ana səhifədəki "Populyar xidmətlər" — adlar aşağıdakı xidmət adları ilə eyni olmalıdır
const POPULAR = [
  "Windows 10 / 11 quraşdırılması və sazlanması",
  "Telefon ekranının dəyişdirilməsi",
  "Kompüter diaqnostikası",
  "Notebookun profilaktik təmizlənməsi + termal pasta",
  "Printerin quraşdırılması"
];

const SERVICE_CATEGORIES = [
  {
    id: "proqram",
    icon: "💿",
    title: "Proqram təminatı və lisenziyalar",
    services: [
      { name: "Windows 10 / 11 quraşdırılması və sazlanması", price: 50, desc: "Təmiz quraşdırma, drayverlər, yenilənmələr və lisenziya ilə aktivləşdirmə." },
      { name: "Formatlama + əməliyyat sisteminin quraşdırılması", price: "Sadə 60 ₼ · Gaming 80 ₼", desc: "Diskin formatlanması və sistemin sıfırdan qurulması." },
      { name: "macOS quraşdırılması", price: 60 },
      { name: "Əməliyyat sisteminin yenilənməsi", price: 50 },
      { name: "Drayverlərin quraşdırılması və yenilənməsi", price: 50 },
      { name: "MS Office quraşdırılması (lisenziyalı)", price: 100, desc: "Office 2021 / 365 — quraşdırma və lisenziyalanma." },
      { name: "Antivirus quraşdırılması və sazlanması", price: 30 },
      { name: "Proqramların quraşdırılması və sazlanması", price: "40 ₼-dən" },
      { name: "Dizayn proqramları", price: null, desc: "Adobe Photoshop, Illustrator, Premiere, After Effects, CorelDRAW və digərləri." },
      { name: "Memarlıq və mühəndislik proqramları", price: null, desc: "3ds Max, AutoCAD, Revit, SketchUp, Lumion, ArchiCAD və Autodesk paketləri." },
      { name: "Digər lisenziyalı proqramlar", price: null, desc: "Mühasibat, 1C və sahəyə xas proqramlar." }
    ]
  },
  {
    id: "komputer",
    icon: "💻",
    title: "Kompüter və notebook",
    services: [
      { name: "Kompüter diaqnostikası", price: 40 },
      { name: "Virus və zərərli proqramların təmizlənməsi", price: 30 },
      { name: "Kompüterin sürətinin optimallaşdırılması", price: null },
      { name: "Məlumatların köçürülməsi", price: 30 },
      { name: "HDD / SSD məlumat köçürülməsi", price: 50 },
      { name: "SD kart və HDD-lərdən məlumat bərpası", price: null },
      { name: "Backup və ehtiyat nüsxənin hazırlanması", price: 50 },
      { name: "SSD quraşdırılması", price: 40 },
      { name: "RAM quraşdırılması", price: 40 },
      { name: "Notebookun profilaktik təmizlənməsi + termal pasta", price: 100 },
      { name: "Google hesabının sazlanması", price: 20 },
      { name: "Microsoft hesabının sazlanması", price: 20 },
      { name: "Apple hesabı və cihaz sazlanması", price: 40 },
      { name: "Wi‑Fi və internet bağlantısının sazlanması", price: null },
      { name: "Printerin kompüterə qoşulması və sazlanması", price: 40 }
    ]
  },
  {
    id: "printer",
    icon: "🖨️",
    title: "Printer xidmətləri",
    services: [
      { name: "Printerin quraşdırılması", price: 50 },
      { name: "Printerin kompüterə qoşulması", price: 35 },
      { name: "Wi‑Fi printerin sazlanması", price: 50 },
      { name: "Printer drayverinin quraşdırılması", price: 35 },
      { name: "Çap problemlərinin diaqnostikası", price: 25 },
      { name: "Kartric üzrə ilkin diaqnostika", price: 25 },
      { name: "Printerin profilaktik təmizlənməsi", price: 30 },
      { name: "Printerin proqram təminatı üzrə sazlanması", price: 35 }
    ]
  },
  {
    id: "telefon",
    icon: "📱",
    title: "Telefon və smart cihazlar",
    services: [
      { name: "Telefonun ilkin sazlanması", price: 30 },
      { name: "Məlumatların köçürülməsi", price: 40 },
      { name: "Google hesabının sazlanması", price: 20 },
      { name: "Apple ID və cihaz sazlanması", price: 30 },
      { name: "Telefon backup-ının hazırlanması", price: 40 },
      { name: "Ehtiyat nüsxədən məlumatların bərpası", price: 30 },
      { name: "Smart saatın telefona qoşulması", price: 30 },
      { name: "Smart saatın ilkin sazlanması", price: 30 },
      { name: "Tətbiqlərin quraşdırılması və sazlanması", price: 20 },
      { name: "Valideyn nəzarətinin qurulması", price: 30 }
    ]
  },
  {
    id: "temir",
    icon: "🔧",
    title: "Fiziki təmir",
    note: "Qiymətlər işçilik üçündür, ehtiyat hissəsi ayrıca hesablanır.",
    services: [
      { name: "Telefon diaqnostikası", price: 20 },
      { name: "Telefon ekranının dəyişdirilməsi", price: 30 },
      { name: "Telefon batareyasının dəyişdirilməsi", price: 20 },
      { name: "Şarj girişinin dəyişdirilməsi / təmiri", price: 20 },
      { name: "Dinamik və mikrofon üzrə təmir", price: 20 },
      { name: "Kamera modulunun dəyişdirilməsi", price: 25 },
      { name: "Notebook ekranının dəyişdirilməsi", price: 40 },
      { name: "Notebook klaviaturasının dəyişdirilməsi", price: 50 },
      { name: "Notebook batareyasının dəyişdirilməsi", price: 40 },
      { name: "Notebook şarj girişinin təmiri", price: 50 },
      { name: "Korpus və digər hissələrin dəyişdirilməsi", price: "60 ₼-dən" },
      { name: "Smart saat üzrə fiziki təmir", price: 30 }
    ]
  },
  {
    id: "ev-ofis",
    icon: "🏠",
    title: "Ev və ofis texniki dəstəyi",
    services: [
      { name: "Ev kompüterlərinin tam texniki sazlanması", price: 100 },
      { name: "Ev Wi‑Fi sisteminin sazlanması", price: null },
      { name: "Printer və kompüter sisteminin qurulması", price: 40 },
      { name: "Yeni alınmış kompüterin ilkin qurulması", price: null, desc: "Windows aktivləşdirmə, Office və drayverlər." },
      { name: "Yeni telefonun ilkin qurulması", price: 30 },
      { name: "Yeni smart saatın ilkin qurulması", price: 25 },
      { name: "Evdəki cihazların bir-birinə qoşulması", price: 30 },
      { name: "İstifadəçiyə cihaz üzrə izah və təlim", price: 20 }
    ]
  },
  {
    id: "tehlukesizlik",
    icon: "📹",
    title: "Təhlükəsizlik sistemləri",
    services: [
      { name: "Təhlükəsizlik kameraları", price: null, desc: "IP və analog kameraların, NVR/DVR-ın quraşdırılması, telefona uzaqdan baxış." },
      { name: "X-ray və metal detektor", price: null, desc: "Rentgen baqaj skanerləri və metal detektor qapılarının qurulması." },
      { name: "Face / Finger control", price: null, desc: "Üz və barmaq izi ilə tanıma terminalları, işçi davamiyyəti." }
    ]
  },
  {
    id: "giris",
    icon: "🚧",
    title: "Giriş-çıxışa nəzarət",
    services: [
      { name: "Turniket", price: null, desc: "Satış, quraşdırma və servis — tripod, tam boy, sürüşən turniketlər." },
      { name: "Şlaqbaum", price: null, desc: "Avtomatik şlaqbaumların satışı, quraşdırılması və texniki xidməti." },
      { name: "Access control sistemləri", price: null, desc: "Kart, kod və biometrik giriş sistemlərinin qurulması." },
      { name: "Sistemlərin yenilənməsi", price: null, desc: "Mövcud giriş-çıxış sistemlərinin yenilənməsi və ya sıfırdan yığılması." }
    ]
  },
  {
    id: "sebeke",
    icon: "🌐",
    title: "Şəbəkə və infrastruktur",
    services: [
      { name: "Zəif axın sistemləri", price: null, desc: "Zəif cərəyan (low-voltage) sistemlərinin layihələndirilməsi və yığılması." },
      { name: "Rack kabin", price: null, desc: "Server/rack kabinlərin quraşdırılması, yığılması və kabel reqlajı." },
      { name: "İnternet xətlərinin çəkilməsi", price: null, desc: "Kabel çəkilişi, ofis və bina daxili şəbəkə." },
      { name: "Şəbəkə avadanlıqları", price: null, desc: "Switch, router, modem, MiFi, PoE avadanlıqlarının qurulması və konfiqurasiyası." },
      { name: "Şəbəkənin yaradılması", price: null, desc: "Yeni şəbəkənin qurulması və ya mövcud şəbəkəyə qoşulma." }
    ]
  }
];

// Satış məhsulları — price: rəqəm (AZN) və ya null ("Qiymət soruşun")
const PRODUCTS = [
  { name: "Windows 11 Pro lisenziyası", cat: "Lisenziyalar", icon: "🪟", price: null, note: "Orijinal açar + quraşdırma" },
  { name: "Microsoft Office 2021 Pro Plus", cat: "Lisenziyalar", icon: "📄", price: null, note: "Ömürlük lisenziya" },
  { name: "Antivirus (1 il)", cat: "Lisenziyalar", icon: "🛡️", price: null, note: "1–3 cihaz" },
  { name: "SSD disk", cat: "Kompüter hissələri", icon: "💾", price: null, note: "128 / 256 / 512 GB" },
  { name: "RAM (operativ yaddaş)", cat: "Kompüter hissələri", icon: "🧩", price: null, note: "Notebook və PC üçün" },
  { name: "USB Hub", cat: "Kompüter hissələri", icon: "🔀", price: null, note: "USB-A / USB-C" },
  { name: "Kompüter aksesuarları", cat: "Kompüter hissələri", icon: "🖱️", price: null, note: "Siçan, klaviatura və s." },
  { name: "USB kabel", cat: "Aksesuarlar", icon: "🔌", price: null, note: "Type-C, Lightning, Micro USB" },
  { name: "Adapter (şarj cihazı)", cat: "Aksesuarlar", icon: "⚡", price: null, note: "Apple və digər markalar" },
  { name: "Powerbank", cat: "Aksesuarlar", icon: "🔋", price: null, note: "Müxtəlif tutumlar" },
  { name: "Qulaqlıq", cat: "Aksesuarlar", icon: "🎧", price: null, note: "Simli və simsiz" },
  { name: "Telefon kabrosu", cat: "Aksesuarlar", icon: "📱", price: null, note: "Apple və digər modellər" },
  { name: "Qoruyucu şüşə", cat: "Aksesuarlar", icon: "🛡️", price: null, note: "Quraşdırma ilə" },
  { name: "Kamera qoruyucusu", cat: "Aksesuarlar", icon: "📸", price: null, note: "Telefon kamerası üçün" },
  { name: "Smart saat aksesuarları", cat: "Aksesuarlar", icon: "⌚", price: null, note: "Kəmər, şarj, qoruyucu" },
  { name: "Printer kabeli", cat: "Aksesuarlar", icon: "🖨️", price: null, note: "USB-B" },
  { name: "IP kamera 4MP (dome)", cat: "Kameralar", icon: "📷", price: null, note: "Gecə görüşü, PoE" },
  { name: "IP kamera 4MP (bullet)", cat: "Kameralar", icon: "📹", price: null, note: "Açıq hava, IP67" },
  { name: "NVR 8 kanal", cat: "Kameralar", icon: "🗄️", price: null, note: "HDD daxil deyil" },
  { name: "Tripod turniket", cat: "Giriş-çıxış", icon: "🚪", price: null, note: "Kart oxuyucu ilə" },
  { name: "Avtomatik şlaqbaum", cat: "Giriş-çıxış", icon: "🚧", price: null, note: "3–6 m qol" },
  { name: "Face ID terminal", cat: "Giriş-çıxış", icon: "🙂", price: null, note: "Üz + barmaq izi + kart" },
  { name: "PoE switch 8 port", cat: "Şəbəkə", icon: "🔌", price: null, note: "Gigabit, 120W" },
  { name: "Wi‑Fi router", cat: "Şəbəkə", icon: "📶", price: null, note: "Dual band, mesh dəstəyi" },
  { name: "Rack kabin 12U", cat: "Şəbəkə", icon: "🗃️", price: null, note: "Divar tipli, şüşə qapı" }
];
