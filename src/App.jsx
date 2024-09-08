import { Container, FormControl, InputGroup, Button } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';


function fetchTodos(){
  return [
  {
    id: 1,
    title: "eat food",
    completed: false,
  },
  {
    id: 2,
    title: "brush teeth",
    completed: false,
  },
  {
    id: 3,
    title: "drink water",
    completed: true,
  },
  {
    id: 4,
    title: "shower",
    completed: true,
  },
  {
    id: 5,
    title: "sleep",
    completed: true,
  },
  ];
}

function TodoItem(props) {
  return (
    <InputGroup key={props.id}>
    <InputGroup.Checkbox
    checked={props.completed}
    onChange={props.onToggle}
    />
    <FormControl
      value={props.title}
      style={{
        textDecoration: props.completed ? "line-through 2px" : "None",
      }}
      />
      <Button variant="outline-danger" onClick={props.onDelete}>
      <i className="bi bi-trash"></i>
      </Button>
    </InputGroup>
  )
}

function App() {
  const [todos, setTodos] = useState(fetchTodos());
  return (
    <>
      <Container>
        {todos.map(todo =>
          <TodoItem
            key={todo.id}
            title={todo.title}
            completed={todo.completed}
            onDelete={() => {
              setTodos(todos.filter((x) => x.id !== todo.id));
            }}
            onToggle={() => {
              setTodos(todos.map((x) =>
                x.id === todo.id ? {...x, completed: !x.completed} : x
              ))
            }}
          />
        )}
      </Container>
    </>
  );
}

export default App;
