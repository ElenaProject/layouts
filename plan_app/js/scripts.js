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
