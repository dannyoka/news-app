import React from "react";
import ArticleItem from "./ArticleItem";

const ArticleList = ({ articles }) => {
  const list = articles.map((article) => {
    return <ArticleItem key={article.title} article={article} />;
  });
  return <ul className="list-group">{list}</ul>;
};

export default ArticleList;
