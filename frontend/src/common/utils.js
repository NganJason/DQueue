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
}
