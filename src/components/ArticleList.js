import React from "react";
import Article from "./Article";

function ArticleList(props){
  //console.log(props)
  
  const post = props.posts.map((post) => {
    return ( 
    <Article
      key={post.id}
      title={post.title}
      date={post.date}
      preview={post.preview}
    />
    )}
  )
  return (
    <main>
      {post}
    </main>
  )

}
export default ArticleList;