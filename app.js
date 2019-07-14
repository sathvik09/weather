const form = document.querySelector('.change-location');
const head = document.querySelector('.details');
const display = document.querySelector('.display');
const time = document.querySelector('.time');

const updateUI = data =>{
     const citydet = data.citydet;
     const weather = data.weather;
      // html template
    const html = `
    <div class="text-muted text-uppercase text-center details">
      <h5 class="my-3 h5">${citydet.EnglishName}</h5>
      <div class="my-3">${weather.WeatherText}</div>
      <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
      </div>
    </div>
    `  ;
    head.innerHTML = html;
    // for the image
    let timesrc = null;
     if(weather.IsDayTime){
       time.setAttribute('src','day.jpg');
     } else {
       time.setAttribute('src','night.jpg');
     }
}


const update = async (city) =>{
  const citydet = await getcity(city);
  const weather = await getcondition(citydet.Key);
  return {citydet,weather};
}
form.addEventListener('submit' , e =>{
  // prevent default
  e.preventDefault();
  display.classList.remove('d-none');
  const city = form.city.value.trim();
  form.reset();

  // update city
  update(city)
  .then(data => updateUI(data))
  .catch(err => console.log(err))
});
