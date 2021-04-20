import "./App.css";
import createStore from "./Store";
import { Provider } from "react-redux";
import Dashboard from "./Features/Dashboard";
import Header from "./Header";

function App() {
  const store = createStore();
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Dashboard />
      </Provider>
    </div>
  );
}

export default App;
