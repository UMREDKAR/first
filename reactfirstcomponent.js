import React from "react";

const ProductForm = () =>
{
   function showTitle(event)
   {
      console.log(event.target.value);
   }
   function showAmount(event)
   {
      console.log(event.target.value);
   }
   function showDate(event)
   {
      console.log(event.target.value);
   }

   return(
          <form>
            <div>
               <label>Expense Title</label>
               <input type="text" onChange={showTitle}></input>
            </div>
            <div>
               <label>Expense Amount</label>
               <input type="number" onChange={showAmount}></input>
            </div>
            <div>
                <label>Date</label>
                <input type="date" min='2023-01-01' max='2023-12-12' onChange={showDate}></input>
            </div>
            <div>
                <button type="submit">Add Product</button>
            </div>
          </form>
   );
}

export default ProductForm;