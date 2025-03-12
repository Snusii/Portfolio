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

// textTyper (document.querySelector("#header-text"))

async function textTyper (element) {
    let text = element.textContent;
    let headerText = "";
    let delayInMilliseconds = 1000; //1 second
    for (let i = 0; i < text.length; i++) {
        setTimeout(function() {
            headerText += text[i];
            element.innerText = headerText;
        }, delayInMilliseconds);
          
        
        console.log();
    }
}














































/* sette meg inn i denne?
try {
    
} catch (error) {
    
}*/