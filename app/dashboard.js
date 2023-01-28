import React, {useState} from 'react'
import{
    Flex,
    Heading,
    Avatar,
    AvatarGroup,
    Text,
    Icon,
    IconButton,
    Table,
    Thread,
    Tbody,
    Tr,
    Th,
    Td,
    Divider,
    Link,
    Box,
    Button,
    Input,
    InputGroup,
    InputLeftElement
} from '@chakra-ui/react'
import{
    FiHome,
    FiPieChart,
    FiDollarSign,
    FiBox,
    FiCalendar,
    FiChevronDown,
    FiChevronUp,
    FiPlus, 
    FiCreditCard,
    FiSearch,
    FiBell
} from "react-icons/fi"
import MyChart from '../components/MyChart'

export default function dashboard() {
    return (
        <Flex
            h="100vh"
            flexDir="row"
            overflow="hidden"
            maxW="2000px"
        >
            {/*Column 1*/}
            <Flex
                w="25%"
                flexDir="column"
                alignItems="center"
                backgroundColor="#6d00ff"//Placeholder for background color
                color="#fff"//White text as placeholder
            >
                 
        </Flex>
    </Flex>
    )
}