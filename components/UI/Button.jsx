import { View, Text, StyleSheet, Pressable } from "react-native";
import { GlobalStyles } from "../../constant/styles";

export default function Button({ children, onPress, mode, style }) {
  return (
    <View style={[style, styles.outerButton]}>
      <Pressable onPress={onPress} android_ripple={{ color: "white " }}>
        <View style={[styles.innerButton, mode === "flat" && styles.flat]}>
          <Text style={[styles.text, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  outerButton: {
    borderRadius: 4,
    backgroundColor: GlobalStyles.colors.primary400,

    overflow: "hidden",
  },

  innerButton: {
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: "center",
  },

  flat: {
    backgroundColor: "transparent",
  },

  text: {
    color: "white",
    fontSize: 16,
  },

  flatText: {
    color: GlobalStyles.colors.primary200,
  },
});
