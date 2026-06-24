const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("#nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");
const langToggle = document.querySelector("[data-lang-toggle]");
const textElements = document.querySelectorAll("[data-i18n]");
const ariaElements = document.querySelectorAll("[data-i18n-aria-label]");
const altElements = document.querySelectorAll("[data-i18n-alt]");
const metaElements = document.querySelectorAll("[data-i18n-content]");
const revealElements = document.querySelectorAll(".reveal");
const sections = document.querySelectorAll("main section[id]");
const year = document.querySelector("#year");
const languageStorageKey = "junsheng-site-language-v2";

const translations = {
  zh: {
    documentTitle: "Junsheng Zhang（张俊升）| 个人网站",
    metaDescription: "Junsheng Zhang（张俊升）的个人网站，展示研究、教学、研讨班与笔记。",
    skipLink: "跳到主要内容",
    mainNavAria: "主导航",
    brandAria: "返回首页",
    navHome: "首页",
    navResearch: "Research",
    navTeaching: "Teaching",
    navSeminars: "Seminars and notes",
    navToggleOpen: "打开导航菜单",
    navToggleClose: "关闭导航菜单",
    langToggleText: "EN",
    langToggleAria: "切换到英文",
    heroEyebrow: "个人主页",
    heroTitlePrefix: "你好，我是 ",
    heroTitleSuffix: "（张俊升）",
    heroText: "我的研究兴趣集中在 Kähler 几何，特别是 Kähler 几何中的 canonical metrics 和 Kähler-Ricci flows。",
    homeAboutBeforeCourant: "我目前在 ",
    homeAboutBeforeValentino: " 担任 Courant Instructor（博士后职位），mentor 是 ",
    homeAboutBeforeSlMath: "。此前，我于 2024 年秋季在 ",
    homeAboutBeforeBerkeley: " 担任博士后；博士毕业于 ",
    homeAboutBeforeSong: "，导师是 ",
    homeAboutEnd: "。",
    homeLinksAria: "相关链接",
    heroButton: "查看 Research",
    profileAlt: "Junsheng Zhang 的照片",
    researchEyebrow: "Research",
    researchSectionTitle: "Research",
    researchIntro: "论文列表如下。",
    teachingEyebrow: "Teaching",
    teachingSectionTitle: "Teaching",
    teachingAnalysisText: "Spring 2025, Fall 2025, Spring 2026",
    seminarsEyebrow: "Seminars and notes",
    seminarsSectionTitle: "Seminars and notes",
    notesLinksTitle: "Notes",
    seminarsLinksTitle: "Seminar links",
    seminarsLead: "我正在共同组织 ",
    seminarsLeadEnd: "。",
    seminarsGatLead: "这里也放上 ",
    seminarsGatEnd: "。",
    footerRights: "。保留所有权利。",
  },
  en: {
    documentTitle: "Junsheng Zhang | Personal Website",
    metaDescription: "Personal website of Junsheng Zhang, featuring research, teaching, seminars, and notes.",
    skipLink: "Skip to main content",
    mainNavAria: "Main navigation",
    brandAria: "Back to home",
    navHome: "Home",
    navResearch: "Research",
    navTeaching: "Teaching",
    navSeminars: "Seminars and notes",
    navToggleOpen: "Open navigation menu",
    navToggleClose: "Close navigation menu",
    langToggleText: "中文",
    langToggleAria: "Switch to Chinese",
    heroEyebrow: "Personal Homepage",
    heroTitlePrefix: "Hello, I am ",
    heroTitleSuffix: "",
    heroText: "My research interests center on Kähler geometry. In particular, canonical metrics in Kahler geometry and Kahler-Ricci flows.",
    homeAboutBeforeCourant: "I am currently a Courant Instructor, a postdoctoral position, at ",
    homeAboutBeforeValentino: ", working with ",
    homeAboutBeforeSlMath: ". Before this, I was a postdoc at ",
    homeAboutBeforeBerkeley: " in Fall 2024. I completed my Ph.D. at ",
    homeAboutBeforeSong: " under the supervision of ",
    homeAboutEnd: ".",
    homeLinksAria: "Related links",
    heroButton: "View Research",
    profileAlt: "Photo of Junsheng Zhang",
    researchEyebrow: "Research",
    researchSectionTitle: "Research",
    researchIntro: "Publications are listed below.",
    teachingEyebrow: "Teaching",
    teachingSectionTitle: "Teaching",
    teachingAnalysisText: "Spring 2025, Fall 2025, Spring 2026",
    seminarsEyebrow: "Seminars and notes",
    seminarsSectionTitle: "Seminars and notes",
    notesLinksTitle: "Notes",
    seminarsLinksTitle: "Seminar links",
    seminarsLead: "I am co-organizing the ",
    seminarsLeadEnd: ".",
    seminarsGatLead: "Here is the ",
    seminarsGatEnd: ".",
    footerRights: ". All rights reserved.",
  },
};

let currentLanguage = "zh";

if (year) {
  year.textContent = new Date().getFullYear();
}

function readStoredLanguage() {
  try {
    return localStorage.getItem(languageStorageKey);
  } catch {
    return null;
  }
}

function storeLanguage(language) {
  try {
    localStorage.setItem(languageStorageKey, language);
  } catch {
    // Browsers can block localStorage in private or restricted contexts.
  }
}

function getText(key) {
  return translations[currentLanguage][key] ?? translations.zh[key] ?? "";
}

function updateNavToggleLabel() {
  const isOpen = navMenu?.classList.contains("is-open") ?? false;
  navToggle?.setAttribute("aria-label", getText(isOpen ? "navToggleClose" : "navToggleOpen"));
}

function applyLanguage(language) {
  currentLanguage = language === "en" ? "en" : "zh";
  const dictionary = translations[currentLanguage];

  document.documentElement.lang = currentLanguage === "zh" ? "zh-CN" : "en";
  document.title = dictionary.documentTitle;

  textElements.forEach((element) => {
    const key = element.dataset.i18n;
    if (key && dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  ariaElements.forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    if (key && dictionary[key]) {
      element.setAttribute("aria-label", dictionary[key]);
    }
  });

  altElements.forEach((element) => {
    const key = element.dataset.i18nAlt;
    if (key && dictionary[key]) {
      element.setAttribute("alt", dictionary[key]);
    }
  });

  metaElements.forEach((element) => {
    const key = element.dataset.i18nContent;
    if (key && dictionary[key]) {
      element.setAttribute("content", dictionary[key]);
    }
  });

  updateNavToggleLabel();
  storeLanguage(currentLanguage);
}

function closeMenu() {
  document.body.classList.remove("nav-open");
  navMenu?.classList.remove("is-open");
  navToggle?.setAttribute("aria-expanded", "false");
  updateNavToggleLabel();
}

navToggle?.addEventListener("click", () => {
  const isOpen = navMenu?.classList.toggle("is-open") ?? false;
  document.body.classList.toggle("nav-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
  updateNavToggleLabel();
});

langToggle?.addEventListener("click", () => {
  applyLanguage(currentLanguage === "zh" ? "en" : "zh");
  closeMenu();
});

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealElements.forEach((element) => revealObserver.observe(element));

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.toggle(
              "is-active",
              link.getAttribute("href") === `#${entry.target.id}`
            );
          });
        }
      });
    },
    { rootMargin: "-45% 0px -45% 0px" }
  );

  sections.forEach((section) => sectionObserver.observe(section));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

applyLanguage(readStoredLanguage() ?? "en");
