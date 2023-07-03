import './App.css';
import ExpanseItem from './components/ExpanseItem';
// import Newproduct from './components/NewProduct';
import NewExpenses from './components/NewExpenses';


const App = ()=> {
  
  const expenses=[
    {tittle :"Clothes",amount : 300,date : new Date(2023,5,30), LocationOfExpenditure : "Nagpur"},
    {tittle :"Mobile Phone",amount : 10000,date : new Date(2023,5,30),LocationOfExpenditure : "Delhi"},
    {tittle :"Chips",amount : 100,date : new Date(2023,5,30),LocationOfExpenditure : "Mumbai"},
    {tittle :"Books",amount : 500,date : new Date(2023,5,30),LocationOfExpenditure : "Bhopal"}]

   const addExpenseHandler = expense =>{
      console.log(expense);
   }

  return (
    <div>
    <div className="App">
    </div>
    {/* <Newproduct/> */}
    <NewExpenses onAddExpense = {addExpenseHandler}/>
    <ExpanseItem tittle={expenses[0].tittle}
    amount={expenses[0].amount}
    date={expenses[0].date}
    locationOfExpenditure={expenses[0].LocationOfExpenditure}
    ></ExpanseItem>

    <ExpanseItem tittle={expenses[1].tittle}
    amount={expenses[1].amount}
    date={expenses[1].date}
    locationOfExpenditure={expenses[1].LocationOfExpenditure}
    ></ExpanseItem>

    <ExpanseItem tittle={expenses[2].tittle}
    amount={expenses[2].amount}
    date={expenses[2].date}
    locationOfExpenditure={expenses[2].LocationOfExpenditure}
    ></ExpanseItem>

    <ExpanseItem tittle={expenses[3].tittle}
    amount={expenses[3].amount}
    date={expenses[3].date}
    locationOfExpenditure={expenses[3].LocationOfExpenditure}
    ></ExpanseItem>
    </div>
  );
}

export default App;
