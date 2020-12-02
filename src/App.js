import React, { Component } from 'react';
import './App.css';
export default class App extends Component {
    state = {
        todoList: [],
        todo: { text: '', category: 'Coding' },
        filter: 'All',
    };

    addTodo = () => {
        let newTodoList = this.state.todoList;
        newTodoList.push(this.state.todo);
        this.setState({
            todo: { text: '', category: 'Coding' },
            todoList: newTodoList,
        });
    };

    putOneTodo = (e) => {
        this.setState({
            todo: {
                text: e.target.value,
                category: this.state.todo.category,
            },
        });
    };

    putOneCategory = (e) => {
        this.setState({
            todo: {
                text: this.state.todo.text,
                category: e.target.value,
            },
        });
    };

    deleteTodo = (index) => {
        let newTodoList = this.state.todoList;
        newTodoList.splice(index, 1);
        this.setState({
            todoList: newTodoList,
        });
    };

    displayCategory = (e) => {
        this.setState({
            filter: e.target.innerText,
        });
    };

    render() {
        return (
            <div className="App">
                <h1>Hello, Chuck!</h1>
                <input
                    value={this.state.todo.text}
                    onChange={this.putOneTodo}
                    placeholder="Write your todo here..."
                ></input>
                <select
                    onChange={this.putOneCategory}
                    className="categories-container"
                >
                    <option>Coding</option>
                    <option>Sports</option>
                    <option>Food</option>
                    <option>Extra</option>
                </select>
                <button className="add-btn" onClick={this.addTodo}>
                    Add it
                </button>
                <div className="common-container">
                    <div className="todos-container">
                        {this.state.todoList.length !== 0 ? (
                            this.state.todoList
                                .filter(
                                    (todo) =>
                                        this.state.filter === 'All' ||
                                        todo.category === this.state.filter
                                )
                                .map((todo, index) => {
                                    return (
                                        <div
                                            className="todo-container"
                                            key={index}
                                        >
                                            <span>- {todo.text} | </span>
                                            <span className="category-container">
                                                {' '}
                                                {todo.category}{' '}
                                            </span>
                                            <button
                                                onClick={() => {
                                                    this.deleteTodo(index);
                                                }}
                                                className="delete-btn"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    );
                                })
                        ) : (
                            <div>You did not add any todo yet</div>
                        )}
                    </div>
                    <div className="filter-container">
                        <p>Filter it</p>
                        <hr />
                        <button
                            className="category-button"
                            onClick={this.displayCategory}
                        >
                            Coding
                        </button>
                        <button
                            className="category-button"
                            onClick={this.displayCategory}
                        >
                            Sports
                        </button>
                        <button
                            className="category-button"
                            onClick={this.displayCategory}
                        >
                            Food
                        </button>
                        <button
                            className="category-button"
                            onClick={this.displayCategory}
                        >
                            Extra
                        </button>
                        <button
                            className="category-button"
                            onClick={this.displayCategory}
                        >
                            All
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
