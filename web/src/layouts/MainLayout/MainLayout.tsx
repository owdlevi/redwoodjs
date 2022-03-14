import { Box, Container } from '@chakra-ui/react'
import * as React from 'react'
import { Navbar } from 'src/components/Navbar/index'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Box as="section" height="100vh" overflowY="auto">
      <Navbar />
      <Container
        pt={{ base: '8', lg: '12' }}
        pb={{ base: '12', lg: '24' }}
        maxWidth="7xl"
      >
        {children}
      </Container>
    </Box>
  )
}

export default MainLayout
