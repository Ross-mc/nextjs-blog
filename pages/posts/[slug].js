import {useRouter}from "next/router"
import { useEffect } from "react";

const Post = () => {

  const router = useRouter();
  console.log(router.query.slug)
  // useEffect(() => {
  //   console.log(router.query)
  // })

  return (
    <h1>Hello from the Post page</h1>
  )
}

export default Post