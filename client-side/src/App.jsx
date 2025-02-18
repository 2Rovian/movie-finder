import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import Home from './pages/Home';
import Login from './pages/Login';
import ErrorPage from './pages/ErrorPage';
import ProfilePage from './pages/ProfilePage';

// Cria uma instância do QueryClient
const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<ErrorPage />}/>
          <Route path='/profile-page' element={<ProfilePage />}/>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App