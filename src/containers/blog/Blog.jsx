import React from 'react';
import { useSelector} from 'react-redux';
import './blog.css';
import Article from '../../components/article/Article.jsx';

export const Blog = () => {

   const blogPost = useSelector(state => state.blogPosts);

  return (
    <div className='gpt3__blog section__padding' id='blog'>
     <div className="gpt3__blog-heading">
      <h1 className='gradient__text'>
        A lot is happening, <br />
        We are blogging about it.
      </h1>
     </div>
     <div className="gpt3__blog-container">
        <div className="gpt3__blog-container__groupA">
          <Article imgUrl={blogPost[0].img} date={blogPost[0].date} title={blogPost[0].title}/>
        </div>
          <div className="gpt3__blog-container__groupB">
            <Article imgUrl={blogPost[1].img} date={blogPost[1].date} title={blogPost[1].title}/>
            <Article imgUrl={blogPost[2].img} date={blogPost[2].date} title={blogPost[2].title}/>
            <Article imgUrl={blogPost[3].img} date={blogPost[3].date} title={blogPost[3].title}/>
          </div>
     </div>
    </div>
  )
}

export default Blog;