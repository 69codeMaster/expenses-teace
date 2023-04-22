import { View, StyleSheet } from "react-native";
import { useLayoutEffect, useContext } from "react";
import IconButton from "../components/UI/IconButton";
import Button from "../components/UI/Button";
import { GlobalStyles } from "../constant/styles";
import { ExpensesContext } from "../store/ExpensesContext";

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
  function confirmHandler() {
    if (isEditing) {
      expenseCtx.updateExpense(params.expenseId, {
        description: "test",
        amount: 99,
        date: new Date(),
      });
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
        <View style={styles.buttonContainer}>
          <Button style={styles.button} mode="flat" onPress={cancelHandler}>
            Cancel
          </Button>
          <Button style={styles.button} onPress={confirmHandler}>
            {isEditing ? "Update" : "Create"}
          </Button>
        </View>
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
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
