import { View, Text, StyleSheet, Pressable } from "react-native";
import { GlobalStyles } from "../constant/styles";
import { hypenedDate } from "../utils/formaters";
export default function ListItem({ description, date, amount }) {
  function expensePressHandler() {}
  return (
    <View style={styles.outerContiner}>
      <Pressable
        // style={({ pressed }) => pressed && { opacity: 0.75 }}
        onPress={expensePressHandler}
        android_ripple={{ color: "#6b47c175" }}>
        <View style={styles.innerContainer}>
          <View>
            <Text style={styles.description}>{description} </Text>
            <Text style={styles.date}>{hypenedDate(date)}</Text>
          </View>
          <Text style={styles.amount}>${amount}</Text>
        </View>
      </Pressable>
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
