fetch(`https://api.openweathermap.org/data/2.5/weather?q=Cancun&appid=24a7a6de7ed1df1a1aedac65ffd39814
&units=metric`)
.then(response => response.json())
.then(data =>{
    console.log(data);
    console.log(data.main.temp);
    weather.textContent = data.main.temp + "\u00b0C"; 
})