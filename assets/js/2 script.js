var color;
document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        color = 'red'
    }
    else if (event.key === 's') {
        color = 'yellow'

    }
    else if (event.key === 'd') {
        color = 'green'
    }
})

document.getElementById('ele-1').addEventListener('click', function(){
    document.getElementById('ele-1').style.backgroundColor = color
})  
document.getElementById('ele-2').addEventListener('click', function(){
    document.getElementById('ele-2').style.backgroundColor = color
})  
document.getElementById('ele-3').addEventListener('click', function(){
    document.getElementById('ele-3').style.backgroundColor = color
})  
document.getElementById('ele-4').addEventListener('click', function(){
    document.getElementById('ele-4').style.backgroundColor = color
})  
