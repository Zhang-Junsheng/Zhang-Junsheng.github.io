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
const languageStorageKey = "junsheng-site-language";

const translations = {
  zh: {
    documentTitle: "Junsheng Zhang（张俊升）| 个人网站",
    metaDescription: "Junsheng Zhang（张俊升）的中文个人网站，展示研究、教学、研讨班与联系方式。",
    skipLink: "跳到主要内容",
    mainNavAria: "主导航",
    brandAria: "返回首页",
    navHome: "首页",
    navAbout: "关于我",
    navProjects: "项目",
    navContact: "联系方式",
    navToggleOpen: "打开导航菜单",
    navToggleClose: "关闭导航菜单",
    langToggleText: "EN",
    langToggleAria: "切换到英文",
    heroEyebrow: "个人主页",
    heroTitle: "你好，我是 Junsheng Zhang（张俊升）",
    heroText: "我目前是 NYU Courant 的 Courant Instructor，研究兴趣集中在复几何、Kähler 几何和 Kähler-Ricci 流等方向。",
    heroButton: "查看我的项目",
    profileAlt: "Junsheng Zhang 的照片",
    profileRole: "Courant Instructor, NYU Courant",
    aboutEyebrow: "About",
    aboutTitle: "关于我",
    aboutText: "我目前在 NYU Courant 担任 Courant Instructor（博士后职位），与 Valentino Tosatti 合作。此前，我于 2024 年秋季在 SL Math 担任博士后；博士毕业于 UC Berkeley，导师是 Song Sun。这个网站用于整理我的研究、教学、研讨班与联系方式。",
    aboutLinksAria: "相关链接",
    projectsEyebrow: "Work",
    projectsTitle: "项目展示",
    projectsIntro: "这里汇总研究论文、教学和研讨班相关内容。",
    researchTitle: "研究论文",
    researchText: "研究主题包括 Kähler-Ricci flow、cscK surfaces、Ricci bounded limit spaces 与相关复几何问题。",
    researchLink: "查看研究",
    researchLinkAria: "查看研究论文",
    teachingTitle: "教学",
    teachingText: "在 NYU 讲授 Analysis，课程时间包括 Spring 2025、Fall 2025 和 Spring 2026。",
    teachingLink: "查看教学",
    teachingLinkAria: "查看教学内容",
    seminarTitle: "研讨班与笔记",
    seminarText: "参与组织 informal online complex geometry seminar，并整理相关讨论与笔记入口。",
    seminarLink: "查看笔记",
    seminarLinkAria: "查看研讨班与笔记",
    contactEyebrow: "Contact",
    contactTitle: "联系方式",
    githubContact: "GitHub：github.com/Zhang-Junsheng",
    emailContact: "邮箱：jz7561@nyu.edu",
    officeContact: "办公室：Warren Weaver Hall 925",
    footerRights: "Junsheng Zhang. 保留所有权利。",
  },
  en: {
    documentTitle: "Junsheng Zhang | Personal Website",
    metaDescription: "Personal website of Junsheng Zhang, featuring research, teaching, seminars, notes, and contact information.",
    skipLink: "Skip to main content",
    mainNavAria: "Main navigation",
    brandAria: "Back to home",
    navHome: "Home",
    navAbout: "About",
    navProjects: "Projects",
    navContact: "Contact",
    navToggleOpen: "Open navigation menu",
    navToggleClose: "Close navigation menu",
    langToggleText: "中",
    langToggleAria: "Switch to Chinese",
    heroEyebrow: "Personal Homepage",
    heroTitle: "Hello, I am Junsheng Zhang",
    heroText: "I am currently a Courant Instructor at NYU Courant. My research interests center on complex geometry, Kähler geometry, and the Kähler-Ricci flow.",
    heroButton: "View My Work",
    profileAlt: "Photo of Junsheng Zhang",
    profileRole: "Courant Instructor, NYU Courant",
    aboutEyebrow: "About",
    aboutTitle: "About Me",
    aboutText: "I am currently a Courant Instructor, a postdoctoral position, at NYU Courant, working with Valentino Tosatti. Before this, I was a postdoc at SL Math in Fall 2024. I completed my Ph.D. at UC Berkeley under the supervision of Song Sun. This website collects my research, teaching, seminars, notes, and contact information.",
    aboutLinksAria: "Related links",
    projectsEyebrow: "Work",
    projectsTitle: "Projects",
    projectsIntro: "This section collects research papers, teaching, seminars, and related notes.",
    researchTitle: "Research",
    researchText: "My research includes the Kähler-Ricci flow, cscK surfaces, Ricci bounded limit spaces, and related problems in complex geometry.",
    researchLink: "View Research",
    researchLinkAria: "View research papers",
    teachingTitle: "Teaching",
    teachingText: "I teach Analysis at NYU, including Spring 2025, Fall 2025, and Spring 2026.",
    teachingLink: "View Teaching",
    teachingLinkAria: "View teaching information",
    seminarTitle: "Seminars and Notes",
    seminarText: "I am co-organizing an informal online complex geometry seminar and collecting related discussions and notes.",
    seminarLink: "View Notes",
    seminarLinkAria: "View seminars and notes",
    contactEyebrow: "Contact",
    contactTitle: "Contact",
    githubContact: "GitHub: github.com/Zhang-Junsheng",
    emailContact: "Email: jz7561@nyu.edu",
    officeContact: "Office: Warren Weaver Hall 925",
    footerRights: "Junsheng Zhang. All rights reserved.",
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

applyLanguage(readStoredLanguage() ?? "zh");
