import { GET_BAR_DATA, GET_MONTHLY_DATA, GET_SMALL_DATA, LOADING } from "./actiontypes";
  
  

  export const getmonthlydata = (data) => ({
    type: GET_MONTHLY_DATA,
    payload: data
  });


  export const getsmalldata = (data) => ({
    type: GET_SMALL_DATA,
    payload: data
  });



  export const setloading = (data) => ({
    type: LOADING,
    payload: data
  });


  export const getbardata = (data) => ({
    type: GET_BAR_DATA,
    payload: data
  });



    export const fetchmonthlydata = () => (dispatch) => {

      dispatch(setloading(true));
      fetch(`https://corp-assignment.onrender.com/getmonthlydata`)
        .then((res) => res.json())
        .then((res)=> {
          dispatch(getmonthlydata(res.data));
          dispatch(setloading(false));
      })
        .catch((err) => {
          console.log(err+" "+"Error in fetchmonthlydata")
        });
      };


      export const fetchsmalllinechartdata = () => (dispatch) => {

        dispatch(setloading(true));
        fetch(`https://corp-assignment.onrender.com/smalllinedata`)
          .then((res) => res.json())
          .then((res)=> {
            dispatch(getsmalldata(res.data));
            dispatch(setloading(false));
        })
          .catch((err) => {
            console.log(err+" "+"Error in fetchmonthlydata")
          });
        };




        export const fetchbardata = () => (dispatch) => {

          dispatch(setloading(true));
          fetch(`https://corp-assignment.onrender.com/bardata`)
            .then((res) => res.json())
            .then((res)=> {
              dispatch(getbardata(res.data));
              dispatch(setloading(false));
          })
            .catch((err) => {
              console.log(err+" "+"Error in fetchmonthlydata")
            });
          };