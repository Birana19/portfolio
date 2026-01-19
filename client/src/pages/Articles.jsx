import { mediumArticles } from "../data/mediumArticleData";
import useScrollAnimation from "../hooks/useScrollAnimation";
import "./Articles.css";


function Articles() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section
      ref={ref}
      id="articles"
      className={`section articles ${isVisible ? "show" : ""}`}
    >
      <h2 className="heading-lg text-center">
        Articles 
      </h2>

      <div className="articles-grid">
        {mediumArticles.map((article, index) => (
          <a
            key={index}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="article-card"
          >
            <div className="article-meta">
              <span>{article.date}</span>
              <span>• {article.readTime}</span>
            </div>

            <h3>{article.title}</h3>
            <p>{article.description}</p>

            <div className="article-tags">
              {article.tags.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>

            <span className="read-more">Read on Medium →</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Articles;
