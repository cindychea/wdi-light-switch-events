const background = document.querySelector('body');
const button = document.querySelector('button');
const status = document.querySelector('.status');

function lightSwitch() {
    if (button.classList.contains('on') && status.firstChild.nodeValue === "It's so bright in here!") {
        button.classList.remove('on');
        button.classList.add('off');
        status.firstChild.nodeValue = "Hey, who turned off the lights?";
        background.style.backgroundColor = '#000';
        status.style.color = '#FFF';
    } else if (button.classList.contains('off') && status.firstChild.nodeValue === "Hey, who turned off the lights?") {
        button.classList.remove('off');
        button.classList.add('on');
        status.firstChild.nodeValue = "It's so bright in here!";
        background.style.backgroundColor = '#FFF';
        status.style.color = '#000';
    }
};

button.addEventListener('click', lightSwitch);