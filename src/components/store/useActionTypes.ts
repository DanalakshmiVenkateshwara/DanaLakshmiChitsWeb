/* eslint-disable */
import { MutableRefObject, useRef } from "react";
var actionTypesRef: MutableRefObject<{}> | null | any = null;
export const useActionTypes = () => {
  if (!actionTypesRef) {
    actionTypesRef = useRef({});
  }

  const setActionTypes = (newActionTypes: any) => {
    actionTypesRef.current = newActionTypes;
  };

  const getActionTypes = () => {
    return actionTypesRef.current;
  };

  return { setActionTypes, getActionTypes };
};
/* eslint-enable */
