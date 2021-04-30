import FeaturedPosts from "../components/Home/FeaturedPosts"
import Hero from "../components/Home/Hero"
import { getFeaturedPosts } from "../utils/posts"
import Head from "next/head"

const Home = (props) => {
  return (
    <>
      <Head>
        <title>Ross' Blog</title>
        <meta name="description" content="I post about programming and web development"/>
      </Head>
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