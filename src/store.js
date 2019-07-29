import { createStore } from "redux";
//importing createstore from redux library

//setting init state to empty obj
const initialState = {
  name: "",
  category: "",
  authorFirst: "",
  authorLast: "",
  ingredients: [],
  instructions:[],
  recipes: []
};



export const ADD_RECIPE = 'ADD_RECIPE'
export const ADD_INSTRUCTION = "ADD_INSTRUCTION"
export const ADD_INGREDIENT = "ADD_INGREDIENTS";
export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";
export const UPDATE_AUTHOR_FIRST = "UPDATE_AUTHOR_FIRST";
export const UPDATE_AUTHOR_LAST = "UPDATE_AUTHOR_FIRST";
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
      const newIngredients = [...state.ingredients, payload]
      return { ...state, ingredients: newIngredients };

      case ADD_INSTRUCTION:
        const newInstructions = [...state.instructions,payload]
        return{...state,instructions:newInstructions}

        case ADD_RECIPE:
          const newRecipes = [...state.recipes,payload]
          return{...state,recipes:newRecipes}

    default:
      return state;
  }
}

export default createStore(reducer);
