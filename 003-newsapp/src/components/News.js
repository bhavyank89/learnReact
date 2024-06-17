import React,{Component} from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
    render(){
        return (
            <>
            <div className="container my-3">
                <h2>New Monkey - Top Headings</h2>
                <div className="row  my-1">
                    <div className="col-md-4">
                        <NewsItem title="myTitle" description="myDesc"/>
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="myTitle" description="myDesc"/>
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="myTitle" description="myDesc"/>
                    </div>
                </div>
                <div className="row  my-1">
                    <div className="col-md-4">
                        <NewsItem title="myTitle" description="myDesc"/>
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="myTitle" description="myDesc"/>
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="myTitle" description="myDesc"/>
                    </div>
                </div>
                <div className="row  my-1">
                    <div className="col-md-4">
                        <NewsItem title="myTitle" description="myDesc"/>
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="myTitle" description="myDesc"/>
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="myTitle" description="myDesc"/>
                    </div>
                </div>
            </div>
            </>
        )
    }
}