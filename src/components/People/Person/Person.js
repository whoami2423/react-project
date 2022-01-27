import './Person.css';

function Person({ name, increase, age, change, remove, children }) {
  return (
    // React.createElement('div', {className: "title"},
    //   React.createElement('h3', {className: "title"}, props.name),
    //   React.createElement('p', {className: 'age'}, "Age: " + props.age)
    // )
    <div className="person">
      <h3 className="title" onClick={increase}>
        {name}
      </h3>
      <p className="age">Age: {age}</p>
      <input type="text" value={name} onChange={change} />
      <div className="hobby" onClick={remove}>
        {children}
      </div>
    </div>
  );
}

export default Person;
