export function genURL({ contentType, assetName }) {
    if (contentType === "image") {
        return getImgURL(assetName);
    } else if (contentType === "video") {
        return getVideoURL(assetName);
    } else {
        return "";
    }
}

export function getVideoURL(name) {
    return `https://res.cloudinary.com/sourav-cloudinary-account/video/upload/portfolio/videos/${name}`;
}

export function getImgURL(name) {
    return `https://res.cloudinary.com/sourav-cloudinary-account/image/upload/portfolio/images/${name}`;
}
