import {useRouter}from "next/router"
import { useEffect } from "react";
import PostContent from "../../components/Posts/Detail/PostContent";
import PostHeader from "../../components/Posts/Detail/PostHeader";

const DUMMY_POSTS = [
  {
    title: "Getting Started with NextJS",
    slug: "getting-started-nextjs",
    image: "getting-started-nextjs.png",
    excerpt: "NextJS is the React Framework for production. It makes building fullstack React apps and sites a breeze. They will ship with serverside rendering",
    date: "2021-04-22",
    content: "NextJS provides many benefits over standard React. It provides built in solutions to problems that have been countered with React. For example, your pages folder will automatically generate routing instead of relying on a third party package such as React-Router. It also means you can use server side rendering to provide a better user experience."
  },
  {
    title: "Deploying NextJS Apps",
    slug: "deploy-nextjs-apps",
    image: "deploy-nextjs-apps.png",
    excerpt: "Deploying NextJS apps is really simple. Netlify can host your NextJS application with your serverless functions included. For free!",
    date: "2021-04-25",
    content: "You need to sign up for an account on the free tier. You will be able to deploy as many applications as you want subject to a bandwith cap of 100gb. Thereafter you will be billed according to the demand of your website so you only get charged for what you use."
  }
]

const Post = () => {

  const router = useRouter();
  console.log(router.query.slug)
  // useEffect(() => {
  //   console.log(router.query)
  // })

  const filteredPost = DUMMY_POSTS.find(post => post.slug === router.query.slug);

  if (!filteredPost){
    return (
      <h1 style={{textAlign: "center"}}>No posts found with that filter</h1>
    )
  }

  return (
    <>
      {/* 
      <PostContent /> */}
      {/* <h1>{filteredPost.title}</h1> */}
      <PostContent post={filteredPost}/>
    </>
  )
}

export default Post