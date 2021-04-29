import fs from "fs";
import path from "path";
import matter from "gray-matter"

const postsDirectory = path.join(process.cwd(), "content/posts")

const getPostData = (fileName) => {
  const filePath = path.join(postsDirectory, fileName)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const {data, content} = matter(fileContent);

  const postData = {
    ...data,
    content
  }

  return postData
}

export const getAllPosts = () => {
  const files = fs.readdirSync(postsDirectory);
  const posts = files.map(file => getPostData(file));
  return posts.sort((postA, postB) => postA.date > postB.date ? -1 : 1)
}

export const getFeaturedPosts = () => {
  const posts = getAllPosts();
  return posts.filter(post => post.isFeatured)
}

