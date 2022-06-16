var apiKey = 'c7dc3dc5930fbf4151b143bc06889fef'
var cityName = document.querySelector('.weather-search')
var searchButton = document.getElementById('search-button')
var form = document.getElementById('search-form')
// day 1.
var todayOne = document.querySelector('#dayOne')
var forecastOne = document.querySelector('#forecastOne')
var descOne = document.querySelector('#descOne')
// day 2. 
var dayTwo = document.querySelector('#dayTwo')
var forecastTwo = document.querySelector('#forecastTwo')
var descTwo = document.querySelector('#descTwo')
// day 3. 
var dayThree = document.querySelector('#dayThree')
var forecastThree = document.querySelector('#forecastThree')
var descThree = document.querySelector('#descThree')
// day 4. 
var dayFour = document.querySelector('#dayFour')
var forecastFour = document.querySelector('#forecastFour')
var descFour = document.querySelector('#descFour')
// day 5. 
var dayFive = document.querySelector('#dayFive')
var forecastFive = document.querySelector('#forecastFive')
var descFive = document.querySelector('#descFive')




// eventlistner for the search button runs the fetch function. 
searchButton.addEventListener('click', function (e) {
    e.preventDefault();
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + cityName.value + '&appid=' + apiKey+ '&units=imperial')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            //day 1 weather 
            todayOne.innerHTML = data['list'][0]['dt_txt'];
            forecastOne.innerHTML = data['list'][0]['main']['temp'];
            descOne.innerHTML = data['list'][0]['weather'][0]['description'];
            // day 2 weather
            dayTwo.innerHTML = data['list'][10]['dt_txt']
            forecastTwo.innerHTML = data['list'][10]['main']['temp']
            descTwo.innerHTML = data['list'][10]['weather'][0]['description']
            // day 3 weather
            dayThree.innerHTML = data['list'][18]['dt_txt']
            forecastThree.innerHTML = data['list'][18]['main']['temp']
            descThree.innerHTML = data['list'][18]['weather'][0]['description']
            // day 4 weather
            dayFour.innerHTML = data['list'][26]['dt_txt']
            forecastFour.innerHTML = data['list'][26]['main']['temp']
            descFour.innerHTML = data['list'][26]['weather'][0]['description']
            // day 5 weather
            dayFive.innerHTML = data['list'][32]['dt_txt']
            forecastFive.innerHTML = data['list'][32]['main']['temp']
            descFive.innerHTML = data['list'][32]['weather'][0]['description']
        })
        .catch(err => alert("wrong city name!"))
        searchHistory();

})
// function to set searched citys to local storage. 
function searchHistory(){
localStorage.setItem('city-name', JSON.stringify(cityName.value));
}


// function to display searched citys on the page from local storage.
function showHistory(){
    var searchHistory = localStorage.getItem('city-name')
    var historyButton = document.createElement('button')
    searchHistory.append(historyButton)
    historyButton.textContent = searchHistory;
}





















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

