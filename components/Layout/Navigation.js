import Link from "next/link";
import Logo from "./Logo";
import classes from "./navigation.module.css";


//using a next link component. If we pass plain text it creates an anchor tag
//if we dont pass plain text (e.g. we pass the Logo component) we need to wrap
//in <a> tags

const Navigation = () => {
  return (
    <header className={classes.header}>
      <Link href="/">
        <a><Logo /></a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navigation   