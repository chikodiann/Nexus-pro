
'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { Box, ChakraProvider, extendTheme, useColorMode, useColorModeValue } from '@chakra-ui/react'
import classNames from 'classnames'
import { ReactNode } from 'react'
interface ProviderProps {
  children: ReactNode
}

const bodyBgLightMode = 'linear-gradient(to bottom, none 20%, #ECEDFD 20%) no-repeat'
const bodyBgDarkMode = 'linear-gradient(to bottom, none 20%, #12172D 20%) no-repeat'
const theme = extendTheme({ config: { initialColorMode: 'light', useSystemColorMode: false } })

export function Providers({ children }: ProviderProps) {
  const { colorMode } = useColorMode()
  const bgImg = useColorModeValue(bodyBgLightMode, bodyBgDarkMode)
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <Box as='main' bgImg={bgImg}>
          {children}
        </Box>
      </ChakraProvider>
    </CacheProvider>
  )
}