import "./App-styles.scss";
import AppRoutes from "./routes/AppRoutes.js";
import Header from "./components/Header/Header.js";
import PostModal from "./components/PostModal/PostModal";
const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <PostModal />
      <AppRoutes />
    </div>
  );
};

export default App;
