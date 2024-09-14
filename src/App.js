import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/homePage";
import ArticlesListPage from "./components/articlesListPage";
import ArticlePage from "./components/articlePage";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<ArticlesListPage />} />
        <Route
          path="/article/:articleId/:articleName"
          element={<ArticlePage />}
        />
      </Routes>
    </div>
  );
}

export default App;
