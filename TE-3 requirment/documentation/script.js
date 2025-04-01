document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    menuBtn.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  });
document.addEventListener("DOMContentLoaded", function () {
   
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            
            if (targetId === "home") {
               
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            } else {
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 50,
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    
    const infoLink = document.querySelector('nav a[href="#info"]');
    if (infoLink) {
        infoLink.addEventListener("click", function (event) {
            event.preventDefault();
            const infoSection = document.getElementById("information");
            if (infoSection) {
                window.scrollTo({
                    top: infoSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    }
});

