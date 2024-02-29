import { appConstants } from "../constants";
import { v4 } from "uuid";

const initialState = {
	darkMode: false,
	notifications: [],
};

export function app(state = initialState, action) {
	switch (action.type) {
		case appConstants.TOGGLE_DARK_MODE:
			return { ...state, darkMode: !state.darkMode };

		case appConstants.ADD_NOTIFICATION:
			action.payload.id = v4();
			return { ...state, notifications: [...state.notifications, action.payload] };

		case appConstants.REMOVE_NOTIFICATION:
			return {
				...state,
				notifications: state.notifications.filter((notification) => notification.id !== action.payload),
			};

		case appConstants.RE_INITIALIZE:
			return initialState;

		default:
			return state;
	}
}
