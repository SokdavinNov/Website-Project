getTime();

setInterval(getTime,1000);

function getTime(){
    var timeData = new Date();
    var returnString=timeData.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});
    document.getElementById("clock").innerHTML=returnString;
}