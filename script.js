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




































/*const hobbies = [
    "Koding",
    "Gaming",
    "Baking",
    "Dyr", 
    "Strikking",
    "Musikk"
]


//////////////
// Functions
/////////////

function downloadCV () {

}

function darkMode () {

}

function hobbyChanger () {
    for (let i = 0; i < hobbies.length; i++)


}

function contactMe () {

}
*/