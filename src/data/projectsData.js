import { genURL } from "../utils/provideURL";

let assetsArr = [
    {
        contentType: "image",
        assetName: "frontend-mentor-website-img.jpg",
        brandColor: "#dbd789",
    },
    {
        contentType: "video",
        assetName: "blue-sea-website-video.mp4",
        brandColor: "#343f68",
    },
    {
        contentType: "image",
        assetName: "gym-website-img.jpg",
        brandColor: "#d28d8d",
    },
    {
        contentType: "video",
        assetName: "awwards-website-video.mp4",
        brandColor: "#cfcfcf",
    },
    {
        contentType: "image",
        assetName: "sneakers-website-img.jpg",
        brandColor: "#f6ddb5",
    },
    {
        contentType: "video",
        assetName: "hero-section-website-video.mkv",
        brandColor: "#e7e7e7",
    },
    {
        contentType: "image",
        assetName: "news-monkey-img.jpg",
        brandColor: "#c0cadc",
    },
    {
        contentType: "image",
        assetName: "tic-tac-toe-website-img.jpg",
        brandColor: "#192a33cf",
    },
];
export const projects = assetsArr.map(
    ({ brandColor, contentType, assetName }, idx) => {
        let url = genURL({ contentType, assetName });
        return {
            id: idx,
            video: contentType === "video" ? url : null,
            img: contentType === "image" ? url : null,
            brandColor: brandColor,
        };
    }
);
