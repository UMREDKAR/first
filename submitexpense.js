import React,{useState} from "react";

const ProductForm = () =>
{
    const[enteredtitle,setenteredtitle] = useState('');
    const[enteredAmount,setenteredAmount] = useState('');
    const[enteredDate ,setenteredDate ] = useState('');
   
   const titleChangeHandler = (event)=>
   {
      setenteredtitle(event.target.value);
   }
   
   const amountChangeHandler = (event)=>
   {
     setenteredAmount(event.target.value);
   }
   
   const dateChangeHandler = (event)=>
   {
      setenteredDate(event.target.value);
   }

    const submitHandler=(event)=>{
        event.preventDefault();

        const expenseData={
           title: enteredtitle,
           amount: enteredAmount,
           date: enteredDate
        }
        console.log(expenseData);
    }
   return(
          <form onSubmit={submitHandler}>
            <div>
               <label>Expense Title</label>
               <input type="text" onChange={titleChangeHandler}></input>
            </div>
            <div>
               <label>Expense Amount</label>
               <input type="number" onChange={amountChangeHandler}></input>
            </div>
            <div>
                <label>Date</label>
                <input type="date" min='2023-01-01' max='2023-12-12' onChange={dateChangeHandler}></input>
            </div>
            <div>
                <button type="submit">Add Product</button>
            </div>
          </form>
   );
}

export default ProductForm;