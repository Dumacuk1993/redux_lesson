const defaultState = {
  customers: []
}

const ADD_CUSTOMER = "ADD_CUSTOMER";
const REMOVE_CUSTOMERS = "REMOVE_CUSTOMERS";

export const customersReducer = (state = defaultState, action) => {
    switch (action.type) {
      case ADD_CUSTOMER:
        return { ...state, customers: [...state.customers, action.payload]}
      case REMOVE_CUSTOMERS:
        return {...state, customers: state.customers.filter(customer => customer.id !== action.payload) }  
      default:
        return state
    }
}
  
export const addCustomeAction = (payload) => ({ type: ADD_CUSTOMER, payload })
export const removeCustomerAction = (payload) => ({type: REMOVE_CUSTOMERS, payload})