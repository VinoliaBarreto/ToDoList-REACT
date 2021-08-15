import React from "react";
import PropTypes from "prop-types";

// Declaration of props, we'll use them in our lovely Home.jsx

const Task = props => {
	return <li>{props.text}</li>;
};

Task.propTypes = {
	text: PropTypes.string
};

export default Task;
