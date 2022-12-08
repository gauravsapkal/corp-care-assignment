import { Flex, Image, Text } from "@chakra-ui/react";
import message from "../photos/message.png";
import download from "../photos/download.png";
import profile from "../photos/profile.png";
import hand from "../photos/hand.png";
import glass from "../photos/glass.png";

const Navbar = () => {


    return (
        <Flex w='1052px' h='54px' border='1px solid white' position='absolute' left='292px' top='57px'
            justifyContent='space-between' alignItems='center'
        >
            <Flex h='54px' w='672px' border='1px solid white' justifyContent='space-between'>
                <Flex alignItems='center'>
                    <Text fontFamily='Urbanist' fontWeight='800' fontSize='36px' w='183px' h='31px'
                        display='flex' alignItems='center'
                    >Hello, John</Text>

                    <Image src={hand} h='30px' w='30px' />
                </Flex>

                <Flex border='1px solid #f5f5f5' h='54px' w='339px' bg='#f5f5f5' alignItems='center'
                    borderRadius='15px'
                >
                    <Image src={glass} h='20px' w='20px' ml='17px' />

                    <input style={{
                        outline: 'none',
                        border: 'none',
                        marginLeft: '10px',
                        backgroundColor: '#f5f5f5'
                    }}
                        placeholder="Search"

                    />
                </Flex>
            </Flex>



            <Flex h='38px' w='148px' alignItems='center' justifyContent='space-between'>
                <Image src={message} h='38px' w='38px' />
                <Image src={download} h='38px' w='38px' />
                <Image src={profile} h='38px' w='38px' />
            </Flex>
        </Flex>
    )
}

export default Navbar;