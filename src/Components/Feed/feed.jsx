import React, { useEffect, useState } from "react";
import "./feed.css";
import thumnail1 from "../../assets/thumbnail1.png";
import thumnail2 from "../../assets/thumbnail2.png";
import thumnail3 from "../../assets/thumbnail3.png";
import thumnail4 from "../../assets/thumbnail4.png";
import thumnail5 from "../../assets/thumbnail5.png";
import thumnail6 from "../../assets/thumbnail6.png";
import thumnail7 from "../../assets/thumbnail7.png";
import thumnail8 from "../../assets/thumbnail8.png";
import { Link } from "react-router-dom";
import { API_KEY, value_converter } from "../../data";
import moment from "moment";

const feed = ({ category }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
    await fetch(videoList_url)
      .then((response) => response.json())
      .then((data) => setData(data.items));
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className="feed grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-x-4 gap-y-[30px] mt-[15px]">
      {data.map((item, index) => {
        return (
          <Link
            to={`video/${item.snippet.categoryId}/${item.id}`}
            className="card"
            key={index}
          >
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <h2>{item.snippet.title}</h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>
              {value_converter(item.statistics.viewCount)} views &bull; &nbsp;
              <span>
                {value_converter(item.statistics.likeCount)} likes &bull; &nbsp;
              </span>
              <span>{moment(item.snippet.publishedAt).fromNow()}</span>
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default feed;
