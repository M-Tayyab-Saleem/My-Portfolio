function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

     let tx = 0;
     let container = document.getElementById("scroll-container")
     

     function slideforward () {
          if(tx > -90){
            tx -= 15;
          }
          container.style.transform = `translateX(${tx}%)`;
     } 
     function slidebackward () {
        if(tx < 0){
          tx += 15;
        }
         container.style.transform = `translateX(${tx}%)`;
   } 