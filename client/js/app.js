function showMessage(text) {
  const msg = document.getElementById("message");
  msg.innerText = text;
  msg.style.opacity = "1";

  setTimeout(() => {
    msg.style.opacity = "0";
  }, 2000);
}

// CREATE PROJECT
async function createProject() {
  await fetch("http://localhost:5000/api/projects", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "New Project",
      description: "Auto created",
      status: "Pending",
    }),
  });

  showMessage("Project Created ✅");

  loadProjects(); // refresh with animation
}

// LOAD PROJECTS
async function loadProjects() {
  const res = await fetch("http://localhost:5000/api/projects");
  const projects = await res.json();

  const list = document.getElementById("projectList");
  list.innerHTML = "";

  projects.forEach((project) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <div class="project-card">
        <b>${project.title}</b> - ${project.status}

        <button onclick="updateProject('${project._id}')">✔</button>
        <button onclick="deleteProject('${project._id}')">❌</button>

        <br/>
        <input id="task-${project._id}" placeholder="New Task"/>
        <button onclick="addTask('${project._id}')">Add</button>

        <ul id="tasks-${project._id}"></ul>
      </div>
    `;

    list.appendChild(li);
    loadTasks(project._id);
  });
}

// ADD TASK
async function addTask(projectId) {
  const input = document.getElementById(`task-${projectId}`);
  const title = input.value;

  if (!title) return;

  await fetch("http://localhost:5000/api/tasks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title,
      projectId,
    }),
  });

  input.value = "";
  showMessage("Task Added ✅");

  loadTasks(projectId);
}

// LOAD TASKS
async function loadTasks(projectId) {
  const res = await fetch(`http://localhost:5000/api/tasks/${projectId}`);
  const tasks = await res.json();

  const list = document.getElementById(`tasks-${projectId}`);
  list.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <div class="task-item">
        ${task.title} - ${task.status}
        <span>
          <button onclick="completeTask('${task._id}')">✔</button>
          <button onclick="deleteTask('${task._id}')">❌</button>
        </span>
      </div>
    `;

    list.appendChild(li);
  });
}

// UPDATE TASK
async function completeTask(id) {
  await fetch(`http://localhost:5000/api/tasks/${id}`, {
    method: "PUT",
  });

  loadProjects();
}

// DELETE TASK
async function deleteTask(id) {
  await fetch(`http://localhost:5000/api/tasks/${id}`, {
    method: "DELETE",
  });

  loadProjects();
}

// UPDATE PROJECT
async function updateProject(id) {
  await fetch(`http://localhost:5000/api/projects/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status: "Completed" }),
  });

  loadProjects();
}

// DELETE PROJECT
async function deleteProject(id) {
  await fetch(`http://localhost:5000/api/projects/${id}`, {
    method: "DELETE",
  });

  loadProjects();
}