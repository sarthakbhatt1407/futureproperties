import { createStore } from "redux";
const defaultState = {
  isLoggedIn: false,
  userToken: "",
  userId: "",
  userName: "",
  userContact: null,
  userSince: "",
  city: "dehradun",
  isAdmin: "",
};

const storeReducer = (state = defaultState, action) => {
  if (action.type === "log in") {
    const user = action.user;
    const obj = {
      ...state,
      isLoggedIn: true,
      userToken: user.token,
      userId: user.id,
      userName: user.name,
      userContact: user.contact,
      userSince: user.userSince,
      city: action.city,
      isAdmin: user.isAdmin,
    };
    console.log(obj);

    localStorage.setItem("state", JSON.stringify(obj));
    return {
      ...state,
      isLoggedIn: true,
      userToken: user.token,
      userId: user.id,
      userName: user.name,
      userContact: user.contact,
      userSince: user.userSince,
      city: action.city,
      isAdmin: user.isAdmin,
    };
  }

  if (action.type === "logout") {
    localStorage.clear();
    return { ...defaultState };
  }
  if (action.type === "city") {
    return { ...state, city: action.city.toLowerCase().trim() };
  }

  if (action.type === "reload") {
    console.log(action.data);

    return {
      ...action.data,
    };
  }

  return state;
};
const store = createStore(storeReducer);

export default store;
