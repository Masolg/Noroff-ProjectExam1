var launches_url = 'https://launchlibrary.net/1.4/launch/next/10';
fetch(launches_url)
    .then(function(result){
        return result.json();
    })
    .then(function(jsonObject){
        launches(jsonObject);
    })
    .catch(function(error){
        console.error(error);
});

function launches(jsonObject){
    var launches = document.getElementById("launches_api");
    var num_launches = jsonObject.launches.length;
    for(var i = 0; i<num_launches; i++){
        addHtmlToDiv(launches, jsonObject, i);
    }
}

function addHtmlToDiv(launches_div, jsonObject, i){
    var launch_date = jsonObject.launches[i].windowstart;
    var launch_name = jsonObject.launches[i].name;
    var launch_location = jsonObject.launches[i].location.name;
    if (jsonObject.launches[i].missions === undefined || jsonObject.launches[i].missions.length == 0 ){
        var launch_description = "";
    }
    else{
        var launch_description = jsonObject.launches[i].missions[0].description;
    }
    var launch_image = jsonObject.launches[i].rocket.imageURL;
    if (jsonObject.launches[i].vidURLs === undefined || jsonObject.launches[i].vidURLs.length == 0){
        var launch_livefeed = "";
    }
    else{
        var launch_livefeed = jsonObject.launches[i].vidURLs[0];
    }

    launches_div.innerHTML += `
    <div class="launch">
        <div class="launch_name">
            <h2> ` + launch_name + ` </h2>
        </div>
        <div class="img_info">
            <div class="launch_image">
                <img src="` + launch_image + `" alt="Rocket">
            </div>
            <div class="launch_info">
                <div class="time"> <strong>Launch Date:</strong> ` + launch_date + ` </div>
                <div class="location"> <strong>Launch Location:</strong> ` + launch_location + ` </div>
                <p> ` + launch_description + ` </p>
                <div class="livefeed"><a href="` + launch_livefeed + `" rel="noopener noreferrer" target="_blank">` + launch_livefeed + `</a></div>
            </div>
        </div>
    </div>
    `
}

var search_button = document.getElementById("search_btn");
var date_picker = document.getElementById("calendar");
var launches_api_div = document.getElementById("launches_api");
search_btn.addEventListener("click", function(){
    var date = date_picker.value;
    var search_url = 'https://launchlibrary.net/1.4/launch/'+date+'';
    launches_api_div.innerHTML = "";
    fetch(search_url)
        .then(function(result){
            return result.json();
        })
        .then(function(jsonObject){
            launches(jsonObject);
        })
        .catch(function(error){
            console.error(error);
    });
});
