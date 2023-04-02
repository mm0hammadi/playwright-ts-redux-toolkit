import React from 'react';

import '../assets/application.scss';
import Header from './Header';
import ToDoList from './ToDoList';
import Footer from './Footer';

const App = () => (
  <div className="h-100">
    <Header />
    <ToDoList />
    <Footer />
  </div>
);

export default App;
