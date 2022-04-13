const links= document.getElementsByClassName("link");
const span = document.querySelectorAll("span");
const hiddenImages= document.getElementsByClassName("hidden-image");
const imagesDivs= document.getElementsByClassName("image-reveal");
for (i=0; i<links.length;i++){
    links[i].addEventListener("mousemove", e =>{
        let target= e.target.lastElementChild;
        let left= e.offsetX;
        let top=e.offsetY;
        target.style.opacity= "1";
        target.style.transform="rotate(5deg)";
        target.style.transform="translate(-50%,-50%)";
        
        target.style.top= top + 'px';
        target.style.left= left + 'px';
    })

    links[i].addEventListener("mouseleave", e=> {
        let target= e.target.lastElementChild;
        target.style.opacity= "0";
        target.style.transform="rotate(-5deg)";
        target.style.left= "-100%";
    })
}



    
    
    

  

    
