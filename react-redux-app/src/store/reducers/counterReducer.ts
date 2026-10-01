import { INCREMENT, DECREMENT, RESET } from "../actions/counterActions";

interface CounterState {
    value: number;
}

// Initial state for the counter reducer
const initialState: CounterState = {
    value: 0,
};

// a reducer function that handles the counter actions and updates the state accordingly
export const counterReducer = (state = initialState, action: any): CounterState => {
    switch (action.type) {
        case INCREMENT:
            return { value: state.value + 1 };
        case DECREMENT:
            return { value: state.value - 1 };
        case RESET:
            return { value: 0 };
        default:
            return state;
    }
};