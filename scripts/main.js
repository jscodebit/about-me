function sphereSurfaceArea(radius){
    return 4* 3.14* radius*radius
  }
  function surfaceArea(){
    let radius = parseInt(document.getElementById("sphereRadius").value);
    console.log(radius);
    let surfaceAreaResult = sphereSurfaceArea(radius);
    let surfaceAreaElement =  document.getElementById("surfaceAreaResult");
    surfaceAreaElement.value = surfaceAreaResult;
  }
  
  function sphereVolume(radius){
    return 4* 3.14* radius*radius*radius;
  }
  
  function volume(){
    let radius = parseInt(document.getElementById("sphereRadius").value);
    console.log(radius);
    let volumeResult = sphereVolume(radius);
    let volumeElement = document.getElementById("volumeResult");
    volumeElement.value = volumeResult;
  }