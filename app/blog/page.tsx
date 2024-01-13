import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { Link } from "@nextui-org/react";

const getAllBlogs = async () => {
  const files = fs.readdirSync(path.join("data"))
  const blogs = files.map((fileName: string) => {
    const slug = fileName.replace(".md", "")
    const fileData = fs.readFileSync(path.join("data", fileName), "utf-8")
    const { data } = matter(fileData)
    return {
      fontmatter: data,
      slug: slug,
    }
  })
  const orderedBlogs = blogs.sort((a, b) => {
    return b.fontmatter.id - a.fontmatter.id
  })
  return { blogs: orderedBlogs }
}

const Blog = async () => {
  const { blogs } = await getAllBlogs()
  return (
    <div>
      <h1>ブログページ</h1>
      {blogs.map((blog, index) =>
        <div key={index}>
          <h1>{blog.fontmatter.title}</h1>
          <p>{blog.fontmatter.excerpt}</p>
          <p>{blog.fontmatter.date}</p>
          <Link href={`/blog/${blog.slug}`}>Read More</Link>
        </div>
      )}
    </div>
  )
}

export default Blog