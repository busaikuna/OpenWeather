function load() {
    window.document.body.style.backgroundImage = "url(https://i.pinimg.com/originals/73/db/c1/73dbc1990dc1243bc1c2e65358129cae.jpg)"
}

var key = "b0dbc0b933e04503bcc6268c5dd5d86f"

function enter(event) {
    if (event.key === "Enter") {
        search()
    }
}

async function search() {
    var city = window.document.querySelector("#city")
    var servcity = window.document.querySelector("p.city-name")
    var temp = window.document.querySelector("p.temp")
    var time = window.document.querySelector("div.container-time")
    var umidade = window.document.querySelector("p.umidade")
    var dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())
    servcity.innerHTML = `Tempo em ${dados.name} - ${dados.sys.country}`
    temp.innerHTML = `Temperatura: ${dados.main.temp} °C`
    time.innerHTML = `<img class="img" src="https://openweathermap.org/img/wn/${dados.weather[0].icon}.png" alt="img-clima">${dados.weather[0].description}`
    umidade.innerHTML = `umidade: ${dados.main.humidity}%`
    console.log(dados)
    city.value = ""
    city.focus()
}
