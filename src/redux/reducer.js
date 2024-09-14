const initialState = {
  users: [
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      role: "admin",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "janesmith@example.com",
      role: "moderator",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bobjohnson@example.com",
      role: "user",
    },
    {
      id: 4,
      name: "Alice Brown",
      email: "alicebrown@example.com",
      role: "user",
    },
    {
      id: 5,
      name: "Mike Davis",
      email: "mikedavis@example.com",
      role: "admin",
    },
  ],
  filter: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FILTER":
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

export default reducer;
