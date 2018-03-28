window.onload = function() {
    console.log('hey');
}

var dropmenu = function() {
    console.log('Opened the menu');
    var dropmenu = document.getElementsByClassName('drop-menu').item(0);
    dropmenu.style.visibility = 'visible';

    dropmenu.addEventListener("mouseleave", function() {
        dropmenu.style.visibility = 'hidden';
    });
}