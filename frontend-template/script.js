const cards = document.querySelectorAll('.card');
const filterButtons = document.querySelectorAll('.filter__button');

function filterSelection(query) {
    for (let card of cards) {
        if (card.getAttribute('data-type') === query) {
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

for (let button of filterButtons) {
// для каждой кнопки добавим слушатель событий
button.addEventListener('click', () => {
    for (let btn of filterButtons) {
        btn.classList.remove('active');
    }
    button.classList.add('active');
});
}

filterSelection('all');