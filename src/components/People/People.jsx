import Person from './Person/Person';

function People({ users, increaseAge, changeName, deletePerson }) {
  return (
    <div className="people">
      {users.map((user, index) => {
        return (
          <Person
            key={user.id}
            name={user.name}
            age={user.age}
            increase={() => increaseAge(index)}
            change={(event) => changeName(event, user.id)}
            remove={() => deletePerson(user.id)}
            id={user.id}
          >
            Hobby: {user.hobby}
          </Person>
        );
      })}
    </div>
  );
}

export default People;
