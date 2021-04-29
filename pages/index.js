import FeaturedPosts from "../components/Home/FeaturedPosts"
import Hero from "../components/Home/Hero"

const Home = () => {
  
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS}/>
    </>
  )
}

export default Home