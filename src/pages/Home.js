import { useState } from "react";
import ToggleButton from "../components/ToggleButton/ToggleButton";
import Counter from "../components/Counter/Counter";
import People from "../components/People/People";

function Home() {
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
      let user = { ...copyUsers[index] };
      user.age++;
      copyUsers[index] = user;
      return copyUsers;
    });
  };

  const deletePerson = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <>
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
    </>
  );
}

export default Home;
