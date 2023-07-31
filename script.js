function dateArea(){
    var dateDay = new Date().getDate();
    var d = new Date();
    var dateMonth = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var dateName = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    
    document.querySelector(".day").innerHTML=dateDay;
    document.querySelector(".month").innerHTML=dateMonth[d.getMonth()];
    document.querySelector(".day-name").innerHTML=dateName[d.getDay()];
  }
  
  setInterval(dateArea, 1000);
  
  function clockArea(){
    var hoursArea = new Date().getHours();
    var minutesArea = new Date().getMinutes();
    var clockArea = hoursArea + ":" + minutesArea;
    
    if(hoursArea<10){
      var clockArea = "0" + hoursArea + ":" + minutesArea;
    } else if(minutesArea<10){
      var clockArea = hoursArea + ":0" + minutesArea;
    } else{
      var clockArea = hoursArea + ":" + minutesArea;
    }
    document.querySelector(".clock-area").innerHTML = clockArea;
  }
  
  setInterval(clockArea, 1000);