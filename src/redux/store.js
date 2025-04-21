import { createStore } from "redux";
const defaultState = {
  isLoggedIn: false,
  userToken: "",
  userId: "",
  userName: "",
  userContact: null,
  userSince: "",
  city: "Dehradun",
  isAdmin: false,
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
    let obj = {
      ...state,
      city: action.city.toLowerCase().trim(),
    };
    localStorage.setItem("state", JSON.stringify(obj));

    return { ...state, city: action.city.toLowerCase().trim() };
  }

  if (action.type === "reload") {
    let obj = {
      ...action.data,
      city: "dehradun",
    };
    localStorage.setItem("state", JSON.stringify(obj));

    return {
      ...action.data,
      city: "dehradun",
    };
  }

  return state;
};
const store = createStore(storeReducer);

export default store;
