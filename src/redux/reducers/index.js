const initialState = {
  favoriteCompanies: [],
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
    default:
      return state;
  }
};

export default mainReducer;
