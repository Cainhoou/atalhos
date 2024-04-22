document.addEventListener("keydown", function(event){
    if(event.ctrlKey && event.key === "q") {
        window.location.href = "https://www.instagram.com/p/C1ktXYWux0rvU2XzKlVyVcaNN5DDboY38Biu6o0/?img_index=1";
    }
    if (event.ctrlKey && event.key === "i") {
        window.open("mozao.jpeg");
    }
    if (event.ctrlKey && event.key === "m") {
        document.getElementById("mensagem-input").focus();
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var optionsBtn = document.getElementById('options-btn');
    var optionsMenu = document.getElementById('options-menu');
  
    optionsBtn.addEventListener('click', function() {
      if (optionsMenu.style.display === 'block' || optionsMenu.style.display === '') {
        optionsMenu.style.display = 'none';
      } else {
        optionsMenu.style.display = 'block';
      }
    });
  });