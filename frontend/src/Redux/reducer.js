import { GET_MONTHLY_DATA, LOADING } from "./actiontypes";
  
  
  const initState = {
    monthlydata: [],
    isloading: false
  }
  
  const reducer = (state = initState , { type, payload })=> {
    switch (type) {
  
      case GET_MONTHLY_DATA:{
  
       return { ...state, monthlydata: payload } 
      }

      case LOADING:{
  
        return { ...state, isloading: payload } 
       }
  
      
      default: {
        return state;
      }
    }
  }
  
  export default reducer;