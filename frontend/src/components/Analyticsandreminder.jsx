import { Box, Button, Flex, Image, Skeleton, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import figmalogo from '../photos/figmalogo.png'
import Linechart from "./Linechart";



const Analyticsandreminder = () => {

    const { monthlydata, isloading } = useSelector((state) => state);



    return (
        <Flex w='655px' h='319px' border='1px solid white' justifyContent='space-between'>

            <Box w='418px' h='319px' border='1px solid white'>

                <Text w='118px' h='30px' fontFamily='Urbanist' fontWeight='800' fontSize='14px'
                >Analytics</Text>

                <Box w='418px' h='269px' border='1px solid white' mt='20px'
                    boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'
                >

                    <Flex w='348px' h='18px' border='1px solid white' alignItems='center'
                        ml='32px' mt='25px' justifyContent='space-between'
                    >
                        <Button borderRadius='25px' w='73px' h='18px' bg='#525252' color='white'
                            fontSize='8px' _hover={{ bg: '#525252' }}
                            _active={{ bg: '#525252' }}
                            fontWeight='800'
                        >
                            Income <Text ml='5px' fontWeight='800'>{`↓`}</Text>
                        </Button>

                        <Flex alignItems='center'>
                            <Text w='49px' h='9px' fontWeight='500' fontSize='8px' color='#B1B1B1'

                            >Sort by</Text>

                            <Button borderRadius='25px' w='73px' h='18px' bg='white' color='black'
                                fontSize='8px' _hover={{ bg: 'white' }}
                                _active={{ bg: 'white' }}
                                boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'
                                fontWeight='800'
                            >
                                Month <Text ml='5px' fontWeight='800'>{`↓`}</Text>
                            </Button>
                        </Flex>
                    </Flex>

                </Box>

                {
                    isloading ? <Skeleton w='370px' h='180px' position='absolute' left='32px' top='122px'>
                    </Skeleton>
                        :
                        <Linechart />
                }



            </Box>

            <Box w='209px' h='319px' border='1px solid white'>
                <Text w='118px' h='30px' fontFamily='Urbanist' fontWeight='800' fontSize='14px'
                >Reminder</Text>


                <Box w='209px' h='269px' border='1px solid #0038ff' mt='20px' borderRadius='15px'
                    bg='#0038ff' position='relative'
                >
                    <Text fontWeight='800' fontStyle='Urbanist' color='#ffffff' w='148px' h='33px'
                        fontSize='14px' display='flex' alignItems='center' textAlign='center'
                        position='absolute' left='35px' top='20px'
                    >Agency Design Kit</Text>

                    <Image src={figmalogo} w='74px' h='74px' position='absolute'
                        top='59px' left='62px'
                    />

                    <Text fontWeight='800' fontStyle='Urbanist' color='#ffffff' w='148px' h='33px'
                        fontSize='14px' display='flex' alignItems='center' textAlign='center'
                        position='absolute' top='147px' left='25px'
                    >Will be published
                        Nov 25, 2022</Text>

                    <Button position='absolute' w='164px' h='39px' left='24px' top='199px'

                    >Set as Reminder</Button>

                </Box>

            </Box>
        </Flex>
    )
}

export default Analyticsandreminder;