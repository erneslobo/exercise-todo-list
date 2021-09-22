import React, { useState } from "react";

//create your first component
const Home = () => {
	const [task, setTask] = useState("");
	const [tasks, setTasks] = useState([]);
	const [count, setCount] = useState(0);
	const [show, setShow] = useState(false);

	let addtask = () => {
		setTasks([...tasks, task]);
		setCount(count + 1);
		setTask("");
	};

	let deleteTask = value => {
		setTasks(tasks.filter((task, index) => index !== value));
		setCount(count - 1);
	};

	const listTasks = tasks.map((task, index) => (
		<li className="list-group-item" key={index}>
			{task}
			<i
				className="fas fa-times float-end hide"
				onClick={() => deleteTask(index)}></i>
		</li>
	));

	return (
		<div className="container mt-5">
			<h1 className="text-center">todos</h1>
			<input
				className="form-control"
				type="text"
				placeholder="What needs to be done?"
				value={task}
				onChange={e => setTask(e.target.value)}
				onKeyPress={e =>
					e.key === "Enter" && addtask(e.target.value)
				}></input>
			<ul className="list-group">
				{listTasks}
				<li className="list-group-item">{`${count} item left`}</li>
			</ul>
		</div>
	);
};

export default Home;
