import React from "react";

const ArticleItem = ({ article }) => {
  return (
    <a
      style={{ width: "30rem" }}
      href={article.url}
      className="list-group-item list-group-item-aciton"
    >
      <img src={article.urlToImage} className="img-thumbnail" />
      <h2>{article.title}</h2>
      <p>{article.description}</p>
    </a>
  );
};

export default ArticleItem;
