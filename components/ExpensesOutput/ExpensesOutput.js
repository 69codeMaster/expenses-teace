import { View, StyleSheet } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import { GlobalStyles } from "../../constant/styles";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "A pair of pants",
    amount: 89.99,
    date: new Date("2022-1-05"),
  },
  {
    id: "e3",
    description: "Banas",
    amount: 5.99,
    date: new Date("2021-12-09"),
  },
  {
    id: "e4",
    description: "Book",
    amount: 89.99,
    date: new Date("2022-02-19"),
  },

  {
    id: "e5",
    description: "Book",
    amount: 5.99,
    date: new Date("2022-02-19"),
  },

  {
    id: "e6",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e7",
    description: "A pair of pants",
    amount: 89.99,
    date: new Date("2022-1-05"),
  },
  {
    id: "e8",
    description: "Banas",
    amount: 5.99,
    date: new Date("2021-12-09"),
  },
  {
    id: "e9",
    description: "Book",
    amount: 89.99,
    date: new Date("2022-02-19"),
  },

  {
    id: "e10",
    description: "Book",
    amount: 5.99,
    date: new Date("2022-02-19"),
  },
];

export default function ExpensesOutput({ expenses, periodName }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary periodName={periodName} expenses={DUMMY_EXPENSES} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
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
