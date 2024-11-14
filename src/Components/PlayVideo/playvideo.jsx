import React, { useEffect, useState } from "react";
import "./playvideo.css";
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import emmy from "../../assets/logo_em.jpg";
import user_profile from "../../assets/user_profile.jpg";
import { API_KEY, value_converter } from "../../data";
import moment from "moment";
import { useParams } from "react-router-dom";

const playvideo = () => {
  const { videoId } = useParams();

  const [videoData, setVideoData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);

  const fetchVideoData = async () => {
    // Fetching video data
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDetails_url)
      .then((res) => res.json())
      .then((data) => setVideoData(data.items[0]));
  };

  const fetchOtherData = async () => {
    // Fetching channel data
    const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${videoData.snippet.channelId}&key=${API_KEY}`;
    await fetch(channelData_url)
      .then((res) => res.json())
      .then((data) => setChannelData(data.items[0]));

    // Fetching comments data
    const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=10&videoId=${videoId}&key=${API_KEY}`;
    await fetch(comment_url)
      .then((res) => res.json())
      .then((data) => setCommentData(data.items));
  };

  useEffect(() => {
    fetchVideoData();
  }, [videoId]);

  useEffect(() => {
    fetchOtherData();
  }, [videoData]);

  return (
    <div className="play-video basis-[69%]">
      <iframe
        className="w-full h-[37vw]"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <h3 className="mt-[10px] text-[22px]">
        {videoData ? videoData.snippet.title : "Title Here"}
      </h3>
      <div className="play-video-info flex items-center justify-between flex-wrap mt-[10px] text-[14px] text-[#5a5a5a]">
        <p>
          {value_converter(videoData ? videoData.statistics.viewCount : "1234")}{" "}
          Views &bull;{" "}
          {videoData
            ? moment(videoData.snippet.publishedAt).fromNow()
            : "123 days"}
        </p>
        <div className="flex">
          <span className="ml-[15px] items-center inline-flex">
            <img className="w-5 mr-2" src={like} alt="" />
            {value_converter(
              videoData ? videoData.statistics.likeCount : "1234"
            )}
          </span>
          <span className="ml-[15px] items-center inline-flex">
            <img className="w-5 mr-2" src={dislike} alt="" />
          </span>
          <span className="ml-[15px] items-center inline-flex">
            <img className="w-5 mr-2" src={share} alt="" />
            Share
          </span>
          <span className="ml-[15px] items-center inline-flex">
            <img className="w-5 mr-2" src={save} alt="" />
            Save
          </span>
        </div>
      </div>
      <hr className="b border-0 h-[1px] bg-[#ccc] my-[10px] mx-0" />
      <div className="publisher flex items-center mt-5">
        <img
          className="w-10 rounded-[50%] mr-[15px]"
          src={
            channelData ? channelData.snippet.thumbnails.default.url : `${emmy}`
          }
          alt=""
        />
        <div className="flex-1 leading-[18px]">
          <p className="text-black font-semibold text-[18px]">
            {videoData ? videoData.snippet.channelTitle : "ABC"}
          </p>
          <span className="text-[13px] text-[#5a5a5a]">
            {value_converter(
              channelData ? channelData.statistics.subscriberCount : `1M`
            )}{" "}
            Subscribers
          </span>
        </div>
        <button className="bg-red-600 text-white py-2 px-[30px] border-0 outline-0 rounded-[4px] cursor-pointer">
          Subscribe
        </button>
      </div>
      <div className="vid-description pl-[55px] my-[15px] mx-0">
        <p className="text-[14px] mb-[5px] text-[#5a5a5a]">
          {videoData
            ? videoData.snippet.description.slice(0, 250)
            : "Descriptions Here"}
        </p>
        <hr />
        <h4 className="text-[14px] text-[#5a5a5a] mt-[15px]">
          {value_converter(videoData ? videoData.statistics.commentCount : "0")}{" "}
          Comments
        </h4>
        {commentData.map((item, index) => {
          return (
            <div key={index} className="comment">
              <img
                src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}
                alt=""
              />
              <div>
                <h3>
                  {item.snippet.topLevelComment.snippet.authorDisplayName}{" "}
                  <span>
                    {moment(
                      item.snippet.topLevelComment.snippet.publishedAt
                    ).fromNow()}
                  </span>
                </h3>
                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className="comment-action">
                  <img src={like} alt="" />
                  <span>
                    {value_converter(
                      item.snippet.topLevelComment.snippet.likeCount
                    )}
                  </span>
                  <img src={dislike} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default playvideo;
