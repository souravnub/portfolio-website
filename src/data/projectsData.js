// the path for the videos is with respect to the projectsSection component
import awwardsVideo from "../assets/videos/awwards-website-editted.mp4";
import gymWebsiteVideo from "../assets/videos/gym-website-editted.mp4";
import blueSeaWebsiteVideo from "../assets/videos/sea-website-editted.mp4";
import frontendMentorWebsite from "../assets/videos/frontend-mentor-editted.mp4";
import heroSectionWebsite from "../assets/videos/hero-section-editted.mp4";
import newsWebsite from "../assets/videos/news-website-editted.mp4";
import sneakersWebsite from "../assets/videos/sneakers-website-editted.mp4";
import ticTacToeWebsiteAsset from "../assets/images/tic-tac-toe-asset.jpg";

let assetsArr = [
    frontendMentorWebsite,
    gymWebsiteVideo,
    blueSeaWebsiteVideo,
    awwardsVideo,
    heroSectionWebsite,
    newsWebsite,
    sneakersWebsite,
    ticTacToeWebsiteAsset,
];
let brandColorArr = [
    "#dbd789",
    "#d38d8d",
    "#343f68",
    "#cfcfcf",
    "#e7e7e7",
    "#c0cadc",
    "#f6ddb5",
    "#192a33cf",
];
let count = 0;
export const projects = assetsArr.map((asset, idx) => {
    count += 1;
    return {
        id: count,
        video: asset.includes(".mp4") ? asset : null,
        img: asset.includes(".jpg") ? asset : null,
        brandColor: brandColorArr[idx],
    };
});
