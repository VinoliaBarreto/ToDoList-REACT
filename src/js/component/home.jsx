import React, { useEffect, useState } from "react";
import Task from "./task.jsx";

//create your first component
const Home = () => {
	const [taskList, setTaskList] = useState([]);
	const [listMap, setListMap] = useState("");

	const keepTask = newTask => {
		setTaskList([...taskList, newTask]);
	};

	useEffect(() => {
		if (taskList.length) {
			setListMap(
				taskList.map((task, index) => {
					return <Task text={task} key={index} />;
				})
			);
		}
	}, [taskList]);

	return (
		<div className="container text-center mt-5">
			<form
				onSubmit={event => {
					event.preventDefault();
				}}>
				<h1>To Do List</h1>
				<input
					className="form-control"
					type="tasks"
					onKeyPress={event => {
						if (event.key == "Enter") {
							keepTask(event.target.value);
							event.target.value = "";
						}
					}}
					placeholder="Write your tasks..."
				/>
			</form>
			<div className="listBox">
				<ol>{listMap}</ol>
			</div>
		</div>
	);
};

export default Home;
