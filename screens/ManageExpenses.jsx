import { View, StyleSheet } from "react-native";
import { useLayoutEffect, useContext } from "react";
import IconButton from "../components/UI/IconButton";
import Button from "../components/UI/Button";
import { GlobalStyles } from "../constant/styles";
import { ExpensesContext } from "../store/ExpensesContext";
import ExpenseForm from "../components/MangeExpense/ExpenseForm";

export default function ManageExpenses({ route, navigation }) {
  const params = route.params;
  const isEditing = params.mode === "edit";
  const expenseCtx = useContext(ExpensesContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit expense" : "Create new expense",
    });
  }, [navigation, params.mode]);

  function cancelHandler() {
    navigation.goBack();
  }
  function confirmHandler(expenseData) {
    if (isEditing) expenseCtx.updateExpense(params.expenseId, expenseData);
    else {
      expenseCtx.addExpense(expenseData);
    }
    navigation.goBack();
  }
  function deleteExpenseHandler() {
    expenseCtx.deleteExpense(params.expenseId);
    navigation.goBack();
  }

  function ScreenContent() {
    return (
      <View style={styles.screenRoot}>
        <ExpenseForm
          onCancel={cancelHandler}
          onSubmit={confirmHandler}
          isEditing={isEditing}
        />
        {isEditing && (
          <View style={styles.deleteContainer}>
            <IconButton
              name="trash-outline"
              size={36}
              color={GlobalStyles.colors.error500}
              onPress={deleteExpenseHandler}
            />
          </View>
        )}
      </View>
    );
  }
  return <ScreenContent />;
}

const styles = StyleSheet.create({
  screenRoot: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },

  deleteContainer: {
    alignItems: "center",
    borderTopColor: GlobalStyles.colors.primary100,
    borderTopWidth: 2,
    marginTop: 16,
    paddingTop: 8,
  },

  button: {
    minWidth: 120,
  },
});
