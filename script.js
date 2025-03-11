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