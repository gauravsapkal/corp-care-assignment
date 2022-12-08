import { GET_MONTHLY_DATA } from "./actiontypes";
  
  
  const initState = {
    monthlydata: []
  }
  
  const reducer = (state = initState , { type, payload })=> {
    switch (type) {
  
      case GET_MONTHLY_DATA:{
  
       return { ...state, monthlydata: payload } 
      }
  
      
      default: {
        return state;
      }
    }
  }
  
  export default reducer;