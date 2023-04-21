import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";

import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";

export default function App() {
  const Drawer = createDrawerNavigator();
  const Stack = createStackNavigator();
  const BottomTabs = createMaterialBottomTabNavigator();
  const [currentTab, setCurrentTab] = useState("Recent Expenses");

  function ExpensesOverview() {
    return (
      <BottomTabs.Navigator>
        <BottomTabs.Screen
          name="Recent Expenses"
          component={RecentExpenses}
          listeners={{
            tabPress: ({ target }) => {
              setCurrentTab(target.split("-")[0]);
            },
          }}
        />
        <BottomTabs.Screen
          name="All Expenses"
          component={AllExpenses}
          listeners={{
            tabPress: ({ target }) => {
              setCurrentTab(target.split("-")[0]);
            },
          }}
        />
      </BottomTabs.Navigator>
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer style={styles.container}>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#7e5cfc" },
            headerTintColor: "white",
          }}>
          <Stack.Screen
            name="ExpensesOverview"
            component={ExpensesOverview}
            options={{ title: currentTab }}
          />
          <Stack.Screen
            component={RecentExpenses}
            name={"Recent Expences"}
            options={{
              headerTitleStyle: {
                fontSize: 22,
              },
              headerRight: () => (
                <Ionicons
                  name="add-outline"
                  color={"white"}
                  size={30}
                  style={styles.icon}
                />
              ),
            }}
          />
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
