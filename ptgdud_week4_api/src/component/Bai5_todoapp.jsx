import React, { useEffect, useState } from "react";

function Bai5_todoapp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    name: "",
  });
  const url = "https://6985995f6964f10bf253c856.mockapi.io/task";

  async function fetchData() {
    var rs = await fetch(url);
    var data = await rs.json();
    setTasks(data);
    console.log(data);
  }
  async function handleDelete(id) {
    await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
    setTasks((pre) => pre.filter((task) => task.id != id));
  }
  async function handleAddTask() {
    console.log(newTask);

    const re = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });
    const newT = await re.json();
    setTasks([...tasks, newTask]);
    return newT;
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h3>Todo list</h3>
      <table>
        <thead>
          <tr>
            <th>Tasks</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((item) => [
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>,
          ])}
        </tbody>
      </table>
      <h3></h3>
      <div>
        <form action="">
          <div>
            <p>Taskname</p>
            <input
              onChange={(e) =>
                setNewTask({
                  name: e.target.value,
                })
              }
              type="text"
            />
          </div>
          <h3></h3>
          <button onClick={handleAddTask} type="button">
            Add new task
          </button>
        </form>
      </div>
    </div>
  );
}

export default Bai5_todoapp;
