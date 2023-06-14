
import { useTreble } from 'treble-gsm';

interface IAppStore {
    userInformation: {
        UserId: number,
        UserName: string
    }
}

//Creates an extendable Store State interface that is used by the useTreble hook.
interface IAppStoreItems extends IAppStore {
    [key: string]: any;
}

//Type used to type cast useTreble hook
export default useTreble<IAppStoreItems>; //type TAppStoreHook = TUseTreble<IAppStoreItems>;