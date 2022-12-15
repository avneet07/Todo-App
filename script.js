const input = document.querySelector('.task-text');
const addButton = document.querySelector('#add-btn');
const listWrap = document.querySelector('.list-wrap');
const taskCount = document.querySelector('.task-count');

// adding event listener on the input field
input.addEventListener('keyup', event =>{ 
    // check if string is not empty
    if(input.value.trim() != ''){
        addButton.style.display = "block";

        // check if the key pressed is enter then call the add list function
        if(event.keyCode == 13){
            addList(input.value.trim());
        }
    }
    else{
        addButton.style.display = "none";
    }
});

function addList(value){
    let li = document.createElement('li');
    let span = document.createElement('span');
    span.innerHTML = '<i class="fa fa-times-circle-o"></i>';
    li.innerHTML = ` <label>${value}
            <input type="checkbox">
            <span class="checkmark"></span>
            </label>`;
    li.appendChild(span);

    listWrap.appendChild(li);
    input.value = '';
    addButton.style.display = "none";
    updateTaskCount();

    span.addEventListener('click', e => {
        e.target.parentElement.parentElement.remove();
        updateTaskCount();
    });
}

function updateTaskCount(){
    let list = listWrap.querySelectorAll('li');
    taskCount.innerText = list.length;
}