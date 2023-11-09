import { createStore } from 'redux';
import rootReducer from './reducer';

const stateInitSave = (state) => {
    return {
        comments: state.comments,
        posts: state.posts,
        users: state.users,
    };
};

const saveState = () => {
    try {
        // Get the current Redux state
        const state = store.getState();

        // Save state to localStorage
        localStorage.setItem('TranThienThanh_2023', JSON.stringify(stateInitSave(state)));

        return true;
    } catch (error) {
        return false;
    }
};

// Create the Redux store using the rootReducer
const store = createStore(rootReducer);

// Save the initial state to localStorage
saveState();

// Subscribe to store updates and save the state whenever it changes
store.subscribe(() => {
    saveState();
});

export default store;
