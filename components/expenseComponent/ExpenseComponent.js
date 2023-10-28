import { StyleSheet, Text, View } from "react-native";
import ExpenseSummaryComponent from "./ExpenseSummaryComponent";
import ExpenseListComponent from "./ExpenseListComponent";
import { GlobalStyles } from "../../constants/styles";

export default function ExpenseComponent({ expenseList, period }) {
  return (
    <View style={styles.container}>
      <ExpenseSummaryComponent expenses={expenseList} period={period} />
      <ExpenseListComponent expenses={expenseList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
