import Head from "next/head"
import PostContent from "../../components/Posts/Detail/PostContent";
import { getAllPosts } from "../../utils/posts";

const Post = (props) => {
  const filteredPost = props.post;

  if (!filteredPost) {
    return (
      <>
        <Head>
          <title>Ross' Blog</title>
          <meta
            name="description"
            content="I post about programming and web development."
          />
        </Head>
        <h1 style={{ textAlign: "center" }}>No posts found with that filter</h1>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{"Ross' Blog : " + filteredPost.title}</title>
        <meta
          name="description"
          content={filteredPost.excerpt}
        />
      </Head>
      <PostContent post={filteredPost} />
    </>
  );
};

export const getStaticProps = (context) => {
  //context is a obj that is passed to get static props, one property of which
  //is params which includes the dynamic params. the eventid is so called because of the file name [eventid].js
  const slug = context.params.slug;
  const posts = getAllPosts();
  const post = posts.find((post) => post.slug === slug);
  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths = () => {
  const posts = getAllPosts();
  const paths = posts.map((post) => {
    return { params: { slug: post.slug } };
  });
  return {
    paths,
    fallback: false,
  };
};

export default Post;
