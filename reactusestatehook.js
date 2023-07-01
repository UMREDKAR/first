import React, {useState} from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

const ExpanseItem = (props)=>
{
  
   const[changeExpense,setchangeExpense]=useState(props.amount)

   const clickHandler = ()=>
   {
      console.log("Button Clicked");
   }

   const changeHandler=()=>
   {
      setchangeExpense(100);
      console.log(changeExpense);
   }

   return(<div>
           <h2>Expense Items</h2>
            <ExpenseDate date={props.date}/>
            <ExpenseDetails tittle={props.tittle} 
                            amount={changeExpense} 
                            locationOfExpenditure={props.locationOfExpenditure}
             />
             <button onClick={clickHandler}>Change Title</button>
             <button onClick={changeHandler}>Change Expense</button>
          </div>)
}

export default ExpanseItem