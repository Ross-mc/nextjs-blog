import Link from "next/link"
import Logo from "./Logo"

const Navigation = () => {
  return (
    <>
      <Logo />
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
    </>
  )
}

export default Navigation   