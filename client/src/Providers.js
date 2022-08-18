import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
function Providers({ children }) {
  return (
    <BrowserRouter>
      {/* <ApolloProvider> */}
        {/* <QueryClientProvider> */}
          <ThemeProvider>
 
            {children}
          </ThemeProvider>
        {/* </QueryClientProvider> */}
      {/* </ApolloProvider> */}
    </BrowserRouter>
  );
}

export default Providers;
