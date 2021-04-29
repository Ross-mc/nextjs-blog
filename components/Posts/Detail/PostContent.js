import ReactMarkdown from "react-markdown";
import classes from "./postcontent.module.css";
import PostHeader from "./PostHeader";

const PostContent = (props) => {
  const {post} = props;
  const imagePath = `/images/posts/${post.image}`
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath}/>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  )
}

export default PostContent