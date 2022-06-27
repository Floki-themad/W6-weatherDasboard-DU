var apiKey = 'c7dc3dc5930fbf4151b143bc06889fef'
let today = moment();
const location = document.getElementById("city-name");
const searchLocation = document.getElementById("search-city");
const cityArr = [];

// get api data on city 
function getData(inputCity){
    const apiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${inputCity}&limit=1&appid=${apiKey}`;
    fetch(apiUrl)
    .then(function(response){
        if(response.ok){
            response.json().then(function(data){
                console.log(data);
                if(data.length > 0){
                    const foundLocation = data[0].name;
                    if(foundLocation.toLowerCase() === inputCity.toLowerCase()){
                        const lat = data[0].lat;
                        const lon = data[0].lon;
                        const newApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${myApiKey}&units=imperial`;

                        fetch(newApiUrl)
                        .then(function(response){
                            return response.json();
                        });
                        .then(function(data){
                            console.log(data);
                            $("#current-city").html(foundLocation);
                            $("#current-date").html("(Today: " + today.format("l") + ")");
                            $("#current-icon").attr("src", "http://openweathermap.org/img/wn/" + data.current.weather[0].icon + "@2.png");
                            $("#current-temp").html
                        })
                    }
                }
            })
        }
    })
}
// convert api data to lat/lon






















