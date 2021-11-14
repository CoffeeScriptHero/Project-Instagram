import "./App-styles.scss";
import AppRoutes from "./routes/AppRoutes.js";
import Header from "./components/Header/Header.js";
import PostModal from "./components/PostModal/PostModal";
import img from "./images/waterfall.jpg";
import user from "./images/user.jpg";
const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <PostModal
        img={img}
        userImg={user}
        nickname={"deniskozarenko"}
        comments={[
          { nickname: "Trinity", text: "nice view" },
          { nickname: "igor", text: "great" },
          { nickname: "vasya", text: "1212?" },
        ]}
      />
      <AppRoutes />
    </div>
  );
};

export default App;
