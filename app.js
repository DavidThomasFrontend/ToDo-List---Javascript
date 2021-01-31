const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');


const generateTemplate = todo => { //4. this will pass in the value thatthe user entered into a new list item
    const html = ` <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
        </li>`;

    list.innerHTML += html;    // 5. then adding the new item to the inner html list of the ul template
};

addForm.addEventListener('submit', e =>{ //1. listening for submit event

e.preventDefault(); 
const todo = addForm.add.value.trim(); //2. getting the value the user types in and then // trim removes any white space before or after string. 
if(todo.length){ // 6. if the item has a length it will be added to the list if there is nothing in the add new todo it will do nothing
    generateTemplate(todo); // 3. calling the generate function
    addForm.reset(); // 7. this will reset the form after an item has been added 
}


});

//delete todos

list.addEventListener('click', e => { // 1. attach event listener "click" to the list

    if(e.target.classList.contains('delete')){ //2. when we click on the list we check if the target was the delete element
        e.target.parentElement.remove(); //3. if it is then we delete the parent of the trash can icon which is the li tage therefore delete the todo item
    }
});

const filterTodos = (term) => {

    Array.from(list.children) // getting all the todos inside the array that dont include the term 
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add('filtered'));

    Array.from(list.children) // getting all the todos inside the array that do include the term 
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove('filtered')); //then for each one of them we apply a filtered class
    
};

// keyup event

search.addEventListener('keyup', () => { // this will performed everytime the user performs a key press
    const term = search.value.trim().toLowerCase(); // in the search we get the value and trim for any white space
    filterTodos(term);
});