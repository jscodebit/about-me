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

  var output = document.getElementById('output');
        var buttonClick = document.getElementById('loadNew')
        buttonClick.addEventListener('click',function(){
            loadAjax();
        })
        function loadAjax(){
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function(){
            //console.log('state changed',ajax.readyState,ajax.status)
            if(ajax.readyState == 4 && ajax.status==200){
                   // console.log(ajax.responseText)
                var json = JSON.parse(ajax.responseText);
                 var data = json.results[0];
         
                var message = '<h2>'+data.name.first + '  ' + data.name.last + '</h2><img src="'+data.picture.large +'">'
               
                 output.innerHTML = message;
            }
        }
        ajax.open('GET','https://randomuser.me/api/',true)
        ajax.send();
        }