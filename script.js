function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

     let tx = 0;
     let container = document.getElementById("cont")
     

     function slideforward () {
          if(tx > -50){
            tx -= 25;
          }
          cont.style.transform = "translateX(-25%)"
     } 
     function slidebackward () {
        if(tx < 0){
          tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
   } 