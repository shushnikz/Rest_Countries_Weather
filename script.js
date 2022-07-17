//"https://restcountries.com/v3.1/all"

fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    console.log(data[0].name.official)
    cardData(data);
  });


  function cardData(data){
   for (let i = 0; i < 3; i++) {
      console.log(i)
     let Flag = data[i].flags.svg;
     let Name = data[i].name.official;
     let Capital = data[i].capital;
     let Region = data[i].region;
     let Population=data[i].population
     let countryCode = data[i].flag
     let latitude = data[i].latlng[0];
     let longitude = data[i].latlng[1];
     let mainDiv=document.getElementById('mainDiv')
     const cardInput = document.createElement("div");
    cardInput.setAttribute(`class`, `card`);
    cardInput.style.maxWidth = "18rem";


cardInput.innerHTML=`

   

    <div class="card-header bg-dark text-light text-center">${Name}</div>
    <img src="${Flag}" class="card-img-top image" alt="...">
 <div class="card-body text-center">
 
     <p class="card-text">Capital: ${Capital}</p>
     <p class="card-text">Region: ${Region}</p>
     <p class="card-text">Country Code: ${countryCode}</p>
     <p class="card-text">Population: ${Population}</p>
     <p class="card-text">Latitude: ${latitude}</p>
     <p class="card-text">Longitude: ${longitude}</p>
     <button type="button" class="btn btn-light border" onclick="getWeather(${latitude},${longitude})">Click for Weather</button>
 
</div>

      
`
mainDiv.appendChild(cardInput)
  }

  }

let weather=document.getElementById('weather')
async function getWeather(lat,lon){
   let data=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=50f517015e5efe89eef1307b37e69a2e`)
   let res=await data.json()
   console.log(res)
   weather.innerHTML=`
   
   <div class="card-body">
     <h5 class="card-title">Weather Data</h5>
     <p class="card-text">Humidity:${res.main.humidity}</p>
     <p class="card-text">Temperature:${res.main.temp}</p>
     <p class="card-text">Pressure:${res.main.pressure}</p>
     <p class="card-text">Description:${res.weather[0].description}</p>
   </div>
 
   `
 }
 
   

  


   
    
 