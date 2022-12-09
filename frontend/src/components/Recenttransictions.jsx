import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Singletransition from "./Singletransition";


const Recenttransictions = ()=>{


    return(
        <Flex w='655px' h='394px' position='absolute' left='292px' top='529px'
             justifyContent='space-between' 
            >
                <Box w='338px' h='394px' border='1px solid white'>

                    <Text w='141px' h='30px' fontFamily='Urbanist' fontWeight='800' fontSize='14px'
                    >Recent Transactions</Text>

                    <Box w='338px' h='344px' mt='20px'
                        boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'
                        border='1px solid white'
                    >
                        <Flex flexDirection='column' gap='18px' alignItems='center' w='272px' h='274px'
                        justifyContent='center' ml='33px' mt='35px' mr='33px'
                        >

                            <Singletransition/>
                            <Singletransition/>
                            <Singletransition/>
                            <Singletransition/>

                        </Flex>

                        

                    </Box>

                </Box>


                <Box w='289px' h='394px' border='1px solid white'>

                    <Text w='141px' h='30px' fontFamily='Urbanist' fontWeight='800' fontSize='14px'
                    >Recent Transactions</Text>

                    <Box w='289px' h='344' mt='20px' border='1px solid white'
                        boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'
                    >

                        <Text w='124px' h='10px' ml='83px' mt='49px' fontFamily='Urbanist' border='1px solid white'
                        fontWeight='500' fontSize='10px' justifyContent='center' display='flex' alignItems='center'
                        color='#A5A5A5'
                        >Accounts reached</Text>

                        <Text w='167px' h='56px' fontSize='48px' fontWeight='800' fontFamily='Urbanist'
                        ml='61px' justifyContent='center' display='flex' alignItems='center' mt='6px'
                        >11,756</Text>
                    </Box>

                </Box>



            </Flex>
    )
}


export default Recenttransictions;