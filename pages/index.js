import { useColorMode, Button } from '@chakra-ui/react'
import { container } from '../styles/Home.module.css';
export default function Home() {
  
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <div className={container}>
      <Button onClick={toggleColorMode}>
         {colorMode === "light" ? "Apagar" : "Acender"} a luz
      </Button>
    </div>
  )
}
