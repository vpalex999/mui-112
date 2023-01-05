import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import ThemeColor112 from './pages/ThemeColor112';
import ThemeLight112 from './pages/ThemeLight112';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/theme-color-112' element={<ThemeColor112 />} />
      <Route path='/theme-light-112' element={<ThemeLight112 />} />
      <Route path='*' element={<NoMatch />} />
    </Routes>
  );
}

export default App;
