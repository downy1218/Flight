import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './Styles/Global';
import MainPage from './Pages/MainPage';
const queryClient = new QueryClient();

function App():JSX.Element{
  return(
    <QueryClientProvider client={queryClient}>
      <GlobalStyle/>
      <MainPage/>
    </QueryClientProvider>
  )
}

export default App;
