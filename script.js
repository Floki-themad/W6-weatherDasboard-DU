var apiKey = 'c7dc3dc5930fbf4151b143bc06889fef'
let today = moment();
 let locationName = document.getElementById("city-name");
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
                        const newApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

                        fetch(newApiUrl)
                        .then(function(response){
                            return response.json();
                        })
                        .then(function(data){
                            console.log(data);
                            $("#current-city").html(foundLocation);
                            $("#current-date").html("(Today: " + today.format("l") + ")");
                            $("#current-icon").attr("src", "http://openweathermap.org/img/wn/" + data.current.weather[0].icon + "@2.png");
                            $("#current-temp").html(data.current.temp + "F");
                            $("#current-wind").html(data.current.wind_speed + "mph")
                            $("#current-humidity").html(data.current.humidity + "%");
                            $("#current-index").html(data.current.uvi);
                            uvColor(data.current.uvi);

                            for(let index = 1; index <= 5; index++){
                                let dayId = "";
                                dayId = "#day" + index + "-date";
                                $(dayId).html(today.add(1, 'd').format("l"));
                                dayId = "#day" + index + "-icon";
                                $(dayId).attr("src", "http://openweathermap.org/img/wn/" + data.daily[index].weather[0].icon + "@2x.png");
                                dayId = "#day" + index + "-temp";
                                $(dayId).html(data.daily[index].temp.max + "°F");
                                dayId = "#day" + index + "-wind";
                                $(dayId).html(data.daily[index].wind_speed + " mph");
                                dayId = "#day" + index + "-humidity";
                                $(dayId).html(data.daily[index].humidity + " %");
                              }
                              today = moment();
                              if(!cityArr.includes(foundLocation)){
                                  const newButton = document.createElement('button');
                                  newButton.classList.add("form-control");
                                  newButton.classList.add("btn");
                                  newButton.classList.add("btn-secondary");
                                  newButton.classList.add("add-space");
                                  newButton.textContent = foundLocation;
                                  searchLocation.appendChild(newButton);
                                  cityArr.push(foundLocation);
                                  localStorage.setItem("location", JSON.stringify(cityArr));
                              }
                        });
                    }else{
                        alert("That location not on this Planet!")
                    }
                }
                
            });
        }
    });
}

function uvColor(uvIndex){
    if (uvIndex <= 2){
        $("#current-index").attr("style", "background-color: green;");
    }
    if((uvIndex > 2) && (uvIndex <= 5)){
        $("#current-index").attr("style", "background-color: yellow;");
    }
    if((uvIndex > 5) && (uvIndex <= 7)){
        $("#current-index").attr("style", "background-color: orange;");
    }
    if((uvIndex > 7) && (uvIndex <= 10)){
        $("#current-index").attr("style", "background-color: red;");
    }
    if((uvIndex > 10)){
        $("#current-index").attr("style", "background-color: purple;");
    }
}

function init(){
    localStorage.clear();
    getData("Denver");
};

init();

$('#search-button').on('click', function (event) {
    event.preventDefault();
    const city = locationName.value;
    console.log(city);
    if (city) {
      getData(city);
    }
  });
  
  $('#search-city').on('click', function (event) {
    event.preventDefault();
    const tempElement = event.target;
    const city = tempElement.textContent;
    getData(city);
  });





















