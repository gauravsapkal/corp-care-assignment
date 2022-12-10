import { Box, Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Leftbar from "../components/Leftbar";
import Rightsection from "../components/Rightsection";


import { fetchmonthlydata, fetchsmalllinechartdata } from "../Redux/action";


const Home = ()=>{
    

    const dispatch = useDispatch();

    const { monthlydata, isloading } = useSelector((state) => state);

    useEffect(()=>{
        dispatch(fetchmonthlydata());
        dispatch(fetchsmalllinechartdata());
    },[])
    

    // const [ monthlydata, setMonthlydata ] = useState([]);


    

    return(
        <Flex w='1440px' h='1024px' border='2px solid black' m='auto' position='relative' bg='#ffffff'
        >
            
            <Leftbar/>
            <Rightsection/>
            
        </Flex>
    )
}

export default Home;