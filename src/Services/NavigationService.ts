import { NavigateFunction } from "react-router-dom";

let globalNavigate: NavigateFunction;

export const setGlobalNavigate = (navigate: NavigateFunction) => {
  globalNavigate = navigate;
};

export const getGlobalNavigate = () => globalNavigate;
