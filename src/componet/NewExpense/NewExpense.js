import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const newExpenseHandler = (expense) => {
    props.onAddExpense(expense);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onNewExpense={newExpenseHandler} />
    </div>
  );
};
export default NewExpense;
