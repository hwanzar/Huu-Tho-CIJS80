
import './App.css';

const ITEMS =[
  {
    name: "Alice",
    age: 20
  },
  {
    name: "Bob",
    age: 19
  },
  {
    name: "Dad",
    age: 20
  },
  {
    name: "John",
    age: 20
  },
];

function NameCard(props) {
  return (
    <div className="card">
      <div className="name">Name: {props.name}</div>
      <div className="age">Age: {props.age}</div>
    </div>
  )
}

const App = () => {
	return (
      <div>
        {
          ITEMS.map((item) => NameCard(item))
        }
      </div>
  )
}

export default App;