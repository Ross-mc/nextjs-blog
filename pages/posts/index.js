import AllPosts from "../../components/Posts/AllPosts";

const DUMMY_POSTS = [
  {
    title: "Getting Started with NextJS",
    slug: "getting-started-nextjs",
    image: "getting-started-nextjs.png",
    excerpt: "NextJS is the React Framework for production. It makes building fullstack React apps and sites a breeze. They will ship with serverside rendering",
    date: "2021-04-22"
  },
  {
    title: "Deploying NextJS Apps",
    slug: "deploy-nextjs-apps",
    image: "deploy-nextjs-apps.png",
    excerpt: "Deploying NextJS apps is really simple. Netlify can host your NextJS application with your serverless functions included. For free!",
    date: "2021-04-25"
  }
]

const Posts = (props) => {
  return (
    <>
      <AllPosts posts={DUMMY_POSTS}/>
    </>
  )
}

export default Posts