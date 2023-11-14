let urlBase = "api.openweathermap.org/data/2.5/weather";  
let api_Key = "9c7c1fc34260d4dd6284c5c58b018afc" ;
let difKelvin = 273.15;

document.getElementById("botonBusqueda").addEventListener('click', () => {
    const ciudad = document.getElementById("ciudadEntrada").value;
    if(ciudad){
        fetchDatosClima(ciudad);
    }
})

function fetchDatosClima(ciudad){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${api_Key}`)
        .then(data => data.json())
        .then(data => mostrarDatosClima(data))
}

function mostrarDatosClima(data){
    console.log(data);
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML = "";

    const ciudadNombre = data.name;
    const paisNombre = data.sys.country;
    const temperatura = data.main.temp;
    const humedad = data.main.humidity;
    const description = data.weather[0].description;
    const icono = data.weather[0].icon;

    const ciudadTitulo = document.createElement('h2');
    ciudadTitulo.textContent = `${ciudadNombre},${paisNombre}`;

    const temperaturaInfo = document.createElement('p');
    temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura - difKelvin)}^C`;

    const humedadInfo = document.createElement('p');
    humedadInfo.textContent = `La humedad es de ${humedad}%`;

    const iconoInfo = document.createElement('img');
    iconoInfo.src = `https://openweathermap.org/img/wn/${icono}@2x.png`;

    const descriptionInfo = document.createElement('p');
    descriptionInfo.textContent = `La descripcion meteorologica es: ${description}`;

    divDatosClima.appendChild(ciudadTitulo);
    divDatosClima.appendChild(temperaturaInfo);
    divDatosClima.appendChild(humedadInfo);
    divDatosClima.appendChild(iconoInfo);
    divDatosClima.appendChild(descriptionInfo);
}



















