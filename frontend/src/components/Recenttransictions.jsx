import { Box, Flex, Text } from "@chakra-ui/react";


const Recenttransictions = ()=>{


    return(
        <Flex w='655px' h='394px' position='absolute' left='292px' top='529px'
                border='1px solid white' justifyContent='space-between'
            >
                <Box w='338px' h='394px' border='3px solid green'>

                    <Text w='141px' h='30px' fontFamily='Urbanist' fontWeight='800' fontSize='14px'
                    >Recent Transactions</Text>

                    <Box w='338px' h='344px' mt='20px'
                        boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'
                    >

                    </Box>

                </Box>


                <Box w='289px' h='394px' border='3px solid red'>

                    <Text w='141px' h='30px' fontFamily='Urbanist' fontWeight='800' fontSize='14px'
                    >Recent Transactions</Text>

                    <Box w='289px' h='344' mt='20px'
                        boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'
                    ></Box>

                </Box>



            </Flex>
    )
}


export default Recenttransictions;