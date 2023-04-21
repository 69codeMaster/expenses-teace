import { View, Text, StyleSheet } from "react-native";

export default function RecentExpences() {
  return (
    <View style={styles.root}>
      <Text> this is the screen recent expenses screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#9d85f3",
    alignItems: "center",
  },
});
