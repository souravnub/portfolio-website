export const genURL = ({ contentType, assetName }) => {
    return `https://res.cloudinary.com/sourav-cloudinary-account/${contentType}/upload/${assetName}.${
        contentType === "video" ? "mp4" : "jpg"
    }`;
};

export const getVideoURL = (name) => {
    return `https://res.cloudinary.com/sourav-cloudinary-account/video/upload/${name}.mp4`;
};

export const getImgURL = (name) => {
    return `https://res.cloudinary.com/sourav-cloudinary-account/image/upload/${name}.jpg`;
};
