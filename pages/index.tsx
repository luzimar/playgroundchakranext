import { useCallback, useEffect } from 'react';
import {
    useColorMode,
    Box,
    useToast,
    Button,
    Image,
    Text,
    Divider,
    Stat,
    StatGroup,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    Flex
} from '@chakra-ui/react';
import { FaRegLightbulb, FaLightbulb } from 'react-icons/fa';

const Card = (props) => (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" px="10" py="10" rounded="md" shadow="dark-lg" {...props} />
);

export default function Home() {
    const { colorMode, toggleColorMode } = useColorMode();
    const toast = useToast();
    const onClick = useCallback(() => {
        toggleColorMode();
        toast({
            title: 'Olá',
            description: 'vc clicou no botão da sorte!',
            status: 'success',
            duration: 3000,
            isClosable: true
        });
    }, []);
    
    useEffect(() => {
        function loadUser() {
            fetch('http://localhost:3000/api/hello').then(response => response.json().then(data => {
                toast({
                    title: 'Olá',
                    description: `Bem vindo ${data.name}`,
                    status: 'info',
                    duration: 3000,
                    isClosable: true,
                    position: 'top'
                });
            })) 
        }
        loadUser();
    }, []);

    return (
        <Flex align="center" justify="center" minH="100vh">
            <Card>
                <Image
                    borderRadius="full"
                    boxSize="150px"
                    src="data:image/jpeg;base64,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"
                    alt="Segun Adebayo"
                />
                <Text
                    bgGradient="linear(to-l, #7928CA,#FF0080)"
                    bgClip="text"
                    fontSize="6xl"
                    fontWeight="extrabold">
                    Luzimar Oliveira
                </Text>
                <Divider marginBottom="10px" />
                <Button
                    marginBottom="10px"
                    colorScheme="whatsapp"
                    leftIcon={colorMode === 'light' ? <FaLightbulb /> : <FaRegLightbulb />}
                    onClick={onClick}>
                    {colorMode === 'light' ? 'Apagar' : 'Acender'} a luz
                </Button>
                <StatGroup>
                    <Stat marginRight="50">
                        <StatLabel>Sent</StatLabel>
                        <StatNumber>3,67</StatNumber>
                        <StatHelpText>
                            <StatArrow type="increase" />
                            2.3%
                        </StatHelpText>
                    </Stat>

                    <Stat>
                        <StatLabel>Clicked</StatLabel>
                        <StatNumber>45</StatNumber>
                        <StatHelpText>
                            <StatArrow type="decrease" />
                            9.5%
                        </StatHelpText>
                    </Stat>
                </StatGroup>
            </Card>
        </Flex>
    );
}
