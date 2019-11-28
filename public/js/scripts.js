document.addEventListener("DOMContentLoaded", function() {
    setLinesBeetwenPoints();
});

function setLinesBeetwenPoints() {
    var m = document.getElementById("svg-main");
    var m_PosX = m.offsetTop,
        m_PosY = m.offsetLeft;
    
    var points = document.querySelectorAll(".diag-item");
    
    for(index = 0, len = points.length; index < len; points++) {
        console.log(points.length)
    }
}

function getDistanceBeetwenPoints(element1, element2) {
    let distance = 0;

    return distance;
}