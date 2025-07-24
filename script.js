const windowSize = window.innerWidth;
let namak, pesa, names, right_block;

document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("audio");
    // Try to play audio on page load (may be blocked by browser autoplay policy)
    audio.play().catch(() => {
        // If autoplay fails, play on first user interaction
        const playAudio = () => {
            audio.play();
            document.removeEventListener("click", playAudio);
        };
        document.addEventListener("click", playAudio);
    });
});

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
