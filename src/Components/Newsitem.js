import React from 'react'
import "./newsitem.css"


function Newsitem({ title, description, url, urlToImage }) {


    return (

        <div className="news-app">
            <div class="card">

                {/* <img className="news-img"  src="{urlToImage}" class="card-img-top" alt="."/> */}
                {/* <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div> */}
            </div>


            <div className="news-item">
                <img className="news-img" src={urlToImage} alt={urlToImage} />
                <h3><a href={url}>{title}</a></h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Newsitem;