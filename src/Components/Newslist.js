import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Newsitem from './Newsitem'

function Newslist() {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get('https://newsdata.io/api/1/news?apikey=pub_10149ce4982a73dc9b1509533045a099c97b8&q=business&country=us&language=en&category=business')
            console.log(response)
            setArticles(response.data.results)
        }
        getArticles()
    }, [])
    return (
        
        <div class="d-flex align-items-start">
            {/* <img src="wikilogo.png"
                width="200" px

            /> */}
            <h1>Wikipedia Commons</h1>
            <div className="News-li">
                {articles.map(article => {
                    return (
                        <Newsitem
                            title={article.title}
                            description={article.description}
                            url={article.url}
                            urlToImage={article.image_url}
                        />
                        
                    )
                })}
            </div>
        </div>
    )
}

export default Newslist;
