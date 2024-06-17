import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
    articles = [
        {
            "source": {
                "id": "hacker-news",
                "name": "Hacker News"
            },
            "author": null,
            "title": "bigscience/T0pp · Hugging Face",
            "description": "We’re on a journey to advance and democratize artificial intelligence through open source and open science.",
            "url": "https://huggingface.co/bigscience/T0pp",
            "urlToImage": "https://huggingface.co/front/thumbnails/v2-2.png",
            "publishedAt": "2021-10-18T16:37:20.4140551Z",
            "content": "Model Description\r\nT0* is a series of encoder-decoder models trained on a large set of different tasks specified in natural language prompts. We convert numerous English supervised datasets into prom… [+11344 chars]"
        },
        {
            "source": {
                "id": "hacker-news",
                "name": "Hacker News"
            },
            "author": null,
            "title": "Opening up a physics simulator for robotics",
            "description": "As part of DeepMind's mission of advancing science, we have acquired the MuJoCo physics simulator and are making it freely available for everyone, to support research everywhere.",
            "url": "https://deepmind.com/blog/announcements/mujoco",
            "urlToImage": "https://lh3.googleusercontent.com/jVZ3VN7wwx2dSowqLmhqm0qAzAmcb-1t7ks3HiNnoHknihF5sl9VDEwuCNTSxfx8jFIi7mBQkvHUdnSKXSPgYLNpvCuE4YajJeMnrYA",
            "publishedAt": "2021-10-18T16:07:20.4749314Z",
            "content": "Advancing research everywhere with the acquisition of MuJoCo\r\nWhen you walk, your feet make contact with the ground. When you write, your fingers make contact with the pen. Physical contacts are what… [+1849 chars]"
        },
        {
            "source": {
                "id": "national-geographic",
                "name": "National Geographic"
            },
            "author": "Nadia Drake",
            "title": "How these feuding map-makers shaped our fascination with Mars",
            "description": "One was an artist who loved space. His rival was a bold professional astronomer. Their race to map the red planet sparked decades of science and speculation.",
            "url": "https://www.nationalgeographic.com/science/2021/02/how-feuding-map-makers-shaped-our-fascination-with-mars.html",
            "urlToImage": "https://pmdvod.nationalgeographic.com/NG_Video/788/579/smpost_1612381336455.jpg",
            "publishedAt": "2021-02-17T14:37:21.3706142Z",
            "content": null
        },
        {
            "source": {
                "id": "national-geographic",
                "name": "National Geographic"
            },
            "author": null,
            "title": "Episode 3: Why War Zones Need Science Too",
            "description": "Undaunted by Yemen’s civil war, National Geographic explorer Ella Al-Shamahi searches on the island of Socotra for traces of the earliest known humans to leave Africa.",
            "url": "https://www.nationalgeographic.com/podcasts/overheard/season-5/episode-3-why-war-zones-need-science.html",
            "urlToImage": "https://pmdvod.nationalgeographic.com/NG_Video/788/579/smpost_1612381336455.jpg",
            "publishedAt": "2021-02-17T14:37:20.2759318Z",
            "content": null
        }
    ];
    constructor() {
        super();
        console.log("Inside constructor of News.js file");
        this.state = {
            articles: this.articles,
            loading: false
        }
    }
    render() {
        return (
            <>
                <div className="container my-3">
                    <h2>New Monkey - Top Headings</h2>
                    <div className="row  my-1">
                        {this.state.articles.map((element) => {
                            return <div key={element.url} className="col-md-4">
                                <NewsItem title={element.title.slice(0,45)} description={element.description.slice(0,80)} imgSrc={element.urlToImage} newsUrl={element.url} />
                            </div>
                        })}
                    </div>

                </div>
            </>
        )
    }
}