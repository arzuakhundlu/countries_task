function displayCountry(country){
    const request = new XMLHttpRequest();

    request.open('GET', 'https://restcountries.com/v3.1/all');
    request.send();

    request.addEventListener('load', function () {
        const data = JSON.parse(this.responseText)
        console.log(data);
        setCountry(data)


        // const countries = data[0].borders.toString();
        

        // // load neighbors
        // const req = new XMLHttpRequest();
        // req.open("GET","https://restcountries.com/v2/alpha?codes=" + countries)
        // req.send()
        // req.addEventListener('load',function(){
        //     const data = JSON.parse(this.responseText)
        //     console.log(data);
        // })
})
}
const x = document.querySelector(".container .row")
function setCountry(data) {
    data.forEach(data => {
      x.innerHTML += `
    <div class="col-4">
        <div class="card h-100">
            <div class="card card_img  ">
                <img src="${data.flags.png}" class="card-img-top " >
            </div>
        <div class="card-body">
            <h5 class="card-title">${data.name.common}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Population: ${(data.population/1000000).toFixed(1)}</li>
            <li class="list-group-item">Capital: ${data.capital[0]}</li>
            <li class="list-group-item">Languages: ${Object.values(data.languages)}</li>
        </ul>
        </div>
    </div>
    `
    }); 
    // document.querySelector(".container").insertAdjacentHTML('beforeend',html)
}

displayCountry('azerbaijan')
// displayCountry('turkey')

// addEventListener('load',function() {
//     fetch('https://restcountries.com/v3.1/name/france')
//     .then(data => data.json())
//     .then(res=> console.log(res))
// })
