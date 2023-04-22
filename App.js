import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";
import ManageExpenses from "./screens/ManageExpenses";

import { Ionicons } from "@expo/vector-icons";
import IconButton from "./components/UI/IconButton";
import { GlobalStyles } from "./constant/styles";

export default function App() {
  const Drawer = createDrawerNavigator();
  const Stack = createStackNavigator();
  const BottomTabs = createBottomTabNavigator();

  function ExpensesOverview() {
    return (
      <BottomTabs.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
          headerTintColor: "white",
          tabBarColor: GlobalStyles.colors.primary500,
          tabBarStyle: {
            backgroundColor: GlobalStyles.colors.primary500,
            height: 55,
            paddingBottom: 5,
          },
          tabBarActiveTintColor: GlobalStyles.colors.accent500,
        }}>
        <BottomTabs.Screen
          name="RecentExpenses"
          component={RecentExpenses}
          options={({ navigation }) => ({
            title: "Recent Expenses",
            tabBarLabel: "Recent",
            tabBarIcon: ({ color, size }) => (
              <Ionicons color={color} size={size} name="hourglass-outline" />
            ),
            tabBarLabelStyle: {
              fontSize: 12,
            },
            headerTitleStyle: {
              fontSize: 22,
            },
            headerRight: () => (
              <IconButton
                color={"white"}
                size={30}
                name="add"
                onPress={() =>
                  navigation.navigate("ManageExpenses", { mode: "create" })
                }
              />
            ),
          })}
        />

        <BottomTabs.Screen
          name="AllExpenses"
          component={AllExpenses}
          options={{
            title: "All Expenses",
            tabBarLabel: "All Expenses",
            tabBarIcon: ({ color, size }) => (
              <Ionicons color={color} size={size} name="calendar-outline" />
            ),
            tabBarLabelStyle: {
              fontSize: 12,
            },
          }}
        />
      </BottomTabs.Navigator>
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: GlobalStyles.colors.primary500,
            },
            headerTintColor: "white",
          }}>
          <Stack.Screen
            name="ExpensesOverview"
            component={ExpensesOverview}
            options={{ headerShown: false }}
          />
          <Stack.Screen name={"ManageExpenses"} component={ManageExpenses} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },

  icon: {
    marginRight: 15,
  },
});
