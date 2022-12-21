import React from 'react';
import GoalList from './components/GoalList';
import './App.css';

const App = () => {
  return (
    <div className='course-goals'>
      <h2>Goals for today</h2>
      <GoalList />
    </div>
  )
};

export default App;
