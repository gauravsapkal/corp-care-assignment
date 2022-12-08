import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchmonthlydata } from "../Redux/action";


const Home = ()=>{
    

    const dispatch = useDispatch();

    const monthlydata = useSelector((state) => state.monthlydata);

    useEffect(()=>{
        // dispatch(fetchmonthlydata());
        
    },[])
    

    // const [ monthlydata, setMonthlydata ] = useState([]);


    

    return(
        <Box>
            Home page
            
        </Box>
    )
}

export default Home;