// src/App.jsx
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AppRouter />
      </Layout>
    </BrowserRouter>
  );
}

export default App;