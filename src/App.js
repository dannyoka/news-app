import React, { useState, useEffect } from "react";
import news from "./apis/news";
import ArticleList from "./components/ArticleList";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [q, setQ] = useState("apple");

  useEffect(() => {
    const search = async (term) => {
      const response = await news.get("/everything", {
        params: {
          q: term,
          apiKey: "1b2c613e9b4c420090cbfdad0e4d2be7",
        },
      });
      console.log(response);
      setArticles(response.data.articles);
    };
    search(q);
  }, [q]);
  if (!articles.length) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <div className="container">
        <SearchBar onSubmit={setQ} />
        <ArticleList articles={articles} />
      </div>
    </div>
  );
};

export default App;
