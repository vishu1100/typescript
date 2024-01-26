class TodoApp {
    private tasks: string[] = [];
  
    private addButton = document.getElementById('add') as HTMLButtonElement;
    private taskInput = document.getElementById('task') as HTMLInputElement;
    private taskList = document.getElementById('taskList') as HTMLUListElement;
  
    constructor() {
      this.addButton.addEventListener('click', () => this.addTask());
    }
  
    private addTask() {
      const task = this.taskInput.value.trim();
      if (task) {
        this.tasks.push(task);
        this.renderTasks();
        this.taskInput.value = '';
      }
    }
  
    private renderTasks() {
      this.taskList.innerHTML = '';
      this.tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;
        li.addEventListener('click', () => this.removeTask(index));
        this.taskList.appendChild(li);
      });
    }
  
    private removeTask(index: number) {
      this.tasks.splice(index, 1);
      this.renderTasks();
    }
  }
  
  const todoApp = new TodoApp();
  