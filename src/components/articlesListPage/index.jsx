import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const articles = [
  { id: 1, article: "Статья 1 как приготовить отменный ужин" },
  { id: 2, article: "Статья 2 смех продливает жизнь" },
  { id: 3, article: "Статья 3 советы от бабушки Варюшки" },
];
function ArticlesListPage() {
  return (
    <div className={styles.articles_container}>
      <h1>Статьи</h1>
      <ul>
        {articles.map(({ id, article }) => {
          return (
            <li key={id}>
              <Link
                className={styles.link_container_articles}
                to={`/article/${id}/${article}`}
              >
                {article}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ArticlesListPage;
