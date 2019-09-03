
function search() {

  const cityName = document.querySelector("input").value;
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=08b248633ff59cd5a7c7446c7767567a`)
    .then(function (response) {
      // handle success
      console.log(response);
      console.log(response.data.weather[0].main);
      document.querySelector("h1").innerHTML = response.data.weather[0].main;
      document.querySelector("h2").innerHTML = Math.floor(response.data.main.temp - 273.15) + `&deg;C`;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed

    });


}

