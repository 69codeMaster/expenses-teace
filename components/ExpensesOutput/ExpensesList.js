import { FlatList } from "react-native";
import ListItem from "../ListItem";
export default function ExpensesList({ expenses }) {
  function renderExpenseItem({ item }) {
    return <ListItem {...item} />;
  }

  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}
