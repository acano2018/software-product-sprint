// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['The Color Purple', 'Don Quixote', 'Cien Años de Soledad', 'Beloved', 'Slaughterhouse-Five', 'Frankenstein', 'Little Women', 'Song of Solomon'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

function initMap() {
    var cords = {lat: 37.0902, lng: -95.7129};
    var map = new google.maps.Map(document.getElementById('map'), {
     zoom: 4,
       center: cords
    });

        addMarker(
          {coords:{lat:48.8566, lng:-2.3522}, 
          content: 'Paris, France'
        }); 
        addMarker(
          {coords:{lat:34.0522, lng:-118.2437}, 
          content: 'Los Angeles, CA'
        }); 
        addMarker(
          {coords:{lat:19.4326, lng:-99.1332}, 
          content: 'Mexico City, Mexico'
        });
        addMarker(
          {coords:{lat:19.0414, lng:-98.2063}, 
          content: 'Puebla, Mexico'
        });
        addMarker(
          {coords:{lat:40.7128, lng:-74.0060}, 
          content: 'New York City, NY'
        });


    function addMarker(props){
        var marker = new google.maps.Marker({
        position: props.coords,
        map: map,
        });

        if(props.content){
            var infowindow = new google.maps.InfoWindow({
            content: props.content
        });

        marker.addListener('click', function() {
        infowindow.open(map, marker);
        });
        }

    }

}

=======
function getData() {
  console.log('Getting a message from data page');

  // The fetch() function returns a Promise because the request is asynchronous.
  const responsePromise = fetch('/data');

  // When the request is complete, pass the response into handleResponse().
  responsePromise.then(handleResponse);
}

function handleResponse(response) {
  console.log('Handling the response.');

  // response.text() returns a Promise, because the response is a stream of
  // content and not a simple variable.
  const textPromise = response.text();

  // When the response is converted to text, pass the result into the
  // addQuoteToDom() function.
  textPromise.then(addQuoteToDom);
}

/** Adds a random quote to the DOM. */
function addQuoteToDom(quote) {
  console.log('Adding quote to dom: ' + quote);

  const quoteContainer = document.getElementById('greeting-container');
  quoteContainer.innerText = quote;
}
