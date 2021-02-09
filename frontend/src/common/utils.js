import React from "react";
import ApiService from "../common/services/api.service";
import { setLogOut } from "../actions/authActions";

export function initObjFromArr(arr) {
  const init_obj = {};
  arr.map((obj_name) => (init_obj[obj_name] = ""));

  return init_obj;
}

export function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = React.useState(
    getWindowDimensions()
  );

  React.useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return windowDimensions;
}

<<<<<<< HEAD
export async function isAuth() {
  try {
    const { data } = await ApiService.get("/user/checkAuth");

    if (data.success === true) {
      return true;
    }

    return false;
  } catch (error) {
    return false;
  }
}

export async function setAuth(redirect = false, history = null) {
  const isLoggedIn = await isAuth();

  if (!isLoggedIn) {
    setLogOut();

    if (redirect) {
      history.push("/sign/in");
    }
  }
=======
export const mobileThreshold = 700;

export function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
>>>>>>> 0f12cbd1e46f4a574020ad232169f933e9511bbd
}
