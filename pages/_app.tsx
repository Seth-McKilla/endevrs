import { ChakraProvider } from "@chakra-ui/react";
import theme from "styles/theme";
import { Navbar } from "components";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
