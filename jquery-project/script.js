$(document).ready(function(){
  $("#searchinput").on("keyup", function(e){

     let cityname= e.target.value;
     const APIKey= "e2f664c72f187b3d3a0c64387e70435e";

    //  make a request to the server

    $.ajax({

        url:`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIKey}&units=metric`,
        
    }).done(function(weatherdata){

        console.log(weatherdata);
        $("#profile").html(`
        <div class="container">
        
        <div class="row">
        
       <div class="card" style="width: 18rem;">
            
                <img class="card-img-top" src="http://openweathermap.org/img/wn/${weatherdata.weather[0].icon}@2x.png" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">weather: ${weatherdata.weather[0].description}</h5>
                    <p class="card-text">The temperature at ${cityname} is= ${weatherdata.main.temp}&#8451; and it feels like it is ${weatherdata.main.feels_like}&#8451;</p>
                    <a href="https://www.google.com/search?q=${cityname}" class="btn btn-primary">learn more about this place</a>
                </div>
       </div>

        
        
        </div>  
        
        </div>`);
    });

  });


})