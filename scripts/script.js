var photo_of_the_day_url = 'https://api.nasa.gov/planetary/apod?api_key=eigxuetnrf6Y2GfmJ4f3gW9a90EUBOCas5aVk4np';
fetch(photo_of_the_day_url)
    .then(function(result){
        return result.json();
    })
    .then(function(jsonObject){
        photo_of_the_day(jsonObject);
    })
    .catch(function(error){
        console.error(error);
});

function photo_of_the_day(jsonObject){
    var todays_photo = document.getElementById("todays_photo");
    if ("copyright" in jsonObject){
        var apod_copyright = jsonObject.copyright;
    }
    else{
        var apod_copyright = "Public Domain";
    }
    var apod_title = jsonObject.title;
    var apod_explanation = jsonObject.explanation;
    var apod_url = jsonObject.url;
    var apod_media = jsonObject.media_type;

    todays_photo.innerHTML += `
    <div id="apod_text">
        <h1>` + apod_title + `</h1>
        <h2 style="padding: 0; margin: 0;">Astronomy Picture of the Day </h2>
        <span id="apod_copyright"> Image Credits: ` + apod_copyright + ` </span>
        <p>` + apod_explanation + `</p>
    </div>
    `;

    if (apod_media === "image"){
        todays_photo.innerHTML += `
        <div id="apod_img">
            <img src="` + apod_url + `" alt="Astronomy picture of the day">
        </div>
        `;
    }
    else{
        todays_photo.innerHTML += `
        <div id="apod_img">
            <iframe src="` + apod_url + `" type="text/html" frameborder="0"></iframe>
        </div>
        `;
    }
}


var iss_pos_url = 'http://api.open-notify.org/iss-now.json';
fetch(iss_pos_url)
    .then(function(result){
        return result.json();
    })
    .then(function(jsonObject){
        iss_pos(jsonObject);
    })
    .catch(function(error){
        console.error(error);
});

function iss_pos(jsonObject){
    var iss_info = document.getElementById("iss_info");
    long = parseFloat(jsonObject.iss_position.longitude);
    lat = parseFloat(jsonObject.iss_position.latitude);
    iss_info.innerHTML += "The ISS is currently over " + lat.toFixed(2)
                            + "&deg; N, " + long.toFixed(2) + "&deg; E";

}


var people_in_space_url = 'http://api.open-notify.org/astros.json';
fetch(people_in_space_url)
    .then(function(result){
        return result.json();
    })
    .then(function(jsonObject){
        people_in_space(jsonObject);
    })
    .catch(function(error){
        console.error(error);
});

function people_in_space(jsonObject){
    var people_info = document.getElementById("people_info");
    num_people = parseFloat(jsonObject.number);
    people_info.innerHTML += "There are currently " + num_people + " people in space";

}

// function runScript(jsonObject){
//     var cards = document.getElementById("cards");
//     addHtmlFromCards(jsonObject.cards, cards);
//
//     var searchButton = document.getElementById("searchButton");
//     var searchTextBox = document.getElementById("search");
//     searchButton.addEventListener("click", function(event){
//         cards.innerHTML = "";
//
//         var searchText = searchTextBox.value;
//         var searchResults = jsonObject.cards.filter(card => card.name === searchText);
//         if (searchResults === undefined || searchResults.length === 0){
//             cards.innerHTML = "Couldn't find a match to your search!";
//         }
//         else {
//             addHtmlFromCards(searchResults, cards);
//         }
//     });
// }
//
// function addHtmlFromCards(cardList, cards){
//     for(var i=0; i<cardList.length; i++){
//         var divCard = "";
//
//         divCard += "<div class='col-sm-4'>";
//         divCard += "<div class='card-container'>";
//         divCard += "<h4>" + cardList[i].name + "</h4>";
//         if (cardList[i].imageUrl === undefined){
//             divCard += "<img src='https://via.placeholder.com/223x310' width='100%'>";
//         }
//         else{
//             divCard += "<img src='" + cardList[i].imageUrl + "' width='100%'>";
//         }
//         divCard += "<a href='card-specific.html?id=" + cardList[i].id + "' class='btn btn-success'>View More</a>";
//         divCard += "</div>";
//         divCard += "</div>";
//
//         cards.innerHTML += divCard;
//     }
// }
