import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./navbar";
import "./App.css";

function Home() {
  return (
    <div className="page">
      <h1>Welcome to My React Project</h1>
      <p>This is the Home page.</p>
    </div>
  );
}

function Tasks() {
  const [tasks, setTasks] = useState([]);


  return (
    <div className="page">
      <h1>Tasks</h1>

      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <div>
          {tasks.map((task) => (
            <Task
              key={task.id}
              title={task.title}
              completed={task.completed}
            />
          ))}
        </div>
      )}
    </div>
  );
}



function Task({ title, completed }) {
  return (
    <div className="task">
      <p
        style={{
          textDecoration: completed ? "line-through" : "none",
        }}
      >
        {title}
      </p>

      <span>
        {completed ? "Completed" : "Pending"}
      </span>
    </div>
  );
}


function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/tasks" element={<Tasks />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;