import { View, StyleSheet } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import { GlobalStyles } from "../../constant/styles";
import { useContext } from "react";
import { ExpensesContext } from "../../store/ExpensesContext";

export default function ExpensesOutput({ expenses, periodName }) {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <View style={styles.container}>
      <ExpensesSummary
        periodName={periodName}
        expenses={expensesCtx.expenses}
      />
      <ExpensesList expenses={expensesCtx.expenses} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
