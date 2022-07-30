import homeverseBrandNameImg from "../assets/images/brand names/homeverse-brand-name-img.png";

import blogWebsiteBrandNameImg from "../assets/images/brand names/news-flash-brand-name.png";
import blogWebsiteMobileImg1 from "../assets/images/mobile images/news-website-mobile-img-1.png";
import blogWebsiteMobileImg2 from "../assets/images/mobile images/news-website-mobile-img-2.png";

import ECommerceWebsiteBrandNameImg from "../assets/images/brand names/smart-brand-name-img.png";
import ECommerceWebsiteMobileImg1 from "../assets/images/mobile images/smart-mobile-img-1.jpg";
import ECommerceWebsiteMobileImg2 from "../assets/images/mobile images/smart-mobile-img-2.png";

import movieAppBrandNameImg from "../assets/images/brand names/t-movies-brand-name.png";
import movieAppMobileImg1 from "../assets/images/mobile images/movie-app-mobile-img-1.png";
import movieAppMobileImg2 from "../assets/images/mobile images/movie-app-mobile-img-2.png";

import sneakersWebsiteBrandNameImg from "../assets/images/brand names/sneakers-brand-name-img.png";
import sneakersWebsiteMobileImg1 from "../assets/images/mobile images/sneakers-website-mobile-img-1.png";
import sneakersWebsiteMobileImg2 from "../assets/images/mobile images/sneakers-website-mobile-img-2.png";

import gymWebsiteBrandNameImg from "../assets/images/brand names/be-fit-brand-name-img.png";
import gymWebsiteMobileImg1 from "../assets/images/mobile images/gym-website-mobile-img-1.png";
import gymWebsiteMobileImg2 from "../assets/images/mobile images/gym-website-mobile-img-2.png";

import { getImgURL, getVideoURL } from "../api/provideURL";

export const allWorks = [
    {
        id: 1,

        heading: "S Mart",
        info: "frontend & backend development",
        img: getImgURL("smart-img"),
        yearOfProduction: 2022,

        brandingColor: "cadetblue",
        brandImg:
            "https://images.unsplash.com/photo-1580943943004-6a4697b70059?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FkZ2V0c3xlbnwwfHwwfGJsYWNrfA%3D%3D&auto=format&fit=crop&w=600&q=60",
        brandNameImg: ECommerceWebsiteBrandNameImg,
        video: getVideoURL("smart-video"),

        mobileImg1: ECommerceWebsiteMobileImg1,
        mobileImg2: ECommerceWebsiteMobileImg2,
        mobileVideo: getVideoURL("smart-mobile-video"),

        link: "https://smart-shopping-website.netlify.app",
        inSiteLinkText: "smart",
    },
    {
        id: 2,

        heading: "NewsFlash",
        yearOfProduction: 2021,
        info: "interaction & development",
        img: getImgURL("news-flash-img"),

        brandingColor: "#d7d7d7",
        brandImg:
            "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        brandNameImg: blogWebsiteBrandNameImg,
        video: getVideoURL("news-flash-website-video"),

        link: "https://blog-website.pages.dev",
        inSiteLinkText: "news-flash",

        mobileVideo: getVideoURL("news-flash-website-mobile-video"),
        mobileImg1: blogWebsiteMobileImg1,
        mobileImg2: blogWebsiteMobileImg2,
    },
    {
        id: 3,

        heading: "T Movies",
        info: "interaction & development",
        img: getImgURL("t-movies-img"),
        yearOfProduction: 2022,

        brandingColor: "#ffa901",
        brandImg:
            "https://images.unsplash.com/photo-1515091415679-aba3be00bfb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhbWVyYSUyMHJvbGx8ZW58MHx8MHx3aGl0ZXw%3D&auto=format&fit=crop&w=600&q=60",
        brandNameImg: movieAppBrandNameImg,

        video: getVideoURL("t-movies-video"),

        link: "https://t-movie-app.netlify.app",
        inSiteLinkText: "t-movies",

        mobileVideo: getVideoURL("t-movies-mobile-video"),
        mobileImg1: movieAppMobileImg1,
        mobileImg2: movieAppMobileImg2,
    },
    {
        id: 4,

        heading: "HomeVerse",
        info: "interaction & development",
        yearOfProduction: 2022,
        img: getImgURL("home-verse-img"),

        brandingColor: "rgb(255, 103, 77) ",
        brandImg:
            "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
        brandNameImg: homeverseBrandNameImg,

        video: getVideoURL("home-verse-video"),
        link: "https://home-verse.netlify.app",
        inSiteLinkText: "home-verse",

        tabletVideo: getVideoURL("home-verse-tablet-video"),
    },
    {
        id: 5,

        heading: "Sneakers",
        info: "interaction & development",
        yearOfProduction: 2022,
        img: getImgURL("sneakers-website-img"),

        brandingColor: "orange",
        brandImg: getImgURL("sneakers-website-brand-img"),
        brandNameImg: sneakersWebsiteBrandNameImg,

        video: getVideoURL("sneakers-website-video"),

        link: "https://frontend-project-2-lightbox-website.netlify.app",
        inSiteLinkText: "sneakers",

        mobileVideo: getVideoURL("sneakers-website-mobile-video"),
        mobileImg1: sneakersWebsiteMobileImg1,
        mobileImg2: sneakersWebsiteMobileImg2,
    },
    {
        id: 6,

        heading: "Microsoft clone",
        info: "interaction & development",
        yearOfProduction: 2020,
        img: getImgURL("microsoft-clone-img"),

        brandingColor: "gray",
        brandImg:
            "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2hpdGUlMjBiZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        brandNameImg: "https://cdn-icons-png.flaticon.com/128/732/732070.png",
        video: getVideoURL("microsoft-clone-video"),

        link: "https://microsoft-clone-1.netlify.app/",
        inSiteLinkText: "microsoft-clone",
    },
    {
        id: 7,

        heading: "BEFIT",
        info: "interaction & development",
        yearOfProduction: 2022,
        img: getImgURL("gym-website-img"),

        brandingColor: "#ae1717",
        brandImg:
            "https://images.unsplash.com/photo-1526314149856-d8cf115d62f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1949&q=80",
        brandNameImg: gymWebsiteBrandNameImg,
        video: getVideoURL("gym-website-video"),

        link: "https://gym-website-1.netlify.app",
        inSiteLinkText: "befit",

        mobileVideo: getVideoURL("gym-website-mobile-video"),
        mobileImg1: gymWebsiteMobileImg1,
        mobileImg2: gymWebsiteMobileImg2,
    },
];
