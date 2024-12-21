import React, { useEffect } from 'react';
import { useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import { setDate  } from '../../store/dateSlice';
import './blog.css';
import Article from '../../components/article/Article.jsx';

export const Blog = () => {

   const blogPost = useSelector(state => state.app.blogPosts);
   const filteredPost = blogPost.slice(1);
   const titlePost = blogPost.at(0);
   const dispatch = useDispatch();
   const currentDate = useSelector(state => state.date.currentDate);

  useEffect(() => {
    const currentDate = new Date().toLocaleDateString();
    dispatch(setDate(currentDate)); // Отправляем дату в store
  }, [dispatch]);


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
          <Article imgUrl={titlePost.img} date={currentDate} title={titlePost.title}/>
        </div>
          <div className="gpt3__blog-container__groupB">
            {filteredPost.map((blogItem, index) => (
              <Article imgUrl={blogItem.img} date={currentDate} title={blogItem.title} key={index} />
            )
            )}
          </div>
     </div>
    </div>
  )
}

export default Blog;