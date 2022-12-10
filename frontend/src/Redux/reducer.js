import { GET_BAR_DATA, GET_MONTHLY_DATA, GET_SMALL_DATA, LOADING } from "./actiontypes";
  
  
  const initState = {
    monthlydata: [],
    smalllinedata:[],
    bardata:[],
    isloading: false
  }
  
  const reducer = (state = initState , { type, payload })=> {
    switch (type) {
  
      case GET_MONTHLY_DATA:{
  
       return { ...state, monthlydata: payload } 
      }

      case GET_SMALL_DATA:{
  
        return { ...state, smalllinedata: payload } 
       }


       case GET_BAR_DATA:{
  
        return { ...state, bardata: payload } 
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