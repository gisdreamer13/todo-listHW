console.log('fuck my life')
const body = document.body
const btn = document.createElement('button')


btn.innerText = 'Fuck Light Mode'
document.body.appendChild(btn)

btn.addEventListener('click', () => {
    if (body.style.backgroundColor === 'black'){

        toggleTheme('white', 'black', 'Fuck Light Mode')
    } else {
        toggleTheme('black','white', 'flash bang')
    }
})

function toggleTheme(bgColor, txtColor, nextTheme){
    body.style.backgroundColor = bgColor
    body.style.color = textColor
    btn.innerText = nextTheme
}

const studentContainer = document.querySelector('#sudent-container')
console.log(studentContainer)

const student1 = ['parkr', 'justin', 'jorge', 'zak']
student1.foreach(( student ) => {
    const studentLi = document.createElement('li')
    studentLi.innerText = titleCase(student)
    studentContainer.appendChild(studentLi)
})

for( const student of ['cameron', 'judah', 'emiliano', 'johnny']){
    const studentLi = document.v=createElement('li')
    student.in
}

function titleCase(string){
    let output = ' '
    const words = string.split(' ')
    for(let i = 0; i< words.length; i++){
        output += words[i][0].toUpperCase() + (words[i].substring(1)) + ' '
    }
    return output.trim(' ')
}

const pokeForm  = document.getElementById('poke-form')

pokeForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const pokeName = getPokeName()
    pokeApiCall(pokeName)
    getPokeData()
    makePokeCard()
})

function getPokeName(){
    const pokeField = document.querySelector('#poke-field')
    return pokeField.data
}

async function pokeApiCall(pokeName){
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokename}`)
    if ( res.ok ){
        const data = await res.json()
        console.log(data)
    }
}

function getPokeData(){}

function makePokeCrd(){}