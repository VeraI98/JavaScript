const KEY = "todos";

    function getTodos() {
    const data = localStorage.getItem(KEY);
    if (!data) return [];
    return JSON.parse(data);
    }


    function saveTodos(todos) {
    localStorage.setItem(KEY, JSON.stringify(todos));
    }

    
    function addTodo(title) {
    const todos = getTodos();
    const newTodo = {
        id: Date.now(),
        title: title,
        completed: false,
    };


    todos.push(newTodo);
    saveTodos(todos);
    }


    function toggleTodo(id) {
    const todos = getTodos();
    const updated = todos.map((todo) => {
        if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
        }
        return todo;
    });


    saveTodos(updated);
    }


    function deleteTodo(id) {
    const todos = getTodos();
    const updated = todos.filter((todo) => todo.id !== id);

    saveTodos(updated); // сохраняем
}