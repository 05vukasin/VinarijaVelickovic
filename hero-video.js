document.addEventListener("DOMContentLoaded", () => {
    const playBtn = document.getElementById("play-btn"); // Dugme za otvaranje modala
    const modal = document.getElementById("video-modal"); // Modal element
    const closeBtn = document.getElementById("close-video"); // Dugme za zatvaranje
    const video = document.getElementById("hero-video"); // Video element
  
    // Otvaranje modala
    playBtn.addEventListener("click", (e) => {
      e.preventDefault(); // Sprečava podrazumevano ponašanje linka
      modal.style.display = "flex"; // Prikazuje modal
      video.play(); // Pokreće video
    });
  
    // Zatvaranje modala dugmetom
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none"; // Sakriva modal
      video.pause(); // Pauzira video
      video.currentTime = 0; // Vraća video na početak
    });
  
    // Zatvaranje modala klikom van videa
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
        video.pause();
        video.currentTime = 0;
      }
    });
  });
  