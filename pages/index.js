import FeaturedPosts from "../components/Home/FeaturedPosts"
import Hero from "../components/Home/Hero"
import { getFeaturedPosts } from "../utils/posts"

const Home = (props) => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={props.featuredPosts}/>
    </>
  )
}

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      featuredPosts
    },
    revalidate: 1000
  }
}

export default Home