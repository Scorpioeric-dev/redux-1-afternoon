import { createStore } from "redux";
//importing createstore from redux library

//setting init state to empty obj
const initialState = {
  name: "",
  category: "",
  authorFirst: "",
  authorLast: "",
  ingredients: [],
  instructions: [],
  recipes: []
};

export const ADD_RECIPE = "ADD_RECIPE";
export const ADD_INSTRUCTION = "ADD_INSTRUCTION";
export const ADD_INGREDIENT = "ADD_INGREDIENTS";
export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";
export const UPDATE_AUTHOR_FIRST = "UPDATE_AUTHOR_FIRST";
export const UPDATE_AUTHOR_LAST = "UPDATE_AUTHOR_LAST";
export const REMOVE_RECIPE = 'REMOVE_RECIPE'
//creating reducer function ? Study this more (short of it the motor for redux with its particular method type)
function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_NAME:
      return { ...state, name: payload };

    case UPDATE_CATEGORY:
      return { ...state, category: payload };

    case UPDATE_AUTHOR_FIRST:
      return { ...state, authorFirst: payload };

    case UPDATE_AUTHOR_LAST:
      return { ...state, authorLast: payload };

    case ADD_INGREDIENT:
      const newIngredients = [...state.ingredients,payload];
      //this case is using the values in initial state to create a new recipe and won't rely on a payloaad
      return { ...state, ingredients: newIngredients,payload };

    case ADD_INSTRUCTION:
      const newInstructions = [...state.instructions, payload];
      return { ...state, instructions: newInstructions,payload };

    case ADD_RECIPE:
      //why do I have 2 objects  here.
      const {
        name,
        category,
        authorfirst,
        authorLast,
        ingredients,
        instructions
      } = state;
      const recipe = {
        name,
        category,
        authorfirst,
        authorLast,
        ingredients,
        instructions
      };
      const newRecipes = [...state.recipes, recipe];
      return { ...state, recipes: newRecipes };

      case REMOVE_RECIPE:
        let removeRecipe = [...state.recipes]
        removeRecipe.splice(action.payload,1)
        return Object.assign({},state,{recipes:removeRecipe})

    default:
      return state;
  }
}

export default createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
