import '../styles/globals.css'
import {ChakraProvider} from "@chakra-ui/react"

function MyApp({ Component, pagePros}){
    return(
        <ChakraProvider>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

export default MyApp