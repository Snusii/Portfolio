
///////////////////////
// Lighmode / Darkmode
//////////////////////


// Keep track if lightmode is on or off
let lightMode = false;

// arrow function setDarkMode
const setDarkMode = () => {
    // removes lightmode styleing on the DOM
    document.body.classList.remove("light-mode");
    //add dark-mode-btn to the DOM when darkmode is on
    //and remove light-mode-btn
    document.querySelector("#scrollup-icon").classList.add("dark-mode-btn");
    document.querySelector("#scrollup-icon").classList.remove("light-mode-btn");
    lightMode = false;
};

// arrow function setLightMode
const setLightMode = () => {
    
    // add lightmode styleing on the DOM
    document.body.classList.add("light-mode");
    // add light-mode-btn when DOM is changed to lightmode 
    document.querySelector("#scrollup-icon").classList.add("light-mode-btn");
    lightMode = true;
};

// toggle function 
function toggle() {
    // is lightMode on ? if false set setDarkMode function - if true set setLightMode function
    lightMode ? setDarkMode() : setLightMode();

}


///////////////////
//Function for h1
//////////////////

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
            },300);
        }); 

        // awaiting timeout then updates element
        await myPromise.then((value) => {
            element.textContent = value;
        }); 
    }
}


///////////////////////
// Hobby progress bar 
//////////////////////

// running the function autoMoveBar one time first
// to prevent the elements inside to be stuck at 0 for 10 sec before starting when DOM is loaded
autoMoveBar();

// To make the bars load infinite after haveing a pause on 10 sec
const autoMoveInterval = setInterval(autoMoveBar, 10000);

/////////////
// Functions
/////////////

// function autoMoveBar that contains calls to moveBar function to start all progress bars
function autoMoveBar() {
moveBar (document.querySelector("#bar-one"), 90);
moveBar (document.querySelector("#bar-two"), 95);
moveBar (document.querySelector("#bar-three"), 98);
moveBar (document.querySelector("#bar-four"), 85);
moveBar (document.querySelector("#bar-five"), 80);
}

// function movebar that takes in two parameters
function moveBar(element, maxValue) {
    // boolean
    let loading = false;
    // if loading is false 
    if (!loading) {
        // set loading to true
        loading = true;
        // variable set to value 0 so the bar starts loading from 0
        let currentProgress = 0;
        // variable progressInterval set to the value of method setInterval
        // in the method is the loadingBar function with the value of Intervals
        // setInterval is set to load in 0,2 sec
        const progressInterval = setInterval(loadingBar, 20);

        // function loadingBar
        function loadingBar() {
            // if currentProgress is the same as maxValue
            if (currentProgress === maxValue) {
                // using clearInterval to clear Interval
                clearInterval(progressInterval);
                // set loading to false
                loading = false;
            }
            // else 
            else {
                // currentProgess keep running
                currentProgress++;
                // elements style width is set to currentProgress in %
                element.style.width = currentProgress + "%";
            }
        }
    }
}


///////////////////
// ScrollUp button
///////////////////

// Getting the button 
const scrollUp = document.querySelector(".scroll-btn");

// Adding event listener to the window to determine when the button will show.
window.addEventListener("scroll", function showButton() {

    // if scrollY is bigger than 200, the button shows.
    if (window.scrollY > 200) {
        scrollUp.style.display = "block";
    }
    else {
        scrollUp.style.display = "none";
    }

});

// Adding event listener to the button, if clicked scroll smooth to the top.
scrollUp.addEventListener("click", function scrollButtonUp() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
 