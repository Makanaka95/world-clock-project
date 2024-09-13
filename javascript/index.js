function updateTime() {
  let houstonElement = document.querySelector("#city-name");
  let houstonDateElement = houstonElement.querySelector(".date");
  let houstonTimeElement = houstonElement.querySelector(".time");
  let houstonTime = moment().tz("America/Chicago");

  houstonDateElement.innerHTML = houstonTime.format("MMMM Do YYYY");
  houstonTimeElement.innerHTML = houstonTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let seoulElement = document.querySelector("#name-city");
  let seoulDateElement = seoulElement.querySelector(".date");
  let seoulTimeElement = seoulElement.querySelector(".time");
  let seoulTime = moment().tz("Asia/Seoul");

  seoulDateElement.innerHTML = seoulTime.format("MMMM Do YYYY");
  seoulTimeElement.innerHTML = seoulTime.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
