<counter>
  <a href="/">Home</a>

  <div>{ count }</div>

  <button onclick={ increment }>Increment</button>
  <button onclick={ decrement }>Decrement</button>

  <script>
    this.count = this.count || 0;

    increment () {
      ++this.count;
    }

    decrement () {
      --this.count;
    }
  </script>
</counter>
