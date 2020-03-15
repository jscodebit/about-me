  function sphereSurfaceArea(radius){
    return 4* 3.14* radius*radius
  }
  function surfaceArea(){
    let radius = parseInt(document.getElementById("sphereRadius").value);
    console.log(radius);
    let surfaceAreaResult = parseFloat(sphereSurfaceArea(radius));
    let surfaceAreaElement =  document.getElementById("surfaceAreaResult");
    surfaceAreaElement.value = surfaceAreaResult;
  }
  
  function sphereVolume(radius){
    return 4* 3.14* radius*radius*radius;
  }
  
  function volume(){
    let radius = parseInt(document.getElementById("sphereRadius").value);
    console.log(radius);
    let volumeResult = parseFloat(sphereVolume(radius));
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

  document.querySelector('#localStorage').addEventListener('click', () => {
    debugger;
    console.log('  Starting clicker click handler');
    const origCount = parseInt(localStorage.getItem('countOfClicks')) || 0;
    const sphereRadius = document.querySelector('#sphereRadius').value;
    //console.log('clickCount =' + clickCount);
    const surfaceAreaResult = parseFloat(document.querySelector('#surfaceAreaResult').value);
    console.log('surfaceAreaResult =' + surfaceAreaResult);
    const volumeResult = parseFloat(document.querySelector('#volumeResult').value);
    console.log('volumeResult =' + volumeResult);
    const clickCount = origCount + 1;
    const result = `Surface area, and Volume of ${sphereRadius} , a sphere is ${sphereSurfaceArea(sphereRadius)} and ${sphereVolume(sphereRadius)} respectively. This has been run  ${clickCount}  times.`;
    document.querySelector('#result').innerHTML = result;

    localStorage.setItem('clickCount', clickCount);  // define a string key to store + its value
    localStorage.setItem('sphereRadius', sphereRadius);
    localStorage.setItem('surfaceAreaResult', surfaceAreaResult);
    localStorage.setItem('volumeResult', volumeResult);
    console.log('  Finished clicker click handler');
  })

  document.querySelector('#wiper').addEventListener('click', () => {
    console.log('  Starting wiper click handler')
    localStorage.removeItem('clickCount')
    localStorage.removeItem('sphereRadius')
    localStorage.removeItem('surfaceAreaResult')
    localStorage.removeItem('volumeResult')
    console.log('  Finished wiper click handler - localStorage entries removed')
  })

  window.addEventListener('load', (event) => {
    surfaceArea();
    volume();
    console.log('  Starting initialization ')
    if (localStorage.getItem('sphereRadius')) {
      document.querySelector('#sphereRadius').value = localStorage.getItem('sphereRadius')
      console.log(`  Stored sphereRadius = ${localStorage.sphereRadius}`)
    }
    if (localStorage.getItem('surfaceAreaResult')) {
      document.querySelector('#surfaceAreaResult').value = parseFloat(localStorage.surfaceAreaResult)
      console.log(`  Stored surfaceAreaResult = ${localStorage.surfaceAreaResult}`)
    }
    if (localStorage.getItem('volumeResult')) {
      document.querySelector('#volumeResult').value = parseFloat(localStorage.volumeResult)
      console.log(`  Stored volumeResult = ${localStorage.volumeResult}`)
    }
    console.log('  Finished initialization')
  })