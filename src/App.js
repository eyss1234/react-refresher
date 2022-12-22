import React from 'react';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';
import './App.css';

const App = () => {
  const courseGoals = [
    {id: 'cg1', text: 'Finish the Course'},
    {id: 'cg2', text: 'Refresh React'},
    {id: 'cg3', text: 'Learn Node'}
  ];

  const addNewGoalHandler = (newGoal) => {
    courseGoals.push(newGoal);
    console.log(courseGoals);
  }

  return (
    <div className='course-goals'>
      <h2>Goals for today</h2>
      <NewGoal onAddGoal={addNewGoalHandler}/>
      <GoalList goals={courseGoals}/>
    </div>
  )
};

export default App;
