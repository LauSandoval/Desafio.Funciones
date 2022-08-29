function pintar (elemento, color = 'green'){
    elemento.style.backgroundColor = color;
}
let ele = document.getElementById("ele1")
ele.style.backgroundColor = 'green'
ele.addEventListener("click", function(){
ele.style.backgroundColor = 'yellow'
});