import React from "react";
import PropTypes from "prop-types";

TodoList.propTypes = {
  todos: PropTypes.array,
  onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
  todos: [],
  onTodoClick: null,
};
function TodoList(props) {
  const {todos, onTodoClick} = props;
  return <div></div>;
}

export default TodoList;
