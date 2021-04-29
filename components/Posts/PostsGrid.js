import PostItem from "./PostItem"
import classes from "./PostsGrid.module.css"

const PostsGrid = (props) => {
  const {posts} = props;

  if (!posts || posts.length < 1){
    return <h1>There are no posts</h1>
  }

  return (
    <ul className={classes.grid}>
      {posts.map(post => <PostItem key={post.slug} post={post}/>)}
    </ul>
  )
}

export default PostsGrid