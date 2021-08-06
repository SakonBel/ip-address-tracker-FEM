import Info from "./components/Info";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App h-screen">
      <header className="h-2/5 bg-cover text-center">
        <h1 className="text-2xl font-medium text-white py-7">
          IP Address Tracker
        </h1>
        <SearchBar />
      </header>
      <Info />
    </div>
  );
}

export default App;
