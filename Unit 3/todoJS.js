var todoBtn = document.getElementById('todoBtn')
var todoInput = document.getElementById('todoInput');
var result = document.getElementById('result')

todoBtn.addEventListener('click', function (e) {
    var todoInputVal = todoInput.value;

    console.log(todoInputVal)
    if (todoInputVal !== '') {
        var todoLi = document.createElement('li');

        todoLi.innerHTML = todoInputVal + '<button>X</button>';
        result.appendChild(todoLi);
        todoInput.value = '';
    } else {
        console.log('未輸入欄位')
    }
});

result.addEventListener('click', function (e) {
    var delUl = e.target.parentNode.parentNode
    var delLi = e.target.parentNode
    delUl.removeChild(delLi);
});