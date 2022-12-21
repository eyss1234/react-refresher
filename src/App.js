import React from 'react';
import GoalList from './components/GoalList';
import './App.css';

const App = () => {
  const courseGoals = [
    {id: 'cg1', text: 'Finish the Course'},
    {id: 'cg2', text: 'Refresh React'},
    {id: 'cg3', text: 'Learn Node'}
  ];

  return (
    <div className='course-goals'>
      <h2>Goals for today</h2>
      <GoalList goals={courseGoals}/>
    </div>
  )
};

export default App;
