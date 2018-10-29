let errorMessages = [];

// On page load, set first textfield focused.
const txtField = document.querySelector('#name');
txtField.focus();

/* -------- Job role section --------- */ 


// Retrieve job titles
const jobTitleList = document.querySelector('#title');

// Hide "other" input field
const otherField = document.querySelector('#other-title');
otherField.style.display = 'none';

// Add eventListener to determine which option was selected
jobTitleList.addEventListener('change', function(event){
    if(event.target.value == 'other') {
        otherField.style.display = 'block'; // Display if "other-title" is selected
    } else {
        otherField.style.display = 'none'; // Hide if a different title is selected
    }
});


// const selectDesign = document.querySelector('#design');
// const selectOpts = document.querySelector('#design option');
// selectDesign.addEventListener('change', function(event){

//     let options = selectDesign.selectedOptions;
//     for(let i = 0; i < options.length; i += 1) {
//         console.log(options[i].text);
//     }

//     console.log(event.target.value);



    
   // let text = selectDesign.options[selectDesign.selectedIndex].text;
   // console.log(text);
    

    
    
//});
const color = document.querySelector('#color');
const colors = document.querySelectorAll('#color option');




/* -------- T-shirt section --------- */ 
 
const designItems = document.querySelector('#design');
//const themeSelected = document.querySelector('#design option');
designItems.addEventListener('change', function(event) {
    

    // If user selects JS puns 
    if (event.target.value == "js puns") {

    } else if (event.target.value == "heart js") {

    }

});
/* 

    
    ”T-Shirt Info” section
    For the T-Shirt "Color" menu, only display the color options that match the design selected in the "Design" menu.
    If the user selects "Theme - JS Puns" then the color menu should only display "Cornflower Blue," "Dark Slate Grey," and "Gold."


    If the user selects "Theme - I ♥ JS" then the color menu should only display "Tomato," "Steel Blue," and "Dim Grey."
    
    
    When a new theme is selected from the "Design" menu, the "Color" field and drop down menu is updated.
 */




















/* -------- Register for activities section --------- */ 

/* -------- Payment info section --------- */ 