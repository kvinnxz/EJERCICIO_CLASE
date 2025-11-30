function addTask() {
      const input = document.getElementById("taskInput");
      const taskText = input.value.trim();

      if (taskText === "") return;

      const li = document.createElement("li");

      li.innerHTML = `
        <span>${taskText}</span>
        <div class="actions">
          <button onclick="toggleComplete(this)">✔</button>
          <button onclick="deleteTask(this)">🗑️</button>
        </div>
      `;

      document.getElementById("taskList").appendChild(li);
      input.value = "";
    }

    function toggleComplete(element) {
      const li = element.closest("li");
      li.classList.toggle("completed");
    }

    function deleteTask(element) {
      const li = element.closest("li");
      li.remove();
    }