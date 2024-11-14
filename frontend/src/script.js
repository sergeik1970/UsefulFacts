

console.log(document.querySelector("body"))
document.getElementById('button__all').addEventListener('click', () => {
    filterSelection('all');
    console.log("all");
});

document.getElementById('button__animals').addEventListener('click', () => {
    filterSelection('animals');
});

document.getElementById('button__nature').addEventListener('click', () => {
    filterSelection('nature');
});

document.getElementById('button__tech').addEventListener('click', () => {
    filterSelection('technology');
});


// alert("")

function filterSelection(query) {
    const cards = document.querySelectorAll('.card');
    console.log(query);
    console.log(cards);
    for (let card of cards) {
        console.log(card);
        if (card.getAttribute('data-type') == query) {
            card.classList.add('show');

        }

        else if (query == 'all') {
            card.classList.add('show');

        }

        else {
            card.classList.remove('show');
        }
    }
}

// for (let button of filterButtons) {
//     // для каждой кнопки добавим слушатель событий
//     button.addEventListener('click', () => {
//         for (let btn of filterButtons) {
//             btn.classList.remove('active');
//         }
//         button.classList.add('active');
//     });
// }
filterSelection('all');