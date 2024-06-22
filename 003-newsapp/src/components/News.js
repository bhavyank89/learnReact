import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
    constructor() {
        super();
        console.log("Inside constructor of News.js file");
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=13ea8cd3e420423b9bad251fbca94214`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles });
    }

    render() {
        return (
            <>
                <div className="container my-3">
                    <h2>New Monkey - Top Headings</h2>
                    <div className="row  my-1">
                        {this.state.articles.map((element) => {
                            return <div key={element.url} className="col-md-4">
                                <NewsItem title={element ? element.title : " "} description={element ? element.description : " "} imgSrc={element.urlToImage} newsUrl={element.url} />
                            </div>
                        })}
                    </div>
                </div>
            </>
        )
    }
}