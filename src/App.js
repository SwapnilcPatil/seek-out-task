import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import ListScreen from './components/ListScreen';
import AddScreen from './components/AddScreen';
import EditScreen from './components/EditScreen';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<ListScreen/>} />
          <Route exact path="/add" element={<AddScreen/>} />
          <Route exact path="/edit/:id" element={<EditScreen/>} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;

