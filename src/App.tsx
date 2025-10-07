import BoardSection from "./components/BoardSection/BoardSection";
import SearchSection from "./components/SearchSection/SearchSection";

function App() {
  return (
    <main className="flex flex-col h-screen overflow-hidden">
      <SearchSection />
      <BoardSection />
    </main>
  );
}

export default App;
