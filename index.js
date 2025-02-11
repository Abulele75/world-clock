function updateTime(){

let CityElement = document.querySelector("#dateLagos");
let timeElement = document.querySelector("#timeLagos")
let cityDateElement = moment().format("MMMM Do YYYY");
let cityTimeElement = moment().tz("Africa/Lagos").format("hh:mm:ss [<small>]A[<small>]");

CityElement.innerHTML=cityDateElement;
timeElement.innerHTML=cityTimeElement;

let TokyoCityElement = document.querySelector("#dateTokyo");
let Tokyotime = document.querySelector("#timeTokyo")
let TokyoDateElement = moment().format("MMMM Do YYYY");
let TokyoTimeElement = moment().tz("Asia/Tokyo").format("hh:mm:ss [<small>]A[<small>]");

TokyoCityElement.innerHTML=TokyoDateElement;
Tokyotime.innerHTML=TokyoTimeElement;

let MadridCityElement = document.querySelector("#dateMadrid");
let Madridtime = document.querySelector("#timeMadrid")
let MadridDateElement = moment().format("MMMM Do YYYY");
let MadridTimeElement = moment().tz("Europe/Madrid").format("hh:mm:ss [<small>]A[<small>]");

MadridCityElement.innerHTML=MadridDateElement;
Madridtime.innerHTML=MadridTimeElement;

let MilanCityElement = document.querySelector("#dateMilan");
let Milantime = document.querySelector("#timeMilan")
let MilanDateElement = moment().format("MMMM Do YYYY");
let MilanTimeElement = moment().tz("Europe/Milan").format("hh:mm:ss [<small>]A[<small>]");

MilanCityElement.innerHTML=MilanDateElement;
Milantime.innerHTML=MilanTimeElement;

}

updateTime();
setInterval(updateTime,1000);
