import { createStore, useTreble } from 'treble-gsm';

const appStore = createStore(
    [
        {
            action: 'updateUserInformation',
            state: {
                userInformation: {
                    UserId: 0,
                    UserName: ""
                }
            },
            features: {
                persist: true
            }
        }
    ]
);

export default appStore;
