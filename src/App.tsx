import { Header } from "./Components/Header";
import { Sidenav } from "./Components/Sidenav";
import { Dashboard } from "./Pages/Dashboard";
import "./Style.css";

function App() {
  return (
    <div>
      <Sidenav />
      <main>
        <Header />
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
