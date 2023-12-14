import { Header } from "./Components/Header";
import { Sidenav } from "./Components/Sidenav";
import { DataContextProvider } from "./Context/DataContext";
import { Dashboard } from "./Pages/Dashboard";
import "./Style.css";

function App() {
  return (
    <DataContextProvider>
      <div>
        <Sidenav />
        <main>
          <Header />
          <Dashboard />
        </main>
      </div>
    </DataContextProvider>
  );
}

export default App;
