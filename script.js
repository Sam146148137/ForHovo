const windowSize = window.innerWidth;
let namak, pesa, names, right_block;


if (windowSize > 1000) {
    document.querySelector('body').removeChild(document.querySelector('.small_container'))
    namak = document.querySelector('.left_block');
    pesa = document.querySelector('.pesa');
    names = document.querySelector('.names');
    right_block = document.querySelector('.right_block')
} else {
    document.querySelector('body').removeChild(document.querySelector('.container'))
    namak = document.querySelector('.left_block');
    pesa = document.querySelector('.pesa');
    names = document.querySelector('.names');
    right_block = document.querySelector('.right_block')
}

const namesHideHandler = () => {
    names.classList.add('hide_names_half');
    right_block.classList.add('show_right_half')
}
const pesaHandler = () => {
    pesa.classList.add('pesu_qaylel');
    namesHideHandler();

}


setTimeout(() => {
    pesaHandler();
},2000)
