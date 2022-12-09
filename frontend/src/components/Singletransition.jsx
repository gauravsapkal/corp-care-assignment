import { Box, Flex, Text } from "@chakra-ui/react";
import jiko from '../photos/jiko.png'

const Singletransition = () => {



    return (
        <Flex justifyContent='space-between' gap='12px' w='272px' h='55px'
        
        >
            <Box w='55px' h='55px' bg='#F0F0F0' borderRadius='10px'
                background={`url(${jiko})`}
            >
            </Box>

            <Flex alignItems='center' gap='44px' w='205px' h='55px'>

                <Box w='116px' h='38px' >
                    <Text w='116px' h='19px' fontFamily='Urbanist' fontWeight='800'
                        fontSize='14px' display='flex' alignItems='center' color='#000000'

                    >Jiko Mobile App</Text>

                    <Text w='116px' h='19px' fontFamily='Urbanist' fontWeight='500'
                        fontSize='10px' color='#BDBDBD' display='flex' alignItems='center'
                    >2 Nov 2021 4:45 AM</Text>
                </Box>


                <Text h='19px' w='37px' fontFamily='Urbanist' fontWeight='800' fontSize='14px'
                    display='flex' alignItems='center' color='#000000'
                >$15</Text>
            </Flex>

        </Flex>

    )
}


export default Singletransition;