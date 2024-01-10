export const getData = function (page, limit, data) {
  let array = [];
  console.log(data);
  for (let i = (page - 1) * limit; i < page * limit; i++) {
    array.push(data[i]);
  }
  return array;
};
export const getLengthData = function (data) {
  return data.length;
};
