import * as React from 'react'

import {ChakraProvider} from '@chakra-ui/react'//Import ChakraProvider component

function App() {
    return (//Wrapping ChakraProvider at the root of the app
        <ChakraProvider>
            <TheRestOfYourApplication />
        </ChakraProvider>
    )
}

import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react'
// `@chakra-ui/theme` is a part of the base install with `@chakra-ui/react`
import chakraTheme from '@chakra-ui/theme'

const { Button } = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    Button,
  },
})

function App() {
  return (
    <ChakraBaseProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraBaseProvider>
  )
}