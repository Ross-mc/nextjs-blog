import {useRouter}from "next/router"
import { useEffect } from "react";
import PostContent from "../../components/Posts/Detail/PostContent";
import PostHeader from "../../components/Posts/Detail/PostHeader";
import { getAllPosts } from "../../utils/posts";

const Post = (props) => {
  const filteredPost = props.post;

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

export const getStaticProps = (context) => {
  //context is a obj that is passed to get static props, one property of which
  //is params which includes the dynamic params. the eventid is so called because of the file name [eventid].js
  const slug = context.params.slug;
  const posts = getAllPosts();
  const post = posts.find(post => post.slug === slug)
  return {
    props: {
      post
    }
  }
}

export const getStaticPaths = () => {
  const posts = getAllPosts();
  const paths = posts.map(post => {
    return {params: {slug: post.slug}}
  })
  return {
    paths,
    fallback: "blocking"
  }
}

export default Post