function fetchTodos(){
    fetch("https://todo-api-beige.vercel.app/api/todos", {
        method: 'GET',
        headers: {
            'x-secret-key': '9f65ab977aa8be03a346cdc106a707a943f8d33f5148ef3f89c88fdf6df3bffe',
            'Content-Type': 'application/json'
        }
    })
  
    .then ((Response) => {
      return Response.json();
    })
    .then(data => {
        console.log(data);
        const todoListDiv = document.getElementById('todo-list');
        todoListDiv.innerHTML = '';

        data.data.forEach(todo => {
            const card = document.createElement('div');
            card.className = 'card mt-2';
            card.innerHTML = `
            <div class="card-body">
                <div class="row">
                    <div class="col">ID: ${todo.id}</div>
                    <div class="col">Name: ${todo.task_name}</div>
                    <div class="col">Status: ${todo.task_status ? 'Done' : 'Pending'}</div>
                </div>
            </div>
        `;
            todoListDiv.appendChild(card);
        });
    })
    .catch ((error) => {
      console.error("error",error);
      return error;
    })
  }
  
  fetchTodos();

function createTask(event){
    event.preventDefault();
    let task_name=document.getElementById("newTask").value;
    console.log(task_name);
    let task_Priority=document.getElementById("priority").value;
    console.log(task_Priority);
    let created_by=document.getElementById("createdBy").value;
    console.log(created_by);
   
    let data = [];
        for (let i = 1; i <=3; i++) {
            data.push({
                task_name:task_name,
                task_Prcreated_biority: task_Priority,
                created_by: created_by,

            });
        }
        saveDataToAPI(data);

}

function saveDataToAPI(data){
    fetch("https://todo-api-beige.vercel.app/api/todos/1/complete", {
      method: "POST",
      body: JSON.stringify({ answers: data }),
      headers: {
          "x-secret-key": "9f65ab977aa8be03a346cdc106a707a943f8d33f5148ef3f89c88fdf6df3bffe",
          "Content-Type": "application/json"
      },

  })
  .then(response => response.json())
  .then(data => {
      console.log('Success:', data);
  })
  .catch((error) => {
      console.error('Error:', error);
  });
  
  }
