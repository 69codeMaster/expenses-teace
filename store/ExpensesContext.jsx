import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "A pair of pants",
    amount: 89.99,
    date: new Date("2022-1-05"),
  },
  {
    id: "e3",
    description: "Banas",
    amount: 5.99,
    date: new Date("2021-12-09"),
  },
  {
    id: "e4",
    description: "Book",
    amount: 89.99,
    date: new Date("2022-02-19"),
  },

  {
    id: "e5",
    description: "Book",
    amount: 5.99,
    date: new Date("2022-02-19"),
  },

  {
    id: "e6",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e7",
    description: "A pair of pants",
    amount: 89.99,
    date: new Date("2022-1-05"),
  },
  {
    id: "e8",
    description: "Banas",
    amount: 5.99,
    date: new Date("2021-12-09"),
  },
  {
    id: "e9",
    description: "Book",
    amount: 89.99,
    date: new Date("2022-02-19"),
  },

  {
    id: "e10",
    description: "Book",
    amount: 5.99,
    date: new Date("2022-02-19"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      {
        const id = new Date().toISOString();
        return [{ ...action.payload, id: id }, ...state];
      }
      break;
    case "UPDATE":
      const indexToUpdate = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatedItem = {
        ...state[indexToUpdate],
        ...action.payload.expenseData,
      };
      const updatedState = { ...state };
      updatedState[indexToUpdate] = updatedItem;
      return updatedState;
      break;
      [...state.filter((expense) => expense.id !== action.payload)];
      break;

    default:
      return state;
      break;
  }
}
export default function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);
  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id, expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };
  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}
