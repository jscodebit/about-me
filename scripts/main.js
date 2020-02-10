function surfaceArea(){
    var radius = document.getElementById("sphereRadius").value;
    console.log(radius);
    var surfaceAreaResult = document.getElementById("surfaceAreaResult");
    surfaceAreaResult.innerHTML = 4* 3.14* radius*radius;
}
function volume(){
    var radius = document.getElementById("sphereRadius").value;
    console.log(radius);
    var volumeResult = document.getElementById("volumeResult");
    surfaceAreaResult.innerHTML = 4* 3.14* radius*radius*radius;
}