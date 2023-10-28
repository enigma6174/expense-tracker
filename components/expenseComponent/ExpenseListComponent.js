import { FlatList } from "react-native";

import ExpenseItemComponent from "./ExpenseItemComponent";

function renderExpenseItem(object) {
  return <ExpenseItemComponent {...object.item} />;
}

export default function ExpenseListComponent({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}
