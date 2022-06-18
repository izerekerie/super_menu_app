import { SET_MENU, SET_MENU_BY_SERVICEPROVIDER } from "../actions/menu";

const initialState = {
  menu: [],
  menu_by_serviceprovider: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MENU:
      return {
        menu: action.menu,
        menu_by_serviceprovider: []
      };
    case SET_MENU_BY_SERVICEPROVIDER:
      return {
        menu: [],
        menu_by_serviceprovider: action.menu,
      };
  }
  return state;
};
