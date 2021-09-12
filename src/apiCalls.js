import jsonp from "jsonp";

export const fetchAirlineData = async (setStateFunc) => {
  const url = "https://kayak.com/h/mobileapis/directory/airlines/homework";

  const response = await jsonp(url, { param: "jsonp" }, (err, data) => {
    if (err) {
      console.error(err.message);
    } else {
      setStateFunc(data);
    }
  });

  return response;
};
