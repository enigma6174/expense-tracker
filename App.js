import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import ManageExpenseScreen from "./screens/ManageExpenseScreen";
import RecentExpenseScreen from "./screens/RecentExpenseScreen";
import ExpensesScreen from "./screens/ExpensesScreen";

import { GlobalStyles } from "./constants/styles";
import IconButton from "./components/uiComponent/IconButton";
import ExpenseContextProvider from "./store/expensesContext";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => (
          <IconButton
            icon={"add"}
            size={24}
            color={tintColor}
            onPress={() => {
              navigation.navigate("ManageExpense");
            }}
          />
        ),
      })}
    >
      <BottomTabs.Screen
        name={"RecentExpenses"}
        component={RecentExpenseScreen}
        options={{
          headerTitleAlign: "center",
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name={"hourglass"} size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name={"Expenses"}
        component={ExpensesScreen}
        options={{
          headerTitleAlign: "center",
          title: "All Expenses",
          tabBarLabel: "Expenses",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name={"calendar"} size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ExpenseContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
              headerTintColor: "white",
            }}
          >
            <Stack.Screen
              name={"ExpensesOverview"}
              component={ExpensesOverview}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name={"ManageExpense"}
              component={ManageExpenseScreen}
              options={{
                headerTitleAlign: "center",
                presentation: "modal",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpenseContextProvider>
    </>
  );
}
