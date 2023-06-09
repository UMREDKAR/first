import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
// import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) =>{
     return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <h3>No Expenses Found !</h3>
  let singleExpense = <h3>Only single Expense here. Please add more...</h3>

  if(filteredExpenses.length>0)
  {
    expensesContent=filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  
  if(filteredExpenses.length===1)
  {
    expensesContent=filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
      
    ));
  }


  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expensesContent}
        {filteredExpenses.length===1 ? (singleExpense) : ''}
      </Card>
    </div>
  );
};

export default Expenses;
