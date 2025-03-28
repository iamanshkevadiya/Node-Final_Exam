const createTask = async (data) => {
  await fetch("http://localhost:8095/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

const getTask = () => {
  return fetch("http://localhost:8095/tasks").then((response) =>
    response.json()
  );
};

const updatedTaskData = async (id, data) => {
  await fetch(`http://localhost:8095/tasks/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

const deleteTask = async (id) => {
  await fetch(`http://localhost:8095/tasks/${id}`, {
    method: "DELETE",
  });
};

export { createTask, getTask, updatedTaskData,deleteTask };
