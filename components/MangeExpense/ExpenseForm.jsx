import { View, StyleSheet, Text } from "react-native";
import { useState, useEffect } from "react";
import Button from "../UI/Button";
import Input from "./Input";

export default function ExpenseForm({ onCancel, onSubmit, isEditing }) {
  const [inputValues, setInputValues] = useState({
    amount: "",
    date: "",
    description: "",
  });

  function inputChangeHandler(inputIdentifier, inputValue) {
    setInputValues((prevValue) => {
      return {
        ...prevValue,
        [inputIdentifier]: inputValue,
      };
    });
  }

  function submitHandler() {
    const expenseData = {
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
      description: inputValues.description,
    };

    onSubmit(expenseData);
  }
  //   useEffect(() => {
  //     console.log(inputValues);
  //   }, [inputValues]);

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Expense Details</Text>
      <View style={styles.rowContainer}>
        <Input
          style={styles.rowInput}
          label="Amount"
          value={inputValues.amount}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: (value) => inputChangeHandler("amount", value),
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          value={inputValues.date}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: (value) => inputChangeHandler("date", value),
          }}
        />
      </View>
      <Input
        label="Description"
        value={inputValues.description}
        textInputConfig={{
          multiline: true,
          onChangeText: (value) => inputChangeHandler("description", value),
        }}
      />
      <View style={styles.buttonContainer}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {isEditing ? "Update" : "Create"}
        </Button>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  form: {
    marginBottom: 8,
    marginTop: 40,
  },

  title: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24,
  },

  rowContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },

  rowInput: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 16,
  },
});
