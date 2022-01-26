import './Person.css';

function Person (props) {
  return (
    // React.createElement('div', {className: "title"},
    //   React.createElement('h3', {className: "title"}, props.name),
    //   React.createElement('p', {className: 'age'}, "Age: " + props.age)
    // )
    <div className="person">
      <h3 className="title" onClick={props.increase}>
        {props.name}
      </h3>
      <p className="age">Age: {props.age}</p>
      <input type="text" value={props.name} onChange={props.change} />
      <div className="hobby">{props.children}</div>
    </div>
  );
}

export default Person;
