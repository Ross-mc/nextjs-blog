import Link from "next/link";
import Image from "next/image"
import classes from "./PostItem.module.css";

const PostItem = (props) => {
  const {post} = props

  const humanReadableDate = new Date(post.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
  })

  const imagePath = `/images/posts/${post.slug}/${post.image}`
  return (
    <li className={classes.post}>
      <Link href={post.slug}>
        <a>
          <div className={classes.image}>
            <Image src={imagePath} alt={post.title} width={300} height={200}/>
          </div>
          <div className={classes.content}>
            <h3>{post.title}</h3>
            <time>{humanReadableDate}</time>
            <p>{post.excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  )
}

export default PostItem