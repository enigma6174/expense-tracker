import { StyleSheet, Text, View } from "react-native";

import { GlobalStyles } from "../../constants/styles";

export default function ExpenseSummaryComponent({ expenses, period }) {
  const totalExpenses = expenses.reduce((currentTotal, expense) => {
    return currentTotal + expense.amount;
  }, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.period}>{period}</Text>
      <Text style={styles.total}>${totalExpenses.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  period: {
    fontSize: 14,
    color: GlobalStyles.colors.primary400,
  },
  total: {
    fontSize: 16,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary500,
  },
});
