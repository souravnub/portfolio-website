import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import ScrollTrigger from "gsap/ScrollTrigger";
import { setNavTextColor } from "../../features/navigation/navSlice";
import { useRef } from "react";
import "./singleWorkPage.scss";
import { allWorks } from "../../data/works";
import SingleWorkInfoHeader from "../../components/singleWorkInfoComponents/header/SingleWorkInfoHeader";
import SectionBelowHeader from "../../components/singleWorkInfoComponents/section below header/SectionBelowHeader";
import DesktopMockupSection from "../../components/singleWorkInfoComponents/desktop mockup section/DesktopMockupSection";
import MobileMockupSection from "../../components/singleWorkInfoComponents/mobiles mockup section/MobileMockupSection";
import TabletMockup from "../../components/mockups/tablet/TabletMockup";
import SingleWorkSectionFooter from "../../components/singleWorkInfoComponents/footer/SingleWorkSectionFooter";
import ProjectLearningsSection from "../../components/singleWorkInfoComponents/project learnings section/ProjectLearningsSection";

const SingleWorkPage = () => {
    let { work: currentLink } = useParams();

    let dispatch = useDispatch();
    let mainWorkPageContainerRef = useRef();

    useEffect(() => {
        const container = mainWorkPageContainerRef.current;

        const resize_ob = new ResizeObserver(function () {
            ScrollTrigger.refresh();
        });

        resize_ob.observe(container);

        return () => {
            resize_ob.unobserve(container);
        };
    }, []);

    let {
        id,
        heading,
        info,
        yearOfProduction,
        link,
        github,
        video,
        brandImg,
        brandNameImg,
        mobileImg1,
        mobileImg2,
        mobileVideo,
        tabletVideo,
        tabletImg,
        techUsed,
        description,
        skillsEnhanced,
        learning,
    } = allWorks.find((work) => work.inSiteLinkText === currentLink);

    useEffect(() => {
        dispatch(setNavTextColor("black"));

        mainWorkPageContainerRef.current.style.paddingTop =
            document.querySelector(".top-navigation").getBoundingClientRect()
                .height + "px";
    }, []);

    return (
        <div
            ref={mainWorkPageContainerRef}
            className="route-transition-container">
            <SingleWorkInfoHeader
                siteName={heading}
                servicesInfo={info}
                yearOfProduction={yearOfProduction}
                techUsed={techUsed}
                description={description}
            />
            <SectionBelowHeader
                brandImg={brandImg}
                liveSiteLink={link}
                githubLink={github}
                brandNameImg={brandNameImg}
            />
            {video && (
                <DesktopMockupSection data={{ type: "video", source: video }} />
            )}
            {(mobileImg1 || mobileImg2 || mobileVideo) && (
                <MobileMockupSection
                    data={{ mobileImg1, mobileImg2, mobileVideo }}
                />
            )}
            {tabletVideo && (
                <TabletMockup
                    asset={{ type: "video", source: tabletVideo }}
                    showBg={(mobileImg1 || mobileImg2 || mobileVideo) && true}
                />
            )}
            {tabletImg && (
                <TabletMockup asset={{ type: "img", source: tabletImg }} />
            )}
            {skillsEnhanced && (
                <ProjectLearningsSection
                    skillsEnhancedArr={skillsEnhanced}
                    websiteName={heading}
                    learning={learning}
                />
            )}
            <SingleWorkSectionFooter
                nextWorkIndex={id + 1 > allWorks.length ? 1 : id + 1}
            />
        </div>
    );
};

export default SingleWorkPage;
