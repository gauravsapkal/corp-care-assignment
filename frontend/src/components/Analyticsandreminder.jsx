import { Box, Flex, Skeleton, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const Analyticsandreminder = () => {

    const { monthlydata, isloading } = useSelector((state) => state);



    return (
        <Flex w='655px' h='319px' border='1px solid white' justifyContent='space-between'>


            {
                isloading ? <Skeleton w='418px' h='319px'>
                </Skeleton>
                    :
                    <Box w='418px' h='319px' border='1px solid red'>

                        <Text w='118px' h='30px' fontFamily='Urbanist' fontWeight='800' fontSize='14px'
                        >Analytics</Text>

                        <Box w='418px' h='269px' border='1px solid white' mt='20px'
                            boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'
                        >

                        </Box>

                    </Box>
            }

            <Box w='209px' h='319px' border='1px solid white'>
                <Text w='118px' h='30px' fontFamily='Urbanist' fontWeight='800' fontSize='14px'
                >Reminder</Text>


                <Box w='209px' h='269px' border='1px solid #0038ff' mt='20px' borderRadius='15px'
                    bg='#0038ff'
                >

                </Box>

            </Box>
        </Flex>
    )
}

export default Analyticsandreminder;