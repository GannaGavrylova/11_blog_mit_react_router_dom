import { useParams, Link } from "react-router-dom";
import styles from "./styles.module.css";

function ArticlePage() {
  const { articleId, articleName } = useParams();

  return (
    <div className={styles.article_container}>
      <h1>Статья {articleId}</h1>
      <p>Содержание {articleName}</p>
      <Link className={styles.button} to="/articles">
        Назад
      </Link>
    </div>
  );
}

export default ArticlePage;
