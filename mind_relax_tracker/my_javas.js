// ==========================
// 🎠 Carousel Scroll Logic
// ==========================
const boxesWrapper = document.getElementById("boxesWrapper");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentScroll = 0;
const boxScrollAmount = 380; // box width (350) + gap (30)

if (boxesWrapper && nextBtn && prevBtn) {
  nextBtn.addEventListener("click", () => {
    const maxScroll = boxesWrapper.scrollWidth - boxesWrapper.clientWidth;
    currentScroll = Math.min(currentScroll + boxScrollAmount, maxScroll);
    boxesWrapper.style.transform = `translateX(-${currentScroll}px)`;
  });

  prevBtn.addEventListener("click", () => {
    currentScroll = Math.max(currentScroll - boxScrollAmount, 0);
    boxesWrapper.style.transform = `translateX(-${currentScroll}px)`;
  });
}


const scrollContainer = document.getElementById("scrollContainer");
const scrollLeftBtn = document.getElementById("scrollLeft");
const scrollRightBtn = document.getElementById("scrollRight");
const scrollStep = 400;

if (scrollContainer && scrollLeftBtn && scrollRightBtn) {
  scrollLeftBtn.addEventListener("click", () => {
    scrollContainer.scrollTo({
      left: scrollContainer.scrollLeft - scrollStep,
      behavior: "smooth"
    });
  });

  scrollRightBtn.addEventListener("click", () => {
    scrollContainer.scrollTo({
      left: scrollContainer.scrollLeft + scrollStep,
      behavior: "smooth"
    });
  });
}

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {
  question.addEventListener("click", () => {
    const faqItem = question.parentElement;
    faqItem.classList.toggle("active");
  });
});
