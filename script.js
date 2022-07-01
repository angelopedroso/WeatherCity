const key = "785d5c20d86f4da1ab5152426220107";
const submit = document.querySelector("button");
const input = document.querySelector("#input__city");
const fieldCity = document.querySelector("#field__city");
const stateCountry = document.querySelector("#state_country");
const temp = document.querySelector("#field__temp");
const weather = document.querySelector("#field__weather");
const desc = document.querySelector("#field__desc");

const handleSubmit = (event) => {
  event.preventDefault();
  const city = input.value;

  if (city === "") return;

  fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no
    `)
    .then((response) => response.json())
    .then((data) => {
      fieldCity.innerHTML = data.location.name;
      stateCountry.innerHTML = `${data.location.region}, ${data.location.country}`;
      temp.innerHTML = data.current.temp_c;
      weather.src = data.current.condition.icon;
      desc.innerHTML = data.current.condition.text;
    })
    .catch((error) => {
      console.log(error);
    });
};

submit.addEventListener("click", handleSubmit);
