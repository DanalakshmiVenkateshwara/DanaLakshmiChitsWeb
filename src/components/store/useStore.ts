import { useDispatch, useSelector } from "react-redux";

const useStore = () => {
  const dispatch = useDispatch();
  const State: any = useSelector((state) => state);
  const Store = {
    update: (type: any, payload: any) => {
      type !== undefined && dispatch({ type, payload });
    },
    toggle: (type: any, payload: any) => {
      type !== undefined && dispatch({ type, payload });
    },
    append: (type: any, payload: any) => {
      type !== undefined && dispatch({ type, payload });
    },
    reset: (type: any) => {
      type !== undefined && dispatch({ type });
    },
    resetAll: () => {
      Object.keys(State).forEach((sliceName) => {
        dispatch({ type: `${sliceName}/reset` });
      });
    },
  };

  return { State, Store };
};

export default useStore;
