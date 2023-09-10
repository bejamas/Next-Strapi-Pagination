import Pagination from "@/Pagination";
const PER_PAGE = 5;

import { motion } from "framer-motion";
import { useRouter } from "next/router";
export default function Home({ blogs, currentPage, pagination }) {
  const router = useRouter();
  console.log(blogs);
  return (
    <div>
      <h1> Blog Header: {currentPage}</h1>

      <motion.div
        key={router.asPath}
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        variants={{
          pageInitial: {
            y: "100%",
            opacity: 0,
          },
          pageAnimate: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.5,
            },
          },
          pageExit: {
            y: "100%",
            opacity: 0,
            transition: {
              duration: 0.5,
            },
          },
        }}
      >
        <Pagination
          blogs={blogs}
          currentPage={currentPage}
          pagination={pagination}
          perpage={PER_PAGE}
        />
      </motion.div>
    </div>
  );
}

export async function getServerSideProps({ query: { page = 1 } }) {
  const res = await fetch(
    `http://localhost:1337/api/blog-datas?pagination[page]=${page}&pagination[pageSize]=${PER_PAGE}`
  );

  const blogs = await res.json();
  const currentPage = +page;
  const { meta } = blogs;
  const pagination = { meta };

  return {
    props: {
      blogs,
      currentPage,
      pagination,
    },
  };
}
