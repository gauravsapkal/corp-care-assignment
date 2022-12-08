import { GET_MONTHLY_DATA } from "./actiontypes";
  
  

  export const getmonthlydata = (data) => ({
    type: GET_MONTHLY_DATA,
    payload: data
  });


    export const fetchmonthlydata = () => (dispatch) => {

      fetch(``)
        .then((res) => res.json())
        .then((res)=> {
          dispatch(getmonthlydata(res))
      })
        .catch((err) => {
          console.log(err+" "+"Error in fetchmonthlydata")
        });
      };