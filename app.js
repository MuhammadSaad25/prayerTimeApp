let getPrayer = () => {
  let city = document.getElementById("city").value;
  let subdiv = document.querySelector(`.sub`);

  axios
    .get(
      `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=""&method=8`
    )
    .then(function (response) {

  subdiv.style.display = "block";


        const data = response.data;
      console.log(data);

      document.getElementById(
        `Fajr`
      ).innerText = `Fajr: ${data.data.timings.Fajr}`;

      document.getElementById(
        `Dhuhr`
      ).innerText = `Dhuhr: ${data.data.timings.Dhuhr}`;

      document.getElementById(
        `Asr`
      ).innerText = `Asr: ${data.data.timings.Asr}`;

      document.getElementById(
        `Maghrib`
      ).innerText = `Maghrib: ${data.data.timings.Maghrib}`;

      document.getElementById(
        `Isha`
      ).innerText = `Isha: ${data.data.timings.Isha}`;

      document.getElementById(
        `Sunrise`
      ).innerText = `Sunrise: ${data.data.timings.Sunrise}`;

      document.getElementById(
        `Sunset`
      ).innerText = `Sunset: ${data.data.timings.Sunset}`;

      document.getElementById(
        `Midnight`
      ).innerText = `Midnight: ${data.data.timings.Midnight}`;
    });
};
