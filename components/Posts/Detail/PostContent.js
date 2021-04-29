import classes from "./postcontent.module.css";
import PostHeader from "./PostHeader";

const PostContent = (props) => {
  const {post} = props;
  const imagePath = `/images/posts/${post.image}`
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath}/>
      <p>{post.content}</p>
    </article>
  )
}

export default PostContent