import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget} = useContext(AppContext);
    const {expenses, currency} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {

        if(event.target.value > 20000) {
            alert("The value cannot exceed £ 20000");
            setNewBudget("");
            return;
        }
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);

        if(event.target.value < totalExpenses){
            alert("You cannot reduce the budget value lower than the spending");
            setNewBudget("");
            return;
        }

        setNewBudget(event.target.value);
        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget,
        })

    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;

