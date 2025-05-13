// スライダー機能
let currentSlide = 0;
const slideInterval = 3000;

function showNextSlide() {
  const track = document.querySelector('.slider-track');
  const slides = document.querySelectorAll('.slide');
  currentSlide = (currentSlide + 1) % slides.length;
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// スライダーの自動再生
let slideTimer = setInterval(showNextSlide, slideInterval);

// スライダーにホバーした時に自動再生を停止
document.querySelector('.slider-container').addEventListener('mouseenter', () => {
  clearInterval(slideTimer);
});

// スライダーからマウスが離れた時に自動再生を再開
document.querySelector('.slider-container').addEventListener('mouseleave', () => {
  slideTimer = setInterval(showNextSlide, slideInterval);
});

// FAQの開閉機能
function toggleFaq(element) {
  const answer = element.nextElementSibling;
  const isOpen = answer.style.display === 'block';
  
  // すべてのFAQを閉じる
  document.querySelectorAll('.faq-answer').forEach(faq => {
    faq.style.display = 'none';
  });
  
  // クリックされたFAQを開く（閉じる）
  answer.style.display = isOpen ? 'none' : 'block';
}

// 画像の遅延読み込み
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
}); 