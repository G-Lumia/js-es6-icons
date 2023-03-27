// Milestone 1
// Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.
// Milestone 2
// Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
// Milestone 3
// Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
// BONUS
// 1- modificare la struttura dati fornita e valorizzare la proprietà "color" in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo "#" seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
// 2- popolare le options della select della milestone 3 dinamicamente.



//l'array che contiene gli elementi da stampare in pagina in formato card
const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    }
];

const cards = document.getElementById("cards");

const select = document.getElementById("typeSelect");

// funzione usata per creare una card generica, per poi appenderla all'elelemento puntato tramite l'id cards

function createCard(element) {
    const card = document.createElement("div");
    const icon = document.createElement("i");
    const name = document.createElement("h5");

    card.classList.add("card", "col", "py-3", "m-4", "flex-columns", "align-items-center", "text-center");
    icon.classList.add(element.prefix + element.family, element.prefix + element.name);
    icon.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    name.innerText = element.name;

    card.appendChild(icon);
    card.appendChild(name);
    cards.appendChild(card);
}

//funzione usata per filtrare l'array cards tenendo conto del tipo di icona selezionato tramite select

function changeType(icons) {
    if (select.value === "all") 
    {
        return icons;
    } 
    else 
    {
        return icons.filter(icon => select.value === icon.type);
    }
}

// funzione usata per creare tutte le card, tenendo conto dell'array ottenuto 
// come risultato tramite la funzione changetype

function createCards()
{
    const filteredIcons = changeType(icons);
    filteredIcons.forEach(element => createCard(element));
}

//viene richiamata una prima volta per mostrare tutti gli elementi stampati appena viene caricata la pagina
createCards();

//viene aggiunto un eventlistener che farà partire la funzione newCards al cambio di select
select.addEventListener("change", newCards);

//funzione che svuoterà l'elemento cards, per poi creare un array di icone filtrate che verrà poi
//utilizzato per creare le nuove card da appendere all'appena svuotato cards

function newCards()
{
    cards.innerHTML = "";
    const filteredIcons = changeType(icons);
    filteredIcons.forEach(element => createCard(element));
};    


