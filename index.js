var header = document.getElementById("header");
var navegationHeader = document.getElementById("navegation_header")
var content = document.getElementById("content");
var showSidebar = false;
const sections = document.querySelectorAll("#sobreMim, #competencias, #projetos, #contatos");
const navLinks = document.querySelectorAll(".nav-link");

function toggle(){

    showSidebar = !showSidebar
    if(showSidebar){
        navegationHeader.style.marginLeft = "0vw";
        navegationHeader.style.animationName = "showSidebar";
        content.style.filter= "blur(2px)";
    }else{
        navegationHeader.style.marginLeft = "-100vw";
        navegationHeader.style.animationName = "";
        content.style.filter = '';
    }


}

function closeSidebar(){
    if(showSidebar){
        toggle();
    }
}
window.addEventListener("resize", function(event){
    if(this.window.innerWidth > 768 && showSidebar){
        toggle();
    }
})

function updateActiveLink() {
    let currentSectionId = "";
    const headerHeight = document.getElementById("header").offsetHeight;
    const scrollY = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight - 20;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollY >= sectionTop && scrollY < sectionBottom) {
            currentSectionId = section.id;
        }
    });

    if ((window.innerHeight + scrollY) >= document.body.offsetHeight - 5) {
        currentSectionId = "contatos";
    }

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSectionId}`) {
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", updateActiveLink);
window.addEventListener("load", updateActiveLink);
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (showSidebar) {
            toggle(); 
        }
    });
});