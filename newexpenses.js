import React from "react";
import ProductForm from "./ProductForm";

const NewExpenses = (props)=>
{
   const saveExpenseDataHandler = (enteredExpenseData) =>{
    
     const expenseData ={
         ...enteredExpenseData,
         id: Math.random().toString()
     };
     //console.log(expenseData);
     props.onAddExpense(expenseData);
   };

   return(
    <div>
        <ProductForm onSaveExpenseData = {saveExpenseDataHandler}/>
    </div>
   );
};

export default NewExpenses;