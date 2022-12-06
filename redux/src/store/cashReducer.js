const defaultState = {
    cash: 0,
}

export const ADD_CASH = "ADD_CASH"
export const ASYNC_ADD_CASH = "ASYNC_ADD_CASH"
export const GET_CASH = "GET_CASH"

export const cashReducer = (state = defaultState, action) => {
    switch (action.type) {

        case ADD_CASH:
            return { ...state, cash: state.cash + action.payload }

        case GET_CASH:
            return { ...state, cash: state.cash - action.payload }

        default:
            return state
    }
}

export const addCash = () => ({ type: ADD_CASH })
export const asyncAddCash = () => ({ type: ASYNC_ADD_CASH })
export const getCash = () => ({ type: GET_CASH })