import { SET_MENU, SET_MENU_BY_SERVICEPROVIDER } from "../actions/menu";

const initialState = {
  menu: [],
  menu_by_serviceprovider: [{
    category:{
        items:[]
      }
  }
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MENU:
      return {
        menu: action.menu,
        menu_by_serviceprovider: []
      };
    case SET_MENU:
      menu_by_serviceprovider = action.menu;
      console.log("from the reducer :",menu_by_serviceprovider);
      return {
        menu: [],
        menu_by_serviceprovider: action.menu,
      };
  }
  return state;
};
