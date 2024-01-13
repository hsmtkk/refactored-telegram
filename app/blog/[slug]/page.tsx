import matter from "gray-matter"
import ReactMarkdown from "react-markdown"

const getSingleBlog = async (context) => {
  const { slug } = context.params
  const data = await import(`@/data/${slug}.md`)
  const singleDocument = matter(data.default)
  return {
    singleDocument: singleDocument,
  }
}

const SingleBlog = async (props) => {
  const { singleDocument } = await getSingleBlog(props)
  return (
    <div>
      <h1>{singleDocument.data.title}</h1>
      <p>{singleDocument.data.date}</p>
      <ReactMarkdown>{singleDocument.content}</ReactMarkdown>
    </div>
  )
}

export default SingleBlog
