import { Box, Text } from "@chakra-ui/react";


const Earnings = () => {


    return (
        <Box w='289px' h='394px' border='1px solid white'>
            <Text w='118px' h='30px' fontFamily='Urbanist' fontWeight='800' fontSize='14px'
            >Earnings</Text>


            <Box h='344px' w='289px' mt='20px'
                boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'
                border='1px solid white'
            >

                <Text w='124px' h='10px' ml='83px' mt='32px' fontFamily='Urbanist' border='1px solid white'
                    fontWeight='500' fontSize='10px' justifyContent='center' display='flex' alignItems='center'
                    color='#A5A5A5'
                >Saved this month</Text>

                <Text w='167px' h='43px' fontSize='40px' fontWeight='800' fontFamily='Urbanist'
                    ml='61px' justifyContent='center' display='flex' alignItems='center' mt='8px'
                >$12,281</Text>

                <Text w='120px' h='22px' ml='83px' mt='8px' fontFamily='Urbanist' border='1px solid white'
                    fontWeight='500' fontSize='10px' justifyContent='center' display='flex' alignItems='center'
                    color='#A5A5A5' textAlign='center' lineHeight='91.5%'
                >Your payment will be updated by the system.</Text>


            </Box>
        </Box>
    )
}

export default Earnings;