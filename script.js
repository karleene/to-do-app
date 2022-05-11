console.log('test');

// query the DOM for the form element
const formElement = document.querySelector('form');
console.log(formElement);


// add a submit even listener on the form 
formElement.addEventListener('submit', function (e) {

    // stop the page from refreshing when the form is submitted 

    e.preventDefault();
    // log out the event object which is generated when the form is submitted:
    console.log(e);

    // alert(`You've submitted this form!`);

    // query the DOM for the input element and check whether it's empty
    const inputElement = document.getElementById('toDoItem');
    console.log(inputElement);


    // only if the user has entered an actual task (AKA input is not empty) that we execute the code below: (CONDITIONAL STATEMENT)

    
    if (inputElement.value !== '') {
    // OR if (inputElement.value === true)
        console.log('congrats on entering a value')

        // grab the user's to-do-item from the form input 
        console.log(inputElement.value);

        // create an li: 
        const liElement = document.createElement('li');
        console.log(liElement);

        // display TO-DO on the page within an li element
            // include a checkbox icon within the li
        liElement.innerHTML = `<i class="fa-regular fa-square"></i>`;
        // create an element that represents the text we have to add (our To Do) 
        const toDoContent = document.createTextNode(inputElement.value);
        console.log(toDoContent);
        // and then append that text element to the li
        liElement.appendChild(toDoContent);

        // add the li element to the ul
        document.querySelector('ul').appendChild(liElement);

        // clear the input
        inputElement.value = ''

    } else {
        alert("Please do not leave input empty before submitting the form")
    }
    

} );

// clicking on a task allows you to toggle between checked/unchecked (AKA done vs not done)

// NOTE: this will not work because you can only add event listeners which exist in the DOM at the time of code execution
// const listElements = document.querySelector('li');
// listElements.addEventListener('click', function () {
//     console.log('To do has been checked');
// });

// in order to attach a click event listener to the li's which don't exist on the page yet, we can use EVENT PROPAGATION to DELEGATE the click event to the ul!









// BONUS: add a "reset" button which clears all of the TO DO's
// BONUS: add an "EDIT TASK" button 
// BONUS: add a "remove task" button to each task
// BONUS: add a congratulations alert when all of the existing TO DO's are checked off
// BONUS: add a "take a break" message if 5 or more tasks are completed