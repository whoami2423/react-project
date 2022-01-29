import { useState } from "react";
import ToggleButton from "../components/ToggleButton/ToggleButton";
import Counter from "../components/Counter/Counter";
import People from "../components/People/People";
import { useSelector, useDispatch } from "react-redux";

function Home() {
  const users = useSelector(state => state.people);

  const dispatch = useDispatch();

  const [isShow, setIsShow] = useState(true);

  const changeName = (event, id) => {
    const value = event.target.value;
    dispatch({type: 'CHANGE_NAME', payload: {value, id} });
  };

  const increaseAge = (index) => {
    dispatch({
      type: "INCREASE_AGE",
      payload: index,
    });
  };

  const deletePerson = (id) => {
    dispatch({
      type: "DELETE_USER",
      payload: id
    })
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
