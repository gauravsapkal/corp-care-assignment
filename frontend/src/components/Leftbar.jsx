
import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react";
import logo from "../photos/logo.png";
import overview from "../photos/overview.png";
import product from "../photos/product.png";
import analytics from "../photos/analytics.png";
import schedule from "../photos/schedule.png";
import payout from "../photos/payout.png";
import statements from "../photos/statements.png";
import help from "../photos/help.png";
import community from "../photos/community.png";
import settings from "../photos/settings.png";
import logout from "../photos/logout.png";

const Leftbar = () => {
    
    

    // const [ monthlydata, setMonthlydata ] = useState([]);


    return(
        <Box w='247px' h='1024px' borderRight='1px solid black'>
            
            <Box w='149px' h='799px' border='2px solid white' ml='50px' mt='84px'>
                <Image src={logo} w='125px' h='44px'/>

                <Box w='149px' h='686px' border='3px solid white' mt='68px'
                >

                    <Box w='161px' h='314px' border='1px solid white' >
                            <Flex alignItems='center' h='19px' mb='40px'>
                                <Image src={overview} w='19px' h='19px' />
                                <Box w='117px' h='17px' ml='25px'
                                >
                                    <Text fontFamily='Urbanist' fontWeight='800'
                                    >Overview</Text>
                                </Box>
                            </Flex>


                            <Flex alignItems='center' h='19px' mb='40px'>
                                <Image src={product} w='19px' h='19px' />
                                <Box w='117px' h='17px' ml='25px'
                                >
                                    <Text fontFamily='Urbanist' fontWeight='800' color='gray'
                                    >Products</Text>
                                </Box>
                            </Flex>


                            <Flex alignItems='center' h='19px' mb='40px'>
                                <Image src={analytics} w='19px' h='19px' />
                                <Box w='117px' h='17px' ml='25px'
                                >
                                    <Text fontFamily='Urbanist' fontWeight='800' color='gray'
                                    >Analytics</Text>
                                </Box>
                            </Flex>


                            <Flex alignItems='center' h='19px' mb='40px'>
                                <Image src={schedule} w='19px' h='19px' />
                                <Box w='117px' h='17px' ml='25px'
                                >
                                    <Text fontFamily='Urbanist' fontWeight='800' color='gray'
                                    >Schedule</Text>
                                </Box>
                            </Flex>



                            <Flex alignItems='center' h='19px' mb='40px'>
                                <Image src={payout} w='19px' h='19px' />
                                <Box w='117px' h='17px' ml='25px'
                                >
                                    <Text fontFamily='Urbanist' fontWeight='800' color='gray'
                                    >Payout</Text>
                                </Box>
                            </Flex>


                            <Flex alignItems='center' h='19px'>
                                <Image src={statements} w='19px' h='19px' />
                                <Box w='117px' h='17px' ml='25px'
                                >
                                    <Text fontFamily='Urbanist' fontWeight='800' color='gray'
                                    >Statements</Text>
                                </Box>
                            </Flex>


                            
                    </Box>

                    <Box h='122px' border='1px solid white'>
                        <Divider mt='61px' borderColor='black'/>
                    </Box>


                    <Box h='196px' w='144px' border='2px solid white'>

                            <Flex alignItems='center' h='19px' mb='40px'>
                                <Image src={help} w='19px' h='19px' />
                                <Box w='117px' h='17px' ml='25px'
                                >
                                    <Text fontFamily='Urbanist' fontWeight='800' color='gray'
                                    >Help</Text>
                                </Box>
                            </Flex>


                            <Flex alignItems='center' h='19px' mb='40px'>
                                <Image src={community} w='19px' h='19px' />
                                <Box w='117px' h='17px' ml='25px'
                                >
                                    <Text fontFamily='Urbanist' fontWeight='800' color='gray'
                                    >Community</Text>
                                </Box>
                            </Flex>


                            <Flex alignItems='center' h='19px' mb='40px'>
                                <Image src={settings} w='19px' h='19px' />
                                <Box w='117px' h='17px' ml='25px'
                                >
                                    <Text fontFamily='Urbanist' fontWeight='800' color='gray'
                                    >Settings</Text>
                                </Box>
                            </Flex>

                            <Flex alignItems='center' h='19px'>
                                <Image src={logout} w='19px' h='19px' />
                                <Box w='117px' h='17px' ml='25px'
                                >
                                    <Text fontFamily='Urbanist' fontWeight='800' color='gray'
                                    >Logout</Text>
                                </Box>
                            </Flex>

                            
                    </Box>

                </Box>
            </Box>



        </Box>
    )
}

export default Leftbar;