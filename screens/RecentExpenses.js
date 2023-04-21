import { StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
export default function RecentExpences() {
  return <ExpensesOutput periodName={"last 7 days"} />;
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#9d85f3",
    alignItems: "center",
  },
});
