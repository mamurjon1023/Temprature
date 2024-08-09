let input = document.querySelector("input");
let info = document.querySelector(".info");
let button = document.querySelector("button");


button.addEventListener("click", function (event) {
  event.preventDefault();

  let cityName = input.value

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=2d60f525cd75dd81b166855758cb0334`)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    let country = data.name
    let temp = Math.round(data.main.temp - 273.15);
    let windspeed = data.wind.speed
    let humidity = data.main.humidity
    
    let box = document.createElement("div");
    let countryEl = document.createElement("h2");
    let tempEl = document.createElement("p");
    let hum = document.createElement("li");
    let windspd = document.createElement("li");
    let list = document.createElement("ul");

    countryEl.textContent = country;
    tempEl.textContent = `${temp} °C`;
    hum.textContent = `${humidity}%`;
    windspd.textContent = `${windspeed}Km/h`;

    list.appendChild(hum);
    list.appendChild(windspd);

    box.appendChild(countryEl);
    box.appendChild(tempEl);
    box.appendChild(list);

    info.appendChild(box);
  });  
});


