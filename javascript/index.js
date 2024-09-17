function updateTime() {
  let houstonElement = document.querySelector("#city-name");
  if (houstonElement) {
    let houstonDateElement = houstonElement.querySelector(".date");
    let houstonTimeElement = houstonElement.querySelector(".time");
    let houstonTime = moment().tz("America/Chicago");

    houstonDateElement.innerHTML = houstonTime.format("MMMM Do YYYY");
    houstonTimeElement.innerHTML = houstonTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let seoulElement = document.querySelector("#name-city");
  if (seoulElement) {
    let seoulDateElement = seoulElement.querySelector(".date");
    let seoulTimeElement = seoulElement.querySelector(".time");
    let seoulTime = moment().tz("Asia/Seoul");

    seoulDateElement.innerHTML = seoulTime.format("MMMM Do YYYY");
    seoulTimeElement.innerHTML = seoulTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
  <div>
    <h2>${cityName}</h2>
    <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
  </div>
  <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
</div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city-dropdown");
citiesSelectElement.addEventListener("change", updateCity);
