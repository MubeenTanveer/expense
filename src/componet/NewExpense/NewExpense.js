import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const newExpenseHandler = (expense) => {
    const expenseData = {
      ...expense,
    };
    console.log(expense);
    props.onAddExpense(expense);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onNewExpense={newExpenseHandler} />
    </div>
  );
};
export default NewExpense;
