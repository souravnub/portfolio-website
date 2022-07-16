import homverseImg from "../assets/images/home-verse-pic.png";
import homeverseBrandNameImg from "../assets/images/brand names/homeverse-brand-name-img.png";
import homeverseVideo from "../assets/videos/home-verse-video.mp4";
import homeverseTabletVideo from "../assets/videos/home-verse-tablet-video.mp4";

import blogWebsiteImg from "../assets/images/blog-website-pic.png";
import blogWebsiteBrandNameImg from "../assets/images/brand names/news-flash-brand-name.png";
import blogWebsiteVideo from "../assets/videos/blog-website-video.mp4";
import blogWebsiteMobileVideo from "../assets/videos/news-website-mobile-video-7.mp4";
import blogWebsiteMobileImg1 from "../assets/images/mobile images/news-website-mobile-img-1.png";
import blogWebsiteMobileImg2 from "../assets/images/mobile images/news-website-mobile-img-2.png";

import ECommerceWebsiteImg from "../assets/images/e-commerce-website-pic.png";
import ECommerceWebsiteVideo from "../assets/videos/e-commerce-website-video.mp4";
import ECommerceWebsiteBrandNameImg from "../assets/images/brand names/smart-brand-name-img.png";
import ECommerceWebsiteMobileImg1 from "../assets/images/mobile images/smart-mobile-img-1.jpg";
import ECommerceWebsiteMobileImg2 from "../assets/images/mobile images/smart-mobile-img-2.png";
import ECommerceWebsiteMobileVideo from "../assets/videos/smart-mobile-video.mp4";

import movieAppImg from "../assets/images/movie-app-pic.png";
import movieAppVideo from "../assets/videos/t-movies-video.mp4";
import movieAppBrandNameImg from "../assets/images/brand names/t-movies-brand-name.png";
import movieAppMobileVideo from "../assets/videos/movie-app-mobile-video.mp4";
import movieAppMobileImg1 from "../assets/images/mobile images/movie-app-mobile-img-1.png";
import movieAppMobileImg2 from "../assets/images/mobile images/movie-app-mobile-img-2.png";

import microsoftCloneImg from "../assets/images/microsoft-clone-img.jpg";
import microsoftCloneVideo from "../assets/videos/microsoft-clone-video.mp4";

import sneakersWebsiteImg from "../assets/images/sneakers website.jpg";
import sneakersWebsiteBrandImg from "../assets/images/sneakers-website-brand-img.jpg";
import sneakersWebsiteVideo from "../assets/videos/sneakers-website-editted.mp4";
import sneakersWebsiteBrandNameImg from "../assets/images/brand names/sneakers-brand-name-img.png";
import sneakersWebsiteMobileVideo from "../assets/videos/sneakers-website-mobile-video.mp4";
import sneakersWebsiteMobileImg1 from "../assets/images/mobile images/sneakers-website-mobile-img-1.png";
import sneakersWebsiteMobileImg2 from "../assets/images/mobile images/sneakers-website-mobile-img-2.png";

import gymWebsiteImg from "../assets/images/gym website.jpg";
import gymWebsiteBrandNameImg from "../assets/images/brand names/be-fit-brand-name-img.png";
import gymWebsiteVideo from "../assets/videos/gym-website-editted.mp4";
import gymWebsiteMobileVideo from "../assets/videos/gym-website-mobile-video.mp4";
import gymWebsiteMobileImg1 from "../assets/images/mobile images/gym-website-mobile-img-1.png";
import gymWebsiteMobileImg2 from "../assets/images/mobile images/gym-website-mobile-img-2.png";

export const allWorks = [
    {
        id: 1,

        heading: "S Mart",
        info: "frontend & backend development",
        img: ECommerceWebsiteImg,
        yearOfProduction: 2022,

        brandingColor: "cadetblue",
        brandImg:
            "https://images.unsplash.com/photo-1580943943004-6a4697b70059?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FkZ2V0c3xlbnwwfHwwfGJsYWNrfA%3D%3D&auto=format&fit=crop&w=600&q=60",
        brandNameImg: ECommerceWebsiteBrandNameImg,
        video: ECommerceWebsiteVideo,

        mobileImg1: ECommerceWebsiteMobileImg1,
        mobileImg2: ECommerceWebsiteMobileImg2,
        mobileVideo: ECommerceWebsiteMobileVideo,

        link: "https://smart-shopping-website.netlify.app",
        inSiteLinkText: "smart",
    },
    {
        id: 2,

        heading: "NewsFlash",
        yearOfProduction: 2021,
        info: "interaction & development",
        img: blogWebsiteImg,

        brandingColor: "#d7d7d7",
        brandImg:
            "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        brandNameImg: blogWebsiteBrandNameImg,
        video: blogWebsiteVideo,

        link: "https://blog-website.pages.dev",
        inSiteLinkText: "news-flash",

        mobileVideo: blogWebsiteMobileVideo,
        mobileImg1: blogWebsiteMobileImg1,
        mobileImg2: blogWebsiteMobileImg2,
    },
    {
        id: 3,

        heading: "T Movies",
        info: "interaction & development",
        img: movieAppImg,
        yearOfProduction: 2022,

        brandingColor: "#ffa901",
        brandImg:
            "https://images.unsplash.com/photo-1515091415679-aba3be00bfb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhbWVyYSUyMHJvbGx8ZW58MHx8MHx3aGl0ZXw%3D&auto=format&fit=crop&w=600&q=60",
        brandNameImg: movieAppBrandNameImg,

        video: movieAppVideo,

        link: "https://t-movie-app.netlify.app",
        inSiteLinkText: "t-movies",

        mobileVideo: movieAppMobileVideo,
        mobileImg1: movieAppMobileImg1,
        mobileImg2: movieAppMobileImg2,
    },
    {
        id: 4,

        heading: "HomeVerse",
        info: "interaction & development",
        yearOfProduction: 2022,
        img: homverseImg,

        brandingColor: "rgb(255, 103, 77) ",
        brandImg:
            "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
        brandNameImg: homeverseBrandNameImg,

        video: homeverseVideo,
        link: "https://home-verse.netlify.app",
        inSiteLinkText: "home-verse",

        tabletVideo: homeverseTabletVideo,
    },
    {
        id: 5,

        heading: "Sneakers",
        info: "interaction & development",
        yearOfProduction: 2022,
        img: sneakersWebsiteImg,

        brandingColor: "orange",
        brandImg: sneakersWebsiteBrandImg,
        brandNameImg: sneakersWebsiteBrandNameImg,

        video: sneakersWebsiteVideo,

        link: "https://frontend-project-2-lightbox-website.netlify.app",
        inSiteLinkText: "sneakers",

        mobileVideo: sneakersWebsiteMobileVideo,
        mobileImg1: sneakersWebsiteMobileImg1,
        mobileImg2: sneakersWebsiteMobileImg2,
    },
    {
        id: 6,

        heading: "Microsoft clone",
        info: "interaction & development",
        yearOfProduction: "2020 (just started)",
        img: microsoftCloneImg,

        brandingColor: "gray",
        brandImg:
            "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2hpdGUlMjBiZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        brandNameImg: "https://cdn-icons-png.flaticon.com/128/732/732070.png",
        video: microsoftCloneVideo,

        link: "https://microsoft-clone-1.netlify.app/",
        inSiteLinkText: "microsoft-clone",

        // add tablet video ... wasn't able to do so because the site was blocked by google
    },
    {
        id: 7,

        heading: "BEFIT",
        info: "interaction & development",
        yearOfProduction: 2022,
        img: gymWebsiteImg,

        brandingColor: "#ae1717",
        brandImg:
            "https://images.unsplash.com/photo-1526314149856-d8cf115d62f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1949&q=80",
        brandNameImg: gymWebsiteBrandNameImg,
        video: gymWebsiteVideo,

        link: "https://gym-website-1.netlify.app",
        inSiteLinkText: "befit",

        mobileVideo: gymWebsiteMobileVideo,
        mobileImg1: gymWebsiteMobileImg1,
        mobileImg2: gymWebsiteMobileImg2,
    },
];
