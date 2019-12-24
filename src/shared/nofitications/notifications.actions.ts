import * as Types from './notifications.constant';

export const actionToggleNotifications = (payload: any) => ({
	type: Types.ACTION_TOGGLE_NOTIFICATIONS,
	payload
});
