<todo>
  <style>
    todo .completed {
      text-decoration: line-through;
    }
  </style>

  <a href="/">Home</a>

  <form onsubmit={ add_todo }>
    <div each={ todo, i in todos }>
      <div
        onclick={ toggle.bind(this, i) }
        class={ completed: todo.done }
      >{ todo.todo }</div>
    </div>
    
    <input name="todo">
    <button type="submit">Add Todo</button>
  </form>

  <script>
    this.todos = opts.todos || [];

    add_todo (e) {
      e.preventDefault();
      const input = e.target.querySelector('input');
      this.todos.push({ todo: input.value });
      input.value = '';
    }

    toggle (i) {
      const map = (todo, ind) => i === ind
        ? Object.assign({}, todo, { done: !todo.done })
        : todo;
      this.todos = this.todos.map(map);
    }
  </script>
</todo>
