import PostsGrid from "../Posts/PostsGrid"
import classes from "./featuredPosts.module.css"

const FeaturedPosts = props => {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid />
    </section>
  )
}

export default FeaturedPosts