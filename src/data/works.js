import { getImgURL, getVideoURL } from "../utils/provideURL";

export const allWorks = [
    {
        id: 1,

        heading: "S Mart",
        info: "frontend & backend development",
        img: getImgURL("smart-img.png"),
        yearOfProduction: 2022,
        techUsed: ["react", "node", "express", "mongoDB", "scss", "jwt"],
        description:
            "A fictional e-commerce website built with modern techonologies. A user can have a real e-commerce experience, including : managing cart and wishlist, sending messages to the owner, rating and adding comments to the product and can use all authetication features. A separate dashboard for owner helps him/her to  manage all the products, reply incomming customers' messages, perform CRUD operations on the products and manage all the orders, users and comments on the products.",
        skillsEnhanced: [
            {
                name: "layout",
                desc: "While working on this website, a good layout was something that I kept in my mind. Therefore, the website gave me a chance to brush my layout designing skills.",
            },
            {
                name: "backend",
                desc: "This website helped me to step into backend development and gave me a chance to learn the basics. I got a grip over nodejs, mongodb and a number of concepts related to the storing of data in a DB came into my acknowledgement.",
            },
            {
                name: "hashing and jwt",
                desc: "How important it is to secure data of the users in the database was something that I learnt while creating the website. Using JWTs to store information of the user on the frontend and Hashing passwords while storing them in DB were the key learnings that I got.",
            },
        ],
        learning: "Make mistakes to make something big",

        brandingColor: "cadetblue",
        brandImg:
            "https://images.unsplash.com/photo-1580943943004-6a4697b70059?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FkZ2V0c3xlbnwwfHwwfGJsYWNrfA%3D%3D&auto=format&fit=crop&w=600&q=60",
        brandNameImg: getImgURL("s-mart-brand-name-img.png"),
        video: getVideoURL("s-mart-desktop-video.mkv"),

        mobileImg1: getImgURL("s-mart-mobile-img-1.png"),
        mobileImg2: getImgURL("s-mart-mobile-img-2.png"),
        mobileVideo: getVideoURL("s-mart-mobile-video.mkv"),

        link: "https://smart-shopping-website.netlify.app",
        github: "https://github.com/souravnub/smart-shopping-website-frontend",
        inSiteLinkText: "smart",
    },
    {
        id: 2,

        heading: "NewsFlash",
        yearOfProduction: 2021,
        info: "interaction & development",
        img: getImgURL("newsflash-img.png"),
        techUsed: ["html", "scss", "js"],
        description:
            "A fictional blogging website made for learning purpose with a magnificent grid design throughout the website,awsome color scheme and interactivity",
        skillsEnhanced: [
            {
                name: "layout",
                desc: "The centeral idea of the website reloves around the grid design that it has. Different sections of the website contain deifferent use-cases of grid based layout. Hence, the website helped me a lot with the understanding of the grid designs.",
            },
            {
                name: "color scheme",
                desc: "Not only the wesbite's color scheme is eye-catching, but it also have a dark theme option. Hence, along with helping me to understand the idea laying behind the theme switching,it also made me quite comfortable to work with colors.",
            },
            {
                name: "fundamentals",
                desc: "The website is fully creted with vanilla JS, Html and Scss. Therefore, working with this website also gave me a chance to brush up my fundamentals.",
            },
            {
                name: "replication",
                desc: "The website design is not mine, I tried to replicate a website from a YouTube video. The results at the end where quite pleasing as I was successfully able to replicate the complete website, along with giving attention to each and every design detail.",
            },
        ],
        learning: "Learn as you move",

        brandingColor: "#d7d7d7",
        brandImg:
            "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        brandNameImg: getImgURL("newsflash-brand-name-img.png"),
        video: getVideoURL("newsflash-desktop-video.mkv"),

        link: "https://blog-website.pages.dev",
        github: "https://github.com/souravnub/Blog-website",
        inSiteLinkText: "news-flash",

        mobileVideo: getVideoURL("newsflash-mobile-video.mkv"),
        mobileImg1: getImgURL("newsflash-mobile-img-1.png"),
        mobileImg2: getImgURL("newsflash-mobile-img-2.png"),
    },
    {
        id: 3,

        heading: "T Movies",
        info: "interaction & development",
        img: getImgURL("t-movies-img.png"),
        yearOfProduction: 2022,
        techUsed: ["react", "TMDB api", "scss"],
        description:
            "A web app that lays out all the current popular movies & TV shows. One can have a glance over movies/TV shows of different categories and can add them to a bookmark list as desirable. The quick glance includes : Trailer of the movie/show , the contributers (actors, directors etc.), similar movies/TV shows and  a short description. ",
        skillsEnhanced: [
            {
                name: "working with API",
                desc: "Making a website that uses a third party API is a skill that every developer should keep in handy. T-movies gave me a chance to have a similar expirence, where I used TMDB (the movie database) API for fetching all the movies and TV shows for this react-app.",
            },
            {
                name: "state management",
                desc: "This is a react app that uses react-redux-toolkit for managing state. Hence, making this website gave me a chance to deep-dive into best react state management practices.",
            },
        ],
        learning:
            "Why are you trying so hard to fit in when you were born to stand out. ",

        brandingColor: "#ffa901",
        brandImg:
            "https://images.unsplash.com/photo-1515091415679-aba3be00bfb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhbWVyYSUyMHJvbGx8ZW58MHx8MHx3aGl0ZXw%3D&auto=format&fit=crop&w=600&q=60",
        brandNameImg: getImgURL("t-movies-brand-name-img.png"),

        video: getVideoURL("t-movies-desktop-video.mkv"),

        link: "https://t-movie-app.netlify.app",
        github: "https://github.com/souravnub/movie-app",
        inSiteLinkText: "t-movies",

        mobileVideo: getVideoURL("t-movies-mobile-video.mkv"),
        mobileImg1: getImgURL("t-movies-mobile-img-1.png"),
        mobileImg2: getImgURL("t-movies-mobile-img-2.png"),
    },
    {
        id: 4,

        heading: "HomeVerse",
        info: "interaction & development",
        yearOfProduction: 2022,
        img: getImgURL("homeverse-img.png"),
        techUsed: ["html", "scss", "js"],
        description:
            "A fictional, static website for a property dealing/rental company (Homeverse). Along with an eye-catching design, the website is also completely responsive and interactive.",

        brandingColor: "rgb(255, 103, 77) ",
        brandImg:
            "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
        brandNameImg: getImgURL("homeverse-brand-name-img.png"),

        video: getVideoURL("homeverse-desktop-video.mkv"),
        link: "https://home-verse.netlify.app",
        github: "https://github.com/souravnub/HomeVerse--home-selling-website",
        inSiteLinkText: "home-verse",

        tabletVideo: getVideoURL("homeverse-tablet-video"),
    },
    {
        id: 5,

        heading: "Sneakers",
        info: "interaction & development",
        yearOfProduction: 2022,
        img: getImgURL("sneakers-website-img.png"),
        techUsed: ["react", "scss"],

        description:
            "A simple react app made for a fictional shoe company, this website was one of the early websites that I made with react. It includes a carousel with a little cart feature that replicates the cart in modern-day e-commerce websites.The website being an early stepping stone in my react journey, I thought it was worthwhile giving it a place in my portfolio.",

        brandingColor: "orange",
        brandImg: getImgURL("sneakers-website-brand-img"),
        brandNameImg: getImgURL("sneakers-brand-name-img.png"),

        video: getVideoURL("sneakers-desktop-video.mkv"),

        link: "https://frontend-project-2-lightbox-website.netlify.app",
        inSiteLinkText: "sneakers",

        mobileVideo: getVideoURL("sneakers-mobile-video.mkv"),
        mobileImg1: getImgURL("sneakers-mobile-img-1.png"),
        mobileImg2: getImgURL("sneakers-mobile-img-2.png"),
    },

    {
        id: 6,

        heading: "BEFIT",
        info: "interaction & development",
        yearOfProduction: 2022,
        img: getImgURL("gym-website-img.png"),
        techUsed: ["html", "css", "js"],
        description:
            "A static, accessible and responsive  gym website made with html,css & js. This website intends to replicate a modern gym website, thereby giving complete deatils about the type of services that the gym offers, listing out professional trainers and reviews of the customers and also the pricing plans avaiable.",

        brandingColor: "#ae1717",
        brandImg:
            "https://images.unsplash.com/photo-1526314149856-d8cf115d62f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1949&q=80",
        brandNameImg: getImgURL("befit-brand-name-img.png"),

        video: getVideoURL("befit-desktop-video.mkv"),
        tabletImg: getImgURL("befit-tablet-img.png"),

        link: "https://gym-website-1.netlify.app",
        github: "https://github.com/souravnub/gym-website",
        inSiteLinkText: "befit",
    },
];
