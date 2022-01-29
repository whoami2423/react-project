import {Routes, Route, BrowserRouter} from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Post from './pages/Post';

import './App.css';

function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Layout>
              <Routes>
                <Route path="/post/:id" element={<Post/>} />
                <Route path="/" element={<Home/>} />
              </Routes>
          </Layout>
        </BrowserRouter>
    </div>
  );
}

export default App;
