import React from 'react';

//components
import Home from './src/pages/home/Home';
import {NativeRouter, Routes, Route, Link} from 'react-router-native';
//styles
import {Wrapper} from './src/styles/Wrapper';
import {View} from 'react-native';
import HomePage from './src/pages/home/HomePage/HomePage';

const App = () => {
  return (
    <NativeRouter>
      <View>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homepage" element={<HomePage />} />
        </Routes>
      </View>
    </NativeRouter>
  );
};

export default App;
