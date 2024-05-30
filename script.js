const calcForm = document.querySelector('.form-calc');
const inputsCalc = calcForm.querySelectorAll('.input-culc-form');
const btnFormCalc = calcForm.querySelector('.form-calc-btn');

inputsCalc.forEach((inp) => {
    let requidInput = false;
    inp.addEventListener('keyup', () => {
        inputsCalc.forEach((inp) => {
            if (inp.value != '') {
                requidInput = true;
            } else {
                requidInput = false;
            }
        });
        if (requidInput) {
            btnFormCalc.removeAttribute("disabled")
        } else {
            if (!btnFormCalc.getAttribute('disabled')) {
                btnFormCalc.setAttribute('disabled', '');
            }

        }

    })
});

const modalCall = document.querySelector('.modal-calc');
const order = modalCall.querySelector('.order');


calcForm.addEventListener('submit', (event) => {
    event.preventDefault();
    document.body.classList.add('modal');

    let brand = document.getElementById('brand').value;
    let model = document.getElementById('model').value;
    let year = document.getElementById('year').value;
    let state = document.getElementById('state').value;
    let text = document.getElementById('text').value;

    order.innerHTML = `<span>Ваш авто:</span>
    <p>${brand} ${model} ${year}г.</p>`

    modalCall.classList.add('open');
});

const callForm = document.querySelector('.call-form');

callForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Ваша заявка отправлена! Ожидайте звонка');
    document.body.classList.remove('modal');
    modalCall.classList.remove('open');
});

function handleButtonClick(id) {
    var hiddenElement = document.getElementById(id);
    hiddenElement.scrollIntoView({ block: "start", behavior: "smooth" });
}

function openModal() {
    modalCall.classList.add('open');
    document.body.classList.add('modal');
}
function closeModal() {
    document.body.classList.remove('modal');
    modalCall.classList.remove('open');
}
