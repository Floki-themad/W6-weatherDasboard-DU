var apiKey = 'c7dc3dc5930fbf4151b143bc06889fef'
var cityName = document.querySelector('.weather-search')
var searchButton = document.getElementById('search-button')
var form = document.getElementById('search-form')
var today = document.querySelector('#today')
var forecast = document.querySelector('#forecast')

searchButton.addEventListener('click', function (e) {
    e.preventDefault();
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + cityName.value + '&appid=' + apiKey+ '&units=imperial')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            today.innerHTML = data['list'][0]['dt_txt'];
            forecast.innerHTML = data['list'][0]['main']['temp'];

        })
        .catch(err => alert("wrong city name!"))

})
























// function getApi() {
//     console.log(cityName);
//     console.log(requestUrl)
//     fetch(requestUrl)
//         .then(function (response) {
//             return response.json()
//         })
//         .then(function (data) {
//             console.log(data)

//         });
// };

// searchButton.addEventListener('click', function(e){
//     e.preventDefault();
//     getApi();
// });


// global vars


// fetch weather api 


// proccess the data from the weather api 

//function to display previous searched items to a list. 

// function to store data to local storage

// 

// dynamically update the page with the information from the api 

