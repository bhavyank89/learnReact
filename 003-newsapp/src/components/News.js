import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            currentPage: 1,
            nextPage: 2,
            totalPage: 0
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=13ea8cd3e420423b9bad251fbca94214&page=${this.state.currentPage}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalPage: Math.ceil(parsedData.totalResults / parsedData.articles.length) });
    }

    handleNextonClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=13ea8cd3e420423b9bad251fbca94214&page=${this.state.currentPage + 1}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, currentPage: this.state.currentPage + 1, nextPage: this.state.currentPage + 1 });
    }
    handlePrevonClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=13ea8cd3e420423b9bad251fbca94214&page=${this.state.currentPage - 1}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, currentPage: this.state.currentPage - 1, nextPage: this.state.currentPage + 1 });
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
                    <div className="container d-flex justify-content-between">
                        <button onClick={this.handlePrevonClick} disabled={this.state.currentPage <= 1} className="btn btn-dark mx-3">&larr; Previous</button>
                        <button onClick={this.handleNextonClick} disabled={this.state.currentPage === this.state.totalPage} className="btn btn-dark mx-3">Next &rarr;</button>
                    </div>
                </div>
            </>
        )
    }
}