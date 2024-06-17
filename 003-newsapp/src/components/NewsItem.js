import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, description, imgSrc, newsUrl } = this.props;
        return (
            <div>
                <div className="card my-3" style={{ width: "18rem" }}>
                    <img src={imgSrc ? imgSrc : "https://www.hindustantimes.com/ht-img/img/2024/06/16/1600x900/ANI-20240609316-0_1718533239088_1718533307177.jpg"} style={{ width: "100%", height: "200px" }} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title} ...<span style={{ fontSize: "15px", fontWeight: "500" }}>read More</span></h5>
                        <p className="card-text">{description} ...<span style={{ fontSize: "15px", fontWeight: "500" }}>read More</span></p>
                        <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
