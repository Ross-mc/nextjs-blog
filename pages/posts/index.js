import AllPosts from "../../components/Posts/AllPosts";
import { getAllPosts } from "../../utils/posts";


const Posts = (props) => {
  return (
    <>
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