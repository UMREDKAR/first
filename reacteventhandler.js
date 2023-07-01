import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

const ExpanseItem = (props)=>
{
   const clickHandler = ()=>
   {
      console.log("Button Clicked");
   }

   const deleteHandler=()=>
   {
      console.log("Deleted Expense");
   }

   return(<div>
           <h2>Expense Items</h2>
            <ExpenseDate date={props.date}/>
            <ExpenseDetails tittle={props.tittle} 
                            amount={props.amount} 
                            locationOfExpenditure={props.locationOfExpenditure}
             />
             <button onClick={clickHandler}>Change Title</button>
             <button onClick={deleteHandler}>Delete</button>
          </div>)
}

export default ExpanseItem