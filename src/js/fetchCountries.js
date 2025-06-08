const input = document.querySelector('#input')
const div = document.querySelector('#countryDiv')

let countries = []

fetch("https://restcountries.com/v3.1/independent?status=true")
    .then((res) => {
        return res.json()
    })
    .then((data) =>
        countries = data
    )

const countryFunction = (array, value) => {
    let countryName;
    let objName;
    let code;
    for (let i = 0; i < array.length; i++) {
        if (array[i].name.common.toLowerCase() === value.toLowerCase()) {
            countryName = array[i].name.common
            objName = array[i]
            const languageValues = Object.values(objName.languages);
            code =
            `
            <h2 class='countryName'>Назва країни: ${countryName}</h2>
            <p>Столиця: ${objName.capital}</p>
            <p>Населення: ${objName.population} </p>
            <p>Мова: ${languageValues}</p>
            <img src='${objName.flags.png}' alt="Прапор ${countryName}">
            `
        }
    }
    return code;
}

input.addEventListener('input', ((e) => {
    setTimeout(() => {
        const inputText = e.target.value.trim()
        if (inputText.length > 0) {
            if (countryFunction(countries, inputText) === undefined) {
                div.innerHTML = 'Такої країни не знайдено. Спробуйте ще раз'
            } else {
                div.innerHTML = countryFunction(countries, inputText)
            }
        }
    }, 500)
}
))