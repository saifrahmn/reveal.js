var birthdate= new Date("July 11, 2023 00:00:00").getTime();

var func= setInterval(function(){

    var now= new Date().getTime();
    var timeleft=  birthdate-now;
    var days= Math.floor (timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor ((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var min = Math.floor ((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var sec = Math.floor ((timeleft % (1000 * 60)) / (1000));

    
    document.getElementById("days").innerHTML= days + "days: "
    document.getElementById("hours").innerHTML= hours + "hours: "
    document.getElementById("min").innerHTML= min + "mins: "
    document.getElementById("sec").innerHTML= sec + "sec  "
    if(timeleft<0){
            clearInterval(func);
            document.getElementById("days").innerHTML = ""
            document.getElementById("hours").innerHTML = ""
            document.getElementById("min").innerHTML = ""
            document.getElementById("sec").innerHTML = ""
            document.getElementById("end").innerHTML = "Time up, Bring the change you wanted the world to be.";
    }
},1000);