import {Routes, Route, BrowserRouter} from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Home from './pages/Home';

import './App.css';

function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Layout>
              <Routes>
                <Route path="/post/:id" element={<h1>Full info will be here</h1>} />
                <Route path="/" element={<Home/>} />
              </Routes>
          </Layout>
        </BrowserRouter>
    </div>
  );
}

export default App;
