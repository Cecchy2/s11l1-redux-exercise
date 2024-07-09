const initialState = {
  favoriteCompanies: [],
  data: null,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FAVORITE_COMPANIES":
      return {
        ...state,
        favoriteCompanies: state.favoriteCompanies.includes(action.payload)
          ? state.favoriteCompanies.filter((company) => company !== action.payload)
          : [...state.favoriteCompanies, action.payload],
      };
    case "SAVE_DATA":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default mainReducer;
