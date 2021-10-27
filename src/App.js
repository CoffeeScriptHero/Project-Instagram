import "./App-styles.scss";
import AppRoutes from "./routes/AppRoutes.js";
import Header from "./components/Header/Header.js";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <AppRoutes />
    </div>
  );
};

export default App;
