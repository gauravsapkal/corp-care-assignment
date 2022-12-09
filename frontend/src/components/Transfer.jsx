import { Box, Button, Divider, Flex, Image, Text } from "@chakra-ui/react";
import people from '../photos/people.png'
import dp1 from '../photos/dp1.png'
import dp2 from '../photos/dp2.png'
import dp3 from '../photos/dp3.png'
import dp4 from '../photos/dp4.png'
import dp5 from '../photos/dp5.png'
import dp6 from '../photos/dp6.png'

const Transfer = () => {


    return (
        <Box w='291px' h='301px' position='absolute' left='1063px' top='622px'
            border='1px solid white' bg='white'
        >
            <Text w='141px' h='30px' fontFamily='Urbanist' fontWeight='800' fontSize='14px'
            >Recent Transactions</Text>


            <Box h='251px' w='289px' mt='20px'
                boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px' position='relative'
            >
                <Flex w='242px' h='22px' position='absolute' top='26px' left='23px' gap='6px' >
                    <Image src={people} w='13px' h='13px' />

                    <Text w='226px' h='22px' fontFamily='Urbanist' fontWeight='500' fontSize='10px'
                        color='#A5A5A5'
                    >Transfer to your team.</Text>
                </Flex>

                <Flex justifyContent='space-between' alignItems='center' gap='5px' position='absolute'
                    w='245px' h='43px' left='22px' top='71px'
                >

                    <Text h='43px' fontFamily='Urbanist' fontWeight='800' fontSize='40px'
                        display='flex' alignItems='center' w='123px'
                    ><span style={{ color: '#ACACAC', marginRight: '5px' }}>$</span><span style={{ color: 'black' }}>450</span></Text>

                    <Button w='113px' h='39px' color='white' bg='#000AFF'
                        _hover={{ bg: '#000AFF' }}
                        _active={{ bg: '#000AFF' }}
                    >Transfer</Button>

                </Flex>


                <Divider w='244px' left='22px' top='157px' border='1px solid #E6E6E6' position='absolute'

                />

                <Flex position='absolute' w='150px' h='30px' left='22px' top='180px' flexDirection='row'

                >

                    <Image src={dp1} w='30px' h='30px'/>
                    <Image src={dp2} w='30px' h='30px' ml='-6px'/>
                    <Image src={dp3} w='30px' h='30px' ml='-6px'/>
                    <Image src={dp4} w='30px' h='30px' ml='-6px'/>
                    <Image src={dp5} w='30px' h='30px' ml='-6px'/>
                    <Image src={dp6} w='30px' h='30px' ml='-6px'/>


                </Flex>

            </Box>
        </Box>

    )
}

export default Transfer;