import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/ExpensesContext";
import { useContext } from "react";
import { getDateMinusDays } from "../utils/date";

export default function RecentExpences() {
  const expensesCtx = useContext(ExpensesContext);
  const today = new Date("2022-02-19");
  const date7DaysAgo = getDateMinusDays(today, 7);
  const recentExpenses = expensesCtx.expenses.filter(
    (expense) => expense.date >= date7DaysAgo
  );

  return (
    <ExpensesOutput periodName={"last 7 days"} expenses={recentExpenses} />
  );
}
