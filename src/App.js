import "./App.css";
import Balance from "./components/Balance";
import ExpenseCard from "./components/ExpenseCard";
import NewTransactions from "./components/NewTransactions";
import Transactions from "./components/Transactions";
import { useEffect, useState } from "react";
import { Typography, styled, Box } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";
import { getStoredItem } from "./localStorage";

const Header = styled(Typography)`
  margin: 10px 0;
  font-size: 30px;
  color: black;
  text-transform: uppercase;
`;
const Component = styled(Box)`
  display: flex;
  background: #fff;
  width: 80%;
  padding: 20px;
  border-radius: 30px;
  margin: auto;
  & > div {
    height: 70vh;
    overflow: auto;
    width: 60%;
    padding: 15px;
  }
`;

function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, text: "Momos", amount: -9 },
    { id: 2, text: "Salary", amount: 4500 },
    { id: 3, text: "Booze", amount: -3000 },
    { id: 4, text: "Bonus", amount: 6000 },
  ]);
  const mapamount = transactions.map((transaction) => transaction.amount);
  const totalbalance = mapamount.reduce((acc, item) => (acc += item), 0);
  const [mainbalance, setMainbalance] = useState(totalbalance);

  const getItemsFromLocalStorage = () => {
    let history = JSON.parse(getStoredItem());
    if (history) {
      setTransactions((prev) => [...history, ...prev]);
    }
  };

  useEffect(() => {
    getItemsFromLocalStorage();
  }, []);

  useEffect(() => {
    const mapamount = transactions.map((transaction) => transaction.amount);
    const totalbalance = mapamount.reduce((acc, item) => (acc += item), 0);
    setMainbalance(totalbalance);
  }, [transactions]);
  return (
    <Box className="App">
      <Header>
        <Typewriter words={["Expense Tracker"]} typeSpeed={120} />
      </Header>

      <Component>
        <Box>
          <Balance mainbalance={mainbalance} />
          <ExpenseCard transactions={transactions} />
          <NewTransactions
            setTransactions={setTransactions}
            mainbalance={mainbalance}
          />
        </Box>
        <Box>
          <Transactions
            transactions={transactions}
            setTransactions={setTransactions}
          />
        </Box>
      </Component>
    </Box>
  );
}

export default App;
