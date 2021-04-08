// accordion
let faqTriggers = document.querySelectorAll(".section-faq__item-trigger");

for (let faqTrigger of faqTriggers) {
  faqTrigger.addEventListener("click", function () {
    faqTrigger.parentNode.classList.toggle("section-faq__item--active");
  });
}
