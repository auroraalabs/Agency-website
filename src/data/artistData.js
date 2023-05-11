// src/artistData.js
import Facebook from "../assets/facebook-square-brands.svg";
import Twitter from "../assets/twitter-square-brands.svg";
import Instagram from "../assets/instagram-square-brands.svg";
import Youtube from "../assets/youtube-square-brands.svg";
import Spotify from "../assets/spotify-square-brands.svg";
import SoundCloud from "../assets/soundcloud-square-brands.svg";
import TikTok from "../assets/tiktok-square-brands.svg";

const artistData = [
  {
    topic: "Producer",
    title: "10DIGITS",
    subText: "We help clients to build great design to attract more customers",
    svg: "10digits.svg",
    links: [],
  },
  {
    topic: "Hip Hop",
    title: "Kemdilo Gold",
    subText:
      "We build appropriate solution to develop your website & app with best tools available",
    svg: "kemdilo.svg",
    links: [],
  },
  {
    topic: "Pop",
    title: "Henny Hendrix",
    subText:
      "Once your system is online, we will stay on hand to help you use it and provide technical support and maintenance for your business",
    svg: "henny.svg",
    links: [
      {
        name: "Facebook",
        asset: Facebook,
        link: "https://www.facebook.com/hennyhendrix/",
      },
      {
        name: "Twitter",
        asset: Twitter,
        link: "https://twitter.com/hendrxhenny",
      },
      {
        name: "Instagram",
        asset: Instagram,
        link: "https://www.instagram.com/supersaiyanhenny/",
      },
      {
        name: "YouTube",
        asset: Youtube,
        link: "https://www.youtube.com/watch?v=vMJ16yKSX2Q&feature=youtu.be",
      },
      {
        name: "Spotify",
        asset: Spotify,
        link: "https://open.spotify.com/artist/4wMpgaN0k5SNmt6ep9ttxq",
      },
      {
        name: "SoundCloud",
        asset: SoundCloud,
        link: "https://soundcloud.com/hennyhendrx",
      },
      {
        name: "TikTok",
        asset: TikTok,
        link: "https://www.tiktok.com/@hennyhendrx",
      },
    ],
  },
];

export default artistData;
