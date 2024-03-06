// select all needed element
const InputCityName = document.querySelector('#input-city');
const Button = document.querySelector('#btn');
const CityName = document.querySelector('#city-name');
const Temperature = document.querySelector('#temp');
const Description = document.querySelector('#des');

// EventListener
Button.addEventListener('click', ()=>{
    const CurrentCity = InputCityName.value;

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+CurrentCity+'&appid=51833c7f9997391d687aff078c4b57dd')
    .then(res => res.json())
    .then(data => {
        const CurrentCityName = data.name;
        const CurrentTem = data.main.temp;;
        const FinalTem = CurrentTem - 273.15;
        const CurrentDec = data.weather[0].description;

        CityName.innerHTML = CurrentCityName;
        Temperature.innerHTML = FinalTem.toFixed(2);
        Description.innerHTML = CurrentDec;
    })
    
})