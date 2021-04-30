import AllPosts from "../../components/Posts/AllPosts";
import { getAllPosts } from "../../utils/posts";
import Head from "next/head"


const Posts = (props) => {
  return (
    <>
      <Head>
        <title>Ross' Blog Posts</title>
        <meta name="description" content="I post about programming and web development. Here are my blog posts"/>
      </Head>
      <AllPosts posts={props.posts}/>
    </>
  )
}

export const getStaticProps = () => {
  const posts = getAllPosts()

  return {
    props: {
      posts
    },
    revalidate: 1000
  }
}

export default Posts