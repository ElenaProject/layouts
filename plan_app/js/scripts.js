// submenu

// mobile or not
const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

if (isMobile.any()) {
  // если с мобильного добавляем к body класс _touch
  document.body.classList.add("_touch");

  // находим все стрелки в меню
  let linkArrows = document.querySelectorAll(".nav__link-arrow");
  // если они есть
  if (linkArrows.length > 0) {
    // для всех стрелок
    for (let i = 0; i < linkArrows.length; i++) {
      // назначаем обработчик
      linkArrows[i].addEventListener("click", function (e) {
        // при клике родителю добавляем класс _active
        linkArrows[i].parentElement.classList.toggle("_active");
      });
    }
  }
} else {
  // если не с мобильного - класс _pc
  document.body.classList.add("_pc");
}

// accordion

let faqList = document.querySelector(".section-faq__list");
// Находим все тригеры
let faqTriggers = document.querySelectorAll(".section-faq__item-trigger");

// на каждый тригер устанавливаем обработчик клика
for (let faqTrigger of faqTriggers) {
  faqTrigger.addEventListener("click", function () {
    // если в аккордеоне должна быть открыта одна единица
    if (faqList.classList.contains("one-item")) {
      let parent = faqTrigger.parentNode;

      if (parent.classList.contains("section-faq__item--active")) {
        parent.classList.remove("section-faq__item--active");
      } else {
        let faqItems = document.querySelectorAll(".section-faq__item");
        for (let faqTtem of faqItems) {
          faqTtem.classList.remove("section-faq__item--active");
        }
        parent.classList.add("section-faq__item--active");
      }
    }
    // если могут быть открыты несколько
    else {
      faqTrigger.parentNode.classList.toggle("section-faq__item--active");
    }
  });
}
