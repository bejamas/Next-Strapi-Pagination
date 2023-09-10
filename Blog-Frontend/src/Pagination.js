import styles from "@/styles/Pagination.module.css";
import Link from "next/link";

export default function Pagination({
  blogs,
  currentPage,
  pagination,
  perpage,
}) {
  const { meta } = pagination;
  const lastPage = Math.ceil(meta.pagination.total / perpage);

  return (
    <div className={styles.Pagination__container}>
      <div className={styles.Pagination__items}>
        {blogs &&
          blogs.data.map((blog) => (
            <div className={styles.Pagination__item} key={blog.id}>
              <div className={styles.Pagination__details}>
                <h2>{blog.attributes.Title}</h2>
                <h3>{blog.attributes.Author}</h3>
                <div className={styles.Pagination__info}>
                  <span>{blog.attributes.Date}</span>
                  <span>{blog.attributes.Category}</span>
                </div>
              </div>
              <button className={styles.read__more}>Read more</button>
            </div>
          ))}
      </div>

      <div className={styles.Pagination__controls}>
        {currentPage > 1 && (
          <Link
            className={styles.Pagination__buttons}
            href={`?page=${currentPage - 1}`}
          >
            ⬅ Previous
          </Link>
        )}

        {currentPage < lastPage && (
          <Link
            className={styles.Pagination__buttons}
            href={`?page=${currentPage + 1}`}
          >
            Next ➡
          </Link>
        )}
      </div>
    </div>
  );
}
