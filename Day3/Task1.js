
let XMLHttpRequest = require('xhr2');
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://restcountries.com/v3.1/all' );
xhr.send(); 
xhr.onload = function () {
    let users = JSON.parse(xhr.responseText);
    let countries = JSON.parse(xhr.responseText);

     for (let index = 0; index < countries.length; index++) {
        console.log(countries[index].flag);
}
        

    }
    
    
    