import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./spinner";
import propTypes from "prop-types"

export default class News extends Component {

    static defaultProps = {
        country: "in",
        catogary: "general",
        pageSize: 3
    }
    static propTypes = {
        country: propTypes.string,
        catogary: propTypes.string,
        pageSize: propTypes.number,
    }

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
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catogary}&apiKey=13ea8cd3e420423b9bad251fbca94214&page=${this.state.currentPage}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalPage: Math.ceil(parsedData.totalResults / this.props.pageSize), loading: false });
    }

    handleNextonClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catogary}&apiKey=13ea8cd3e420423b9bad251fbca94214&page=${this.state.currentPage + 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, currentPage: this.state.currentPage + 1, nextPage: this.state.currentPage + 1, loading: false });
    }
    handlePrevonClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catogary}&apiKey=13ea8cd3e420423b9bad251fbca94214&page=${this.state.currentPage - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, currentPage: this.state.currentPage - 1, nextPage: this.state.currentPage + 1, loading: false });
    }

    render() {
        return (
            <>
                <div className="container my-3">
                    <h2>New Monkey - Top Headings</h2>
                    {this.state.loading && <Spinner />}
                    <div className="row  my-1">
                        {!this.state.loading && this.state.articles.map((element) => {
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