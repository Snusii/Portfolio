const toggleSwitch = document.querySelector("#toggleSwitch");
let lightMode = false;


const setDarkMode = () => {
    document.body.classList.remove("light-mode")
    lightMode = false;
};

const setLightMode = () => {
    document.body.classList.add("light-mode")
    lightMode = true;
};

function toggle() {
    lightMode ? setDarkMode() : setLightMode();

}


const headerText = document.querySelector("#header-text")

function textDelay (duration) {
    return new Promise((resolve, duration) => {
        
})

async function textTyper (text, delay) {
    const letters = text.split(" ");
    for (let i = 0; i < letters.length; i++) {
        console.log([i])
        await textDelay(delay)
    }
}
}

const delay = 1000;

