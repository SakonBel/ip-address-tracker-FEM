import Info from "./components/Info";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <header>
        <h1>IP Address Tracker</h1>
        <SearchBar />
      </header>
      <Info />
    </div>
  );
}

export default App;
