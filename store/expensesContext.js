import { createContext, useReducer } from "react";

const DATA = [
  {
    id: "e1",
    description: "shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "condoms",
    amount: 12.99,
    date: new Date("2022-10-01"),
  },
  {
    id: "e3",
    description: "energy drink",
    amount: 19.99,
    date: new Date("2023-09-01"),
  },
  {
    id: "e4",
    description: "beer",
    amount: 25.99,
    date: new Date("2021-11-22"),
  },
  {
    id: "e5",
    description: "chicken burger",
    amount: 5.99,
    date: new Date("2023-01-01"),
  },
  {
    id: "e6",
    description: "fruits",
    amount: 39.99,
    date: new Date("2022-12-01"),
  },
  {
    id: "e7",
    description: "water",
    amount: 0.99,
    date: new Date("2023-05-21"),
  },
  {
    id: "e8",
    description: "condoms",
    amount: 12.99,
    date: new Date("2023-05-01"),
  },
  {
    id: "e9",
    description: "soda",
    amount: 2.99,
    date: new Date("2021-10-14"),
  },
  {
    id: "e10",
    description: "electricity bill",
    amount: 250.99,
    date: new Date("2022-08-19"),
  },
  {
    id: "e11",
    description: "water bottle",
    amount: 25.99,
    date: new Date("2023-10-20"),
  },
  {
    id: "e12",
    description: "chicken",
    amount: 5.99,
    date: new Date("2023-10-18"),
  },
  {
    id: "e13",
    description: "flight ticket",
    amount: 325.99,
    date: new Date("2023-10-13"),
  },
];

export const ExpenseContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expenseReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];

    case "UPDATE":
      const indexToUpdate = state.findIndex(
        (expense) => expense.id === action.payload.id,
      );
      const expenseToUpdate = state[indexToUpdate];
      const updatedExpense = { ...expenseToUpdate, ...action.payload.data };
      const updatedState = [...state];
      updatedState[indexToUpdate] = updatedExpense;
      return updatedState;

    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);

    default:
      return state;
  }
}

export default function ExpenseContextProvider({ children }) {
  const [state, dispatch] = useReducer(expenseReducer, DATA);

  function addExpense(data) {
    dispatch({ type: "ADD", payload: data });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, data) {
    dispatch({ type: "UPDATE", payload: { id: id, data: data } });
  }

  const value = {
    expenses: state,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
}
