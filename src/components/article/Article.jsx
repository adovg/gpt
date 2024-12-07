import React from 'react';
import './article.css';

const Article = ({imgUrl, date, title}) => {
    return (
       
            <div className="gpt3__blog-container__article">
                <div className="gpt3__blog-container__article-img">
                    <img src={imgUrl} alt="blog-image" />
                </div>
                <div className="gpt3__blog-container__article-content">
                    <p>{date}</p>
                    <p>{title}</p>
                </div>
            </div>
       
    )
}

export default Article;