import React, {useState, useEffect} from 'react';
import NewsItem from "../NewsItem/NewsItem.jsx";

export default function NewsBoard({category}) {
    const [articles, setArticles] = useState([]);

    console.log(process.env.REACT_APP_API_KEY);

    useEffect(()=> {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}`
        fetch(url)
        .then((response)=>response.json())
        .then((data)=>setArticles(data.articles))
       
    }, [category]);
  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      {articles.map((news, index)=>{
        return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} date={news.publishedAt} />
      })}
    </div>
  )
}
