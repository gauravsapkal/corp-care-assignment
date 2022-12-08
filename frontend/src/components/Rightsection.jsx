
import { Box, Divider, Flex, Image, Input, Text } from "@chakra-ui/react";
import Analyticsandreminder from "./Analyticsandreminder";
import Earnings from "./Earnings";
import Navbar from "./Navbar";
import Recenttransictions from "./Recenttransictions";
import Transfer from "./Transfer";

const Rightsection = () => {

    // const [ monthlydata, setMonthlydata ] = useState([]);

    return (
        <Box>

            <Navbar />

            <Divider orientation='vertical' position='absolute' borderColor={'#b7b7b7'} h='1024px'
                top='0' left='995px'
            />


            <Flex w='1062px' h='394px' position='absolute' left='292px' top='174px'
                border='1px solid white' justifyContent='space-between'
            >

                <Analyticsandreminder />

                <Earnings />

            </Flex>

            <Recenttransictions />

            <Transfer/>

        </Box>
    )
}

export default Rightsection;