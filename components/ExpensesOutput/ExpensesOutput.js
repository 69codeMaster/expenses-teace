import { Text, View, StyleSheet } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import { GlobalStyles } from "../../constant/styles";

export default function ExpensesOutput({ expenses, periodName, fallback }) {
  function FallbackMsg() {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>{fallback}</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <ExpensesSummary periodName={periodName} expenses={expenses} />

      {expenses.length ? <ExpensesList expenses={expenses} /> : <FallbackMsg />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary700,
  },
  fallbackContainer: {
    flex: 1,
    marginTop: 30,
  },

  fallbackText: {
    color: "white",
    fontSize: 16,
  },
});
