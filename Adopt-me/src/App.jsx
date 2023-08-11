import React from "react";
import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <header>
        <Link to='/'>Adopt Me!</Link>
      </header>
      <Routes>
        <Route path='/details/:id' element={<Details  props={""}/>} />
        <Route path="/" element={<SearchParams />} />
      </Routes>   
    </QueryClientProvider>
    </BrowserRouter>
  );
};
createRoot(document.getElementById("root")).render(<React.StrictMode><App /></React.StrictMode>);
