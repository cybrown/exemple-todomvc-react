import * as React from 'react';
import * as ReactDom from 'react-dom';

const root = document.getElementById('react-root');

if (!root) {
    throw new Error('react root existe pas');
}

interface TodoItem {
    id: number;
    label: string;
    done: boolean;
}

interface TodoProps {
    todo: TodoItem;
}

interface TodoState {
    editing: boolean;
}

class Todo extends React.Component<TodoProps, TodoState> {

    state: TodoState = {
        editing: false
    };

    onDoneChange: React.EventHandler<React.FormEvent> = event => {
        this.props.todo.done = !this.props.todo.done;
        this.forceUpdate();
    }

    onToggleEdit: React.EventHandler<React.MouseEvent> = event => {
        const newState = !this.state.editing;
        this.setState({
            editing: newState
        } as any);
        if (newState) {
            setTimeout(() => this.input.focus(), 10);
        }
    }

    cssClass() {
        const classes: string[] = [];
        if (this.props.todo.done) {
            classes.push('completed');
        }
        if (this.state.editing) {
            classes.push('editing');
        }
        return classes.join(' ');
    }

    private input: HTMLInputElement;

    getInputRef = (input: HTMLInputElement) => {
        this.input = input;
    };

    onChangeLabel: React.EventHandler<React.FormEvent> = (e) => {
        this.props.todo.label = (e.target as HTMLInputElement).value;
        this.forceUpdate();
    }

    render() {
        return <li className={this.cssClass()}>
            <div className="view">
                <input className="toggle" type="checkbox" checked={this.props.todo.done} onChange={this.onDoneChange} />
                <label onDoubleClick={this.onToggleEdit}>{this.props.todo.label}</label>
                <button className="destroy"></button>
            </div>
            <input onBlur={this.onToggleEdit}
                   className="edit"
                   value={this.props.todo.label}
                   onChange={this.onChangeLabel}
                   ref={this.getInputRef} />
        </li>;
    }
}

const todos: TodoItem[] = [{
    id: 1,
    label: 'toto 1',
    done: true
}, {
    id: 2,
    label: 'toto 2',
    done: false
}];

ReactDom.render(<div><section className="todoapp">
        <header className="header">
            <h1>todos</h1>
            <input className="new-todo" placeholder="What needs to be done?" autofocus />
        </header>
        <section className="main">
            <input className="toggle-all" id="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
                {todos.map((todo, index) => <Todo key={todo.id} todo={todo} />)}
            </ul>
        </section>
        <footer className="footer">
            <span className="todo-count">
                <strong>2</strong> items left
            </span>
            <ul className="filters">
                <li>
                    <a className="selected" href="#/">All</a>
                </li>
                <li>
                    <a href="#/active">Active</a>
                </li>
                <li>
                    <a href="#/completed">Completed</a>
                </li>
            </ul>
            <button className="clear-completed">Clear completed</button>
        </footer>
    </section>
    <footer className="info">
        <p>Double-click to edit a todo</p>
        <p>Written by <a href="https://github.com/addyosmani">Addy Osmani</a></p>
        <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
    </footer>
</div>, root);
