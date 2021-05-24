import { Accounts } from 'meteor/accounts-base';
 
Accounts.ui.config({
   passwordSignupFields: 'USERNAME_ONLY'
});

// Support for playing D&D: Roll 3d6 for dexterity.

