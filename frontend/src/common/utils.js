export const initObjFromArr = (arr) => {
  var init_obj = {};

  arr.map((obj_name) => {
    init_obj[obj_name] = "";
  });

  return init_obj;
};
