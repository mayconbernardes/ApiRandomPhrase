// // Define the URL for the advice API
// const url = 'https://api.adviceslip.com/advice';

// // Function to fetch and display advice
// function fetchAndDisplayAdvice() {
//     // Make a GET request to the API using the Fetch API
//     fetch(url)
//         // Handle the response from the API
//         .then(response => response.json()) // Parse the response as JSON
//         .then(data => {
//             // Create a new <p> element to display the advice
//             let adviceElement = document.createElement('p');
            
//             // Set the innerHTML of the <p> element with the advice from the API response
//             adviceElement.innerHTML = `Conseil du jour : "${data.slip.advice}"`;
            
//             // Get the advice container
//             let adviceContainer = document.getElementById('adviceContainer');
            
//             // Clear the existing content inside the advice container
//             adviceContainer.innerHTML = '';
            
//             // Append the <p> element to the advice container
//             adviceContainer.appendChild(adviceElement);
//         })
//         // Handle any errors that may occur during the fetch operation
//         .catch(error => console.error('There was an error fetching the advice:', error));
// }

// // Initial fetch and display of advice
// fetchAndDisplayAdvice();

// // Get the refresh button element
// let refreshButton = document.getElementById('refreshButton');

// // Attach a click event listener to the refresh button
// refreshButton.addEventListener('click', function() {
//     // Call the function to fetch and display new advice
//     fetchAndDisplayAdvice();
// });



// Define the URL for the advice API
const url = 'https://api.adviceslip.com/advice';

// Function to create a new element with specified attributes
function createElement(tagName, attributes) {
    const element = document.createElement(tagName);
    for (const key in attributes) {
        if (attributes.hasOwnProperty(key)) {
            element[key] = attributes[key];
        }
    }
    return element;
}

// Function to fetch and display advice
function fetchAndDisplayAdvice() {
    // Make a GET request to the API using the Fetch API
    fetch(url)
        // Handle the response from the API
        .then(response => response.json()) // Parse the response as JSON
        .then(data => {
            // Create a new <p> element to display the advice
            const adviceElement = createElement('p', {
                innerHTML: `Conseil du jour : "${data.slip.advice}"`
            });

            // Get the advice container
            const adviceContainer = document.getElementById('adviceContainer');

            // Clear the existing content inside the advice container
            adviceContainer.innerHTML = '';

            // Append the <p> element to the advice container
            adviceContainer.appendChild(adviceElement);
        })
        // Handle any errors that may occur during the fetch operation
        .catch(error => console.error('There was an error fetching the advice:', error));
}

// Function to create HTML structure
function createHTMLStructure() {
    // Get the body element
    const body = document.body;

    // Create the advice container
    const adviceContainer = createElement('div', {
        className: 'advice-container',
        id: 'adviceContainer'
    });

    // Create the button container
    const buttonContainer = createElement('div', {
        className: 'button-container',
        id: 'buttonContainer'
    });

    // Create the refresh button
    const refreshButton = createElement('button', {
        id: 'refreshButton',
        innerText: 'Refresh Advice'
    });

    // Attach a click event listener to the refresh button
    refreshButton.addEventListener('click', function () {
        // Call the function to fetch and display new advice
        fetchAndDisplayAdvice();
    });

    // Append the refresh button to the button container
    buttonContainer.appendChild(refreshButton);

    // Append the advice container and button container to the body
    body.appendChild(adviceContainer);
    body.appendChild(buttonContainer);
}

// Call the function to create the HTML structure
createHTMLStructure();

// Initial fetch and display of advice
fetchAndDisplayAdvice();


function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'es,fr,pt,it', autoDisplay: false}, 'google_translate_element');
}
