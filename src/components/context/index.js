import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { AppProvider } from "./app-context";

const queryClient = new QueryClient();

const AppProviders = ({ children }) => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AppProvider>{children}</AppProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export {AppProviders}