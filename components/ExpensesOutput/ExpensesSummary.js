import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constant/styles";

export default function ExpensesSummary({ periodName, expenses }) {
  const sum = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  console.log("sum" + sum);
  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${sum.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary50,
    paddingHorizontal: 20,
    marginTop: 20,
    marginHorizontal: 15,
    borderRadius: 10,
  },

  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary400,
  },

  period: {
    fontSize: 16,
    color: GlobalStyles.colors.primary200,
  },
});
