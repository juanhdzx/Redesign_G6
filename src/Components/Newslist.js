import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Newsitem from './Newsitem'

function Newslist() {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d36739fd143e43a583f27265996997aa')
            console.log(response)
            setArticles(response.data.articles)
        }
        getArticles()
    }, [])
    return (
        <div class="d-flex align-items-start">
            <img src="wikilogo.png"
                width="200" px

            />
            <div>
                {articles.map(article => {
                    return (
                        <Newsitem
                            title={article.title}
                            description={article.description}
                            url={article.url}
                            urlToImage={article.urlToImage}
                        />
                        
                    )
                })}
            </div>
        </div>
    )
}

export default Newslist;
