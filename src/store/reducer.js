const initialState = {
  people: [
    { name: "Mike", age: 30, hobby: "play chess", id: 1 },
    { name: "John", age: 20, hobby: "play football", id: 2 },
    { name: "Sam", age: 15, hobby: "play basketball", id: 3 },
  ],
};


const reducer = (state = initialState, action) => {

  switch (action.type) {
    case "CHANGE_NAME":
      const people = state.people.map((user) => {
        const copyUser = { ...user };
        if (user.id === action.payload.id) {
          copyUser.name = action.payload.value;
        }
        return copyUser;
      });
      return {
        people,
      };

    case "INCREASE_AGE":
      const copyUsers = [...state.people];
      let user = { ...copyUsers[action.payload] };
      user.age++;
      copyUsers[action.payload] = user;

      return {
        people: copyUsers,
      };

    case "DELETE_USER":
      return {
        people: state.people.filter((user) => user.id !== action.payload)
      };

    default:
      return state;
  }

}

export default reducer;
