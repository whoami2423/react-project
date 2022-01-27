import {useState} from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import Layout from './components/Layout/Layout';
import People from './components/People/People';

import ToggleButton from './components/ToggleButton/ToggleButton';

import {Routes, Route, BrowserRouter} from 'react-router-dom';

function App() {
  const [users, setUsers] = useState([
    { name: "Mike", age: 30, hobby: "play chess", id: 1 },
    { name: "John", age: 20, hobby: "play football", id: 2 },
    { name: "Sam", age: 15, hobby: "play basketball", id: 3 },
  ]);

  const [isShow, setIsShow] = useState(true);

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

  const deletePerson = (id) => {

    setUsers(
      users.filter(user => user.id !== id)
    );

  };

  return (
    <div className="App">
        <BrowserRouter>
          <Layout>
              <Routes>
                <Route path="/modal" element={<h1>Modal will be here</h1>} />
                <Route path="/" element={<h1>Home</h1>} />

                {/* <Route path="/">
                  <ToggleButton isShow={isShow} setIsShow={setIsShow} />
                  <Counter data={users} />

                  {isShow ? (
                    <People
                      users={users}
                      increaseAge={increaseAge}
                      changeName={changeName}
                      deletePerson={deletePerson}
                    />
                  ) : null}
                </Route> */}
              </Routes>
          </Layout>
        </BrowserRouter>
    </div>
  );
}

export default App;
