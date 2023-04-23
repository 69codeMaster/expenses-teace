import { View, Text, StyleSheet, Pressable } from "react-native";
import { useContext } from "react";
import { GlobalStyles } from "../constant/styles";
import { getFormattedDate } from "../utils/date";
import { useNavigation } from "@react-navigation/native";
import { TapGestureHandler } from "react-native-gesture-handler";
import { ExpensesContext } from "../store/ExpensesContext";

export default function ListItem({ id, description, date, amount }) {
  const navigation = useNavigation();
  const { deleteExpense } = useContext(ExpensesContext);

  function expensePressHandler() {
    navigation.navigate("ManageExpenses", {
      mode: "edit",
      expenseId: id,
    });
  }
  return (
    <View style={styles.outerContiner}>
      <TapGestureHandler numberOfTaps={2} onActivated={() => deleteExpense(id)}>
        <Pressable
          // onPress={/}
          android_ripple={{ color: "#6b47c175" }}>
          <View style={styles.innerContainer}>
            <View>
              <Text style={styles.description}>{description} </Text>
              <Text style={styles.date}>{getFormattedDate(date)}</Text>
            </View>
            <Text style={styles.amount}>${amount.toFixed(2)}</Text>
          </View>
        </Pressable>
      </TapGestureHandler>
    </View>
  );
}
const styles = StyleSheet.create({
  outerContiner: {
    width: 350,
    margin: 12,
    borderRadius: 4,
    backgroundColor: GlobalStyles.colors.primary500,
    overflow: "hidden",
  },

  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    minHeight: 50,
  },
  description: {
    fontSize: 16,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary50,
  },
  date: {
    fontSize: 12,
    color: GlobalStyles.colors.primary200,
  },

  amount: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 5,
    height: "80%",
    fontWeight: "bold",
    color: GlobalStyles.colors.primary700,
    minWidth: 70,
    textAlign: "center",
  },
});
