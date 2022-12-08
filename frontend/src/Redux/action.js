import { GET_MONTHLY_DATA, LOADING } from "./actiontypes";
  
  

  export const getmonthlydata = (data) => ({
    type: GET_MONTHLY_DATA,
    payload: data
  });


  export const setloading = (data) => ({
    type: LOADING,
    payload: data
  });




    export const fetchmonthlydata = () => (dispatch) => {

      dispatch(setloading(true));

      fetch(`https://corp-assignment.onrender.com/getmonthlydata`)
        .then((res) => res.json())
        .then((res)=> {
          dispatch(getmonthlydata(res));
          dispatch(setloading(false));
      })
        .catch((err) => {
          console.log(err+" "+"Error in fetchmonthlydata")
        });
      };