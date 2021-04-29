import router from "next/router"

const Post = () => {

  const query = router.query.slug;
  console.log(query)

  return (
    <h1>Hello from the Post page</h1>
  )
}

export default Post