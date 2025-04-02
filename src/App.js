import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import User from './components/User/User';

function App() {

  const bankEmployee = {
    name: "Patrick Star",
    balance: 1000000,
    email: "patrick@email.com"
  }

  const bankName = "CashG";

  const address = {
    addressNo: 3509,
    street: "Star Street",
    city: "Bikini Bottom"
  }

  return (
    <div className="App">
      <SearchBar />
      {/* Whatever we plave in the component, it will be referred to as props */}
      {/* syntax is variableNameToBeAccessedInTheComponent={variable to be passed} */}
      {/* key={value} */}
      <User employee={bankEmployee} bankName={bankName} address={address} />

    </div>
  );
}

export default App;
