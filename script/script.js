document.getElementById('playButton').addEventListener('click', function () {
    var video = document.getElementById('myVideo');
    var overlay = document.querySelector('.overlay');

    overlay.style.display = 'none'; // Скрываем постер и кнопку
    video.style.display = 'block'; // Показываем видео
    video.play(); // Запуск видео
});


document.querySelectorAll('.courses-program__header').forEach(header => {
    header.addEventListener('click', () => {
        const module = header.getAttribute('data-module');
        const content = document.querySelector(`.courses-program__content[data-content="${module}"]`);
        const isActive = header.parentElement.classList.contains('courses-program__module--active');

        document.querySelectorAll('.courses-program__module').forEach(module => {
            module.classList.remove('courses-program__module--active');
            module.querySelector('.courses-program__content').style.display = 'none';
        });

        if (!isActive) {
            header.parentElement.classList.add('courses-program__module--active');
            content.style.display = 'block';
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".courses-format__tab");
    const contents = document.querySelectorAll(".courses-format__content-item");
    const arrows = document.querySelectorAll(".courses-format__arrow");
    let activeIndex = 0;
  
    // Tab click event
    tabs.forEach((tab, index) => {
      tab.addEventListener("click", function () {
        switchTab(index);
      });
    });
  
    // Arrow click event
    arrows.forEach(arrow => {
      arrow.addEventListener("click", function () {
        if (this.classList.contains("prev")) {
          activeIndex = activeIndex > 0 ? activeIndex - 1 : tabs.length - 1;
        } else {
          activeIndex = activeIndex < tabs.length - 1 ? activeIndex + 1 : 0;
        }
        switchTab(activeIndex);
      });
    });
  
    function switchTab(index) {
      // Remove active class from all tabs and content
      tabs.forEach(tab => tab.classList.remove("active"));
      contents.forEach(content => content.classList.remove("active"));
  
      // Add active class to the current tab and content
      tabs[index].classList.add("active");
      contents[index].classList.add("active");
      activeIndex = index;
    }
});

var swiper = new Swiper('.courses-reviews__right-slider', {
  effect: 'fade',             
  fadeEffect: { 
    crossFade: true           
  },
  loop: true,               
  navigation: {            
    nextEl: '.courses-reviews-next',
    prevEl: '.courses-reviews-prev',
  },
  speed: 600,                
});
  
document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".courses-faq-main__item");

  faqItems.forEach(item => {
    const question = item.querySelector(".courses-faq-main__question");
    
    question.addEventListener("click", () => {
      faqItems.forEach(i => i.classList.remove("active"));
      
      item.classList.toggle("active");
    });
  });
});

