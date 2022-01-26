import {useState} from 'react';
import './App.css';

import Person from './components/Person/Person';

function App() {
  const [users, setUsers] = useState([
    { name: "Mike", age: 30, hobby: "play chess", id: 1 },
    { name: "John", age: 20, hobby: "play football", id: 2 },
    { name: "Sam", age: 15, hobby: "play basketball", id: 3 },
  ]);

  const changeName = (event, id) => {

    setUsers(
      users.map((user) => {
        const copyUser = { ...user };
        if (user.id === id) {
          copyUser.name = event.target.value;
        }
        return copyUser;
      })
    );


  };

  const increaseAge = (index) => {
    setUsers((users) => {
      const copyUsers = [...users];
      let user = { ...copyUsers[index]};
      user.age++;
      copyUsers[index] = user;
      return copyUsers;
    })
  };

  return (
    <div className="App">
      {/* <button onClick={changeName}>Change name</button> */}
      <div className="people">
        {
          users.map((user, index) => {
            return (
              <Person
                key={user.id}
                name={user.name}
                age={user.age}
                increase={() => increaseAge(index)}
                change={(event) => changeName(event, user.id)}
              >
                Hobby: {user.hobby}
              </Person>
            );
          })
        }

      </div>
    </div>
  );
}

export default App;
