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




// textTyper function call
textTyper (document.querySelector("#header-text"))

// textTyper async function takes in html element that contains text and writes every character with a delay
async function textTyper (element) {

    // getting the text value from the element and it into text variable
    let text = element.textContent;

    // setting the element to the first character, to prevent DOM movement
    element.textContent = text[0];

    // setting the text builder variable to the same character
    let headerText = text[0];

    // looping through the text, starting at position 1 (first character already set)
    for (let i = 1; i < text.length; i++) {
        // adding current character from the text to headerText
        headerText += text[i];

        // creating a promise
        // with only resolve posibility 
        let myPromise = new Promise((resolve) => {
            // setting timeout 
            setTimeout(function() {
                resolve(headerText);
            },350);
        }); 

        // awaiting timout then updates element
        await myPromise.then((value) => {
            element.textContent = value;
        }); 
    }
}

