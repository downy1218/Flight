import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './Styles/Global';
import MainPage from './Pages/MainPage';
import DetailPage from './Pages/DetailPage';

const queryClient = new QueryClient();

function App():JSX.Element{
  return(
    <QueryClientProvider client={queryClient}>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>}></Route>
          <Route path='/detail' element={<DetailPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App;
