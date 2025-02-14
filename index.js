function updateTime(){

let CityElement = document.querySelector("#dateLagos");
if(CityElement){
    let timeElement = document.querySelector("#timeLagos")
let cityDateElement = moment().format("MMMM Do YYYY");
let cityTimeElement = moment().tz("Africa/Lagos").format("hh:mm:ss [<small>]A[<small>]");


CityElement.innerHTML=cityDateElement;
timeElement.innerHTML=cityTimeElement;
}

let TokyoCityElement = document.querySelector("#dateTokyo");
if(TokyoCityElement){
let Tokyotime = document.querySelector("#timeTokyo")
let TokyoDateElement = moment().format("MMMM Do YYYY");
let TokyoTimeElement = moment().tz("Asia/Tokyo").format("hh:mm:ss [<small>]A[<small>]");

TokyoCityElement.innerHTML=TokyoDateElement;
Tokyotime.innerHTML=TokyoTimeElement;
}

let MadridCityElement = document.querySelector("#dateMadrid");
if(MadridCityElement){
let Madridtime = document.querySelector("#timeMadrid")
let MadridDateElement = moment().format("MMMM Do YYYY");
let MadridTimeElement = moment().tz("Europe/Madrid").format("hh:mm:ss [<small>]A[<small>]");

MadridCityElement.innerHTML=MadridDateElement;
Madridtime.innerHTML=MadridTimeElement;
}
}

let MilanCityElement = document.querySelector("#dateMilan");
if(MilanCityElement){
let Milantime = document.querySelector("#timeMilan")
let MilanDateElement = moment().format("MMMM Do YYYY");
let MilanTimeElement = moment().tz("Europe/Milan").format("hh:mm:ss [<small>]A[<small>]");

MilanCityElement.innerHTML=MilanDateElement;
Milantime.innerHTML=MilanTimeElement;

}
function updateCurrentTime(){
let currentElement= document.querySelector("#current-location")
let currentTimeZone = moment.tz.guess();
let current =currentTimeZone.replace("_"," ").split("/")[1];

currentElement.innerHTML= current;

let currentTimeElement = document.querySelector("#current-time");
let currentTime = moment().format("hh:mm:ss [<small>]A[<small>]");
currentTimeElement.innerHTML=currentTime;
}
updateCurrentTime();
setInterval(updateCurrentTime,1000)

function updateCity(event){
    let timeZone = event.target.value;
  /*  if(timeZone=== "current"){
        timeZone = moment.tz.guess();

    }*/
    let cityName = timeZone.replace("_"," ").split("/")[1];
    
    let cityTime = moment().tz(timeZone);
   citiesElement = document.querySelector("#Cities");
    citiesElement.innerHTML=`
      <div class="city">
           <div>
            <h2>${cityName}</h2>
            <div class="date" >${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("hh:mm:ss [<small>]A[<small>]")
        } </div>
        </div>`
}
updateTime();
setInterval(updateTime,1000);

let citySelect = document.querySelector("#Select");
citySelect.addEventListener("change", updateCity);

