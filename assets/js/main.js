/* TRUMEAU storefront template (RU/KZ) — main.js */
(function () {
  const STORAGE_KEY = "trumeau_lang";

  const I18N = {
    ru: {
      "top.dealer": "Контакты",
      "top.catalogs": "Каталоги",
      "nav.new": "NEW",
      "nav.mirrors": "ЗЕРКАЛА",
      "nav.furniture": "МЕБЕЛЬ",
      "nav.textile": "ТЕКСТИЛЬ",
      "nav.wall": "ДЕКОР",
      "nav.accessories": "АКСЕССУАРЫ",
      "hero.explore": "СМОТРЕТЬ",
      "home.hero_kicker": "TRUMEAU",
      "home.hero_title": "Зеркала",
      "home.hero_sub": "Сайт-витрина. Позже добавим фото/видео, цены, размеры и полноценную оплату.",
      "category.kicker": "TRUMEAU",
      "mirrors.title": "Зеркала",
      "mirrors.subtitle": "Каталог зеркал — фильтры слева, карточки справа.",
      "filters.shop_by_style": "Shop by style",
      "filters.shop_by_shape": "Shape",
      "filters.shop_by_color": "Shop by color",
      "filters.all": "Все",
      "filters.modern": "Современный",
      "filters.classic": "Классика",
      "filters.rect": "Прямоугольные",
      "filters.round": "Круглые",
      "filters.arched": "Арочные",
      "filters.gold": "Золото",
      "filters.silver": "Серебро",
      "filters.white": "Белый",
      "grid.loading": "Загружаем товары…",
      "grid.empty": "Пока нет товаров под эти фильтры.",
      "dealer.title": "Контакты",
      "dealer.subtitle": "TRUMEAU — зеркала, мебель и текстиль в наличии и под заказ.",
      "dealer.address_label": "Адрес",
      "dealer.phone_label": "Телефон",
      "dealer.whatsapp_label": "WhatsApp",
      "dealer.whatsapp_cta": "Написать в WhatsApp",
      "dealer.delivery_title": "Доставка",
      "contact.address_value": "г. Алматы, Жамбыла 114/85, оф. 227, 2-й этаж",
      "contact.phone_value": "+7 701 226 12 66",
      "delivery.line1": "Доставка по Алматы и по Астане внутри города — бесплатно.",
      "delivery.line2": "Доставка Алматы → Астана — бесплатно (5 рабочих дней).",
      "delivery.line3": "В другие регионы Казахстана отправляем транспортной компанией DPD.",
      "footer.brand": "TRUMEAU",
      "footer.contacts": "Контакты",
      "footer.delivery": "Доставка",
      "footer.note": "Сайт в разработке. Данные и ассортимент будут дополняться."
    },
    kz: {
      "top.dealer": "Байланыс",
      "top.catalogs": "Каталогтар",
      "nav.new": "NEW",
      "nav.mirrors": "АЙНАЛАР",
      "nav.furniture": "ЖИҺАЗ",
      "nav.textile": "ТОҚЫМА",
      "nav.wall": "ҚАБЫРҒА ДЕКОРЫ",
      "nav.accessories": "АКСЕССУАРЛАР",
      "hero.explore": "КӨРУ",
      "home.hero_kicker": "TRUMEAU",
      "home.hero_title": "Айналар",
      "home.hero_sub": "Витрина-сайт. Кейін фото/видео, бағалар, өлшемдер және толық төлем қосамыз.",
      "category.kicker": "TRUMEAU",
      "mirrors.title": "Айналар",
      "mirrors.subtitle": "Айна каталогы — сол жақта сүзгілер, оң жақта карточкалар.",
      "filters.shop_by_style": "Стиль бойынша",
      "filters.shop_by_shape": "Пішіні",
      "filters.shop_by_color": "Түсі бойынша",
      "filters.all": "Барлығы",
      "filters.modern": "Заманауи",
      "filters.classic": "Классика",
      "filters.rect": "Тікбұрыш",
      "filters.round": "Домалақ",
      "filters.arched": "Арка",
      "filters.gold": "Алтын",
      "filters.silver": "Күміс",
      "filters.white": "Ақ",
      "grid.loading": "Тауарлар жүктелуде…",
      "grid.empty": "Бұл сүзгілерге сәйкес тауар жоқ.",
      "dealer.title": "Байланыс",
      "dealer.subtitle": "TRUMEAU — айналар, жиһаз және тоқыма (қоймада және тапсырыспен).",
      "dealer.address_label": "Мекенжай",
      "dealer.phone_label": "Телефон",
      "dealer.whatsapp_label": "WhatsApp",
      "dealer.whatsapp_cta": "WhatsApp жазу",
      "dealer.delivery_title": "Жеткізу",
      "contact.address_value": "Алматы қ., Жамбыл көш. 114/85, 227 кеңсе, 2-қабат",
      "contact.phone_value": "+7 701 226 12 66",
      "delivery.line1": "Алматы мен Астана ішінде жеткізу — тегін.",
      "delivery.line2": "Алматы → Астана жеткізу — тегін (5 жұмыс күні).",
      "delivery.line3": "Қазақстанның басқа өңірлеріне DPD тасымал компаниясымен жібереміз.",
      "footer.brand": "TRUMEAU",
      "footer.contacts": "Байланыс",
      "footer.delivery": "Жеткізу",
      "footer.note": "Сайт жасалуда. Мәліметтер мен ассортимент толықтырылады."
    }
  };

  function getLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "ru" || saved === "kz") return saved;
    const b = (navigator.language || "ru").toLowerCase();
    return b.startsWith("kk") || b.startsWith("kz") ? "kz" : "ru";
  }

  function t(key, lang) {
    const L = I18N[lang] || I18N.ru;
    return (L && L[key]) ? L[key] : key;
  }

  function applyTranslations(lang) {
    document.documentElement.setAttribute("lang", lang === "kz" ? "kk" : "ru");
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      el.textContent = t(key, lang);
    });
    // mark active button
    document.querySelectorAll("[data-set-lang]").forEach((btn) => {
      const v = btn.getAttribute("data-set-lang");
      btn.classList.toggle("active", v === lang);
    });
  }

  function setLang(lang) {
    if (lang !== "ru" && lang !== "kz") return;
    localStorage.setItem(STORAGE_KEY, lang);
    applyTranslations(lang);
    // re-render products title language
    if (window.__TRUMEAU_RENDER_PRODUCTS) window.__TRUMEAU_RENDER_PRODUCTS();
  }

  /* Drawer menu */
  function initDrawer() {
    const burger = document.querySelector("[data-burger]");
    const overlay = document.querySelector("[data-drawer-overlay]");
    const closeBtn = document.querySelector("[data-drawer-close]");
    const close = () => document.body.classList.remove("nav-open");
    const open = () => document.body.classList.add("nav-open");

    if (burger) burger.addEventListener("click", () => {
      document.body.classList.contains("nav-open") ? close() : open();
    });
    if (overlay) overlay.addEventListener("click", close);
    if (closeBtn) closeBtn.addEventListener("click", close);

    // close after clicking a link in drawer
    document.querySelectorAll(".drawer a").forEach((a) => a.addEventListener("click", close));
    // ESC closes
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
  }

  /* Products (mirrors / furniture) */
  function initProducts() {
    const page = document.body.getAttribute("data-page");
    const grid = document.querySelector("[data-products-grid]");
    if (!grid) return;

    const dataUrl = page === "furniture"
      ? "assets/data/products-furniture.json"
      : "assets/data/products-mirrors.json";

    let all = [];
    const state = { style: "all", shape: "all", color: "all" };

    function matches(item) {
      const okStyle = state.style === "all" || item.style === state.style;
      const okShape = state.shape === "all" || item.shape === state.shape;
      const okColor = state.color === "all" || item.color === state.color;
      return okStyle && okShape && okColor;
    }

    function render() {
      const lang = getLang();
      const visible = all.filter(matches);
      grid.innerHTML = "";
      if (!visible.length) {
        const p = document.createElement("p");
        p.className = "small";
        p.textContent = t("grid.empty", lang);
        grid.appendChild(p);
        return;
      }
      visible.forEach((item) => {
        const card = document.createElement("article");
        card.className = "card";
        const title = (lang === "kz" ? item.title_kz : item.title_ru) || item.title_ru || item.title_kz || item.id;

        card.innerHTML = `
          <div class="imgwrap">
            <img loading="lazy" src="${item.image}" alt="${title}">
          </div>
          <div class="meta">
            <p class="title">${title}</p>
            <p class="sub">${t("footer.note", lang)}</p>
          </div>
        `;
        grid.appendChild(card);
      });
    }

    window.__TRUMEAU_RENDER_PRODUCTS = render;

    // Filters
    document.querySelectorAll("[data-filter-key][data-filter-value]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const key = btn.getAttribute("data-filter-key");
        const val = btn.getAttribute("data-filter-value");
        if (!key || !val) return;
        state[key] = val;

        // set active within that filter group
        const group = btn.closest("[data-filter-group]");
        if (group) {
          group.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
        }
        btn.classList.add("active");

        render();
      });
    });

    // initial placeholders
    grid.innerHTML = `<p class="small">${t("grid.loading", getLang())}</p>`;

    fetch(dataUrl, { cache: "no-store" })
      .then((r) => r.ok ? r.json() : Promise.reject(new Error("HTTP " + r.status)))
      .then((data) => {
        all = Array.isArray(data.items) ? data.items : [];
        render();
      })
      .catch(() => {
        // If GitHub Pages caching or path issue: still render nothing
        all = [];
        render();
      });
  }

  /* Active link underline */
  function markActiveNav() {
    const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    document.querySelectorAll(".nav-links a, .drawer a").forEach((a) => {
      const href = (a.getAttribute("href") || "").toLowerCase();
      a.classList.toggle("active", href === path);
    });
  }

  function init() {
    initDrawer();
    markActiveNav();
    applyTranslations(getLang());
    initProducts();

    document.querySelectorAll("[data-set-lang]").forEach((btn) => {
      btn.addEventListener("click", () => setLang(btn.getAttribute("data-set-lang")));
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
