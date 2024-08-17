function startCelebration() {
  // Kutlama CSS dosyasını dinamik olarak yükle
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "celebration.css";
  document.head.appendChild(link);

  // Var olan içeriği temizle ve sadece ortada bir başlık göster
  document.body.innerHTML = `
        <div class="celebration-container">
          <h1 class="celebration-title">Tebrikler! Doğru Sayıyı Bildiniz!</h1>
          <button class="new-game-button">Yeni Oyun</button>
        </div>
      `;

  // Havai fişek efektleri için bir canvas elemanı oluşturma
  const canvas = document.createElement("canvas");
  canvas.classList.add("fireworks");
  document.body.appendChild(canvas);

  // Canvas boyutlarını ayarlama
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // canvas-confetti kütüphanesini yükleme ve başlatma
  const script = document.createElement("script");
  script.src =
    "https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js";
  document.head.appendChild(script);

  script.onload = function () {
    const duration = 15 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  // Yeni Oyun butonuna tıklama olayı ekle
  document.querySelector(".new-game-button").addEventListener("click", () => {
    window.location.reload(); // Sayfayı yenileyerek yeni bir oyun başlatır
  });
}
