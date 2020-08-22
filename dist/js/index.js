var TouchMenu = TouchMenuLA({
    target: document.getElementById('menu')
});

document.getElementById('menu-open').addEventListener('click', function () {
    TouchMenu.toggle();
});

function closeModal() {
    document.querySelector('.compose-box').classList.add('hide');
}

function openModal() {
    document.querySelector('.compose-box').classList.remove('hide');
}