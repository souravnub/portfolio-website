import { genURL } from "../api/provideURL";

let assetsArr = [
    {
        contentType: "image",
        assetName: "frontend-mentor-website-img",
        brandColor: "#dbd789",
    },
    {
        contentType: "video",
        assetName: "blue-sea-website-video",
        brandColor: "#343f68",
    },
    {
        contentType: "image",
        assetName: "gym-website-img",
        brandColor: "#d28d8d",
    },
    {
        contentType: "video",
        assetName: "awwards-website-video",
        brandColor: "#cfcfcf",
    },
    {
        contentType: "image",
        assetName: "sneakers-website-img",
        brandColor: "#f6ddb5",
    },
    {
        contentType: "video",
        assetName: "hero-section-website-video",
        brandColor: "#e7e7e7",
    },
    {
        contentType: "image",
        assetName: "news-monkey-img",
        brandColor: "#c0cadc",
    },
    {
        contentType: "image",
        assetName: "tic-tac-toe-website-img",
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
