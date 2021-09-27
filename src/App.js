import queryString from 'query-string';
import React, { useEffect, useState } from "react";
import './App.scss';
import Clock from './components/Clock';
import ColorBox from './components/ColorBox';
import Hero from './components/Hero';
import MagicBox from './components/MagicBox';
import Pagination from './components/Pagination';
import PostFiltersForm from './components/PostFiltersForm';
import PostList from './components/PostList';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


function App() {

  const [todoList, setTodoList] = useState([
    { id: 1, title: 'hello world 1' },
    { id: 2, title: 'hello world 2' },
    { id: 3, title: 'hello world 3' },
  ]);

  const [postList, setPostList] = useState([]);

  const [pagination, setPagination] = useState({ _page: 1, _limit: 10, _totalRows: 15 });

  const [filters, setFilters] = useState({
    _limit: 10, _page: 1, title_like: ''
  });

  useEffect(() => {
    async function fetchPostList() {
      try {
        const params = queryString.stringify(filters);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${params}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        const { data, pagination } = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        throw error;
      }
    }
    fetchPostList();
  }, [filters]);

  function handleTodoClick(todo) {
    const index = todoList.findIndex(x => x.id === todo.id);
    if (index < 0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  function handleTodoFormSubmit(formValues) {
    const newTodo = {
      id: todoList.length + 1,
      ...formValues,
    }
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  function handlePageChange(newPage) {
    setFilters({
      ...filters,
      _page: newPage,
    })
  }

  function handleFiltersChange(newFilters) {
    setFilters({
      ...filters,
      _page: 1,
      title_like: newFilters.searchTerm,
    });
  }

  const [showClock, setShowClock] = useState(true);

  return (
    <div className="app">
      <h1>Welcome to React Hooks</h1>
      <ColorBox />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <PostFiltersForm onSubmit={handleFiltersChange} />
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
      {showClock && <Clock />}
      <button onClick={() => { setShowClock(false) }} >hide clock</button>
      <MagicBox />
      <Hero name='Volcano' />
    </div>
  );
}

export default App;
