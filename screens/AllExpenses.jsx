import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/ExpensesContext";
import { useContext } from "react";

export default function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <ExpensesOutput
      expenses={expensesCtx.expenses}
      periodName={"total"}
      fallback={"WOW no expenses at all, you must be new :)"}
    />
  );
}
