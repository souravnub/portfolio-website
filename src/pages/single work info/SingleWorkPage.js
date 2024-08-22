import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux/es/exports";
import { useParams } from "react-router-dom";
import TabletMockup from "../../components/mockups/tablet/TabletMockup";
import SingleWorkSectionFooter from "../../components/singleWorkInfoComponents/footer/SingleWorkSectionFooter";
import SingleWorkInfoHeader from "../../components/singleWorkInfoComponents/header/SingleWorkInfoHeader";
import MobileMockupSection from "../../components/singleWorkInfoComponents/mobiles mockup section/MobileMockupSection";
import ProjectLearningsSection from "../../components/singleWorkInfoComponents/project learnings section/ProjectLearningsSection";
import SectionBelowHeader from "../../components/singleWorkInfoComponents/section below header/SectionBelowHeader";
import { setNavTextColor } from "../../features/navigation/navSlice";
import { setPageTransitionOverlayText } from "../../features/page transition overlay/PageTransitionOverlaySlice";
import useProject from "../../hooks/useProject";
import "./singleWorkPage.scss";
import DesktopMockup from "../../components/singleWorkInfoComponents/desktop mockup/DesktopMockup";

const SingleWorkPage = () => {
    let { projectId } = useParams();
    const { data, isLoading } = useProject(projectId);

    let dispatch = useDispatch();
    let mainWorkPageContainerRef = useRef();

    useEffect(() => {
        if (!data?.project) return;

        dispatch(setPageTransitionOverlayText(data.project.name));

        const container = mainWorkPageContainerRef.current;

        const resize_ob = new ResizeObserver(function () {
            ScrollTrigger.refresh();
        });

        resize_ob.observe(container);

        return () => {
            resize_ob.unobserve(container);
        };
    }, [data]);

    useEffect(() => {
        if (!data?.project) return;
        dispatch(setNavTextColor("black"));

        mainWorkPageContainerRef.current.style.paddingTop =
            document.querySelector(".top-navigation").getBoundingClientRect()
                .height + "px";
    }, [data]);

    if (isLoading) {
        return <div></div>;
    }

    let {
        name,
        role,
        yearOfProduction,
        productionLink,
        githubLink,
        videoUrl,
        brandImageUrl,
        brandNameImageUrl,
        mobileImageUrl1,
        mobileImageUrl2,
        mobileVideoUrl,
        tabletVideoUrl,
        tabletImageUrl,
        techUsed,
        description,
        skillsEnhanced,
        quote,
        contributors,
    } = data.project;

    return (
        <div
            ref={mainWorkPageContainerRef}
            className="route-transition-container">
            <SingleWorkInfoHeader
                siteName={name}
                servicesInfo={role}
                yearOfProduction={yearOfProduction}
                techUsed={techUsed}
                description={description}
                contributors={contributors}
            />
            <SectionBelowHeader
                brandImg={brandImageUrl}
                productionLink={productionLink}
                githubLink={githubLink}
                brandNameImg={brandNameImageUrl}
            />
            {videoUrl && (
                <DesktopMockup data={{ type: "video", source: videoUrl }} />
            )}
            {(mobileImageUrl1 || mobileImageUrl2 || mobileVideoUrl) && (
                <MobileMockupSection
                    data={{
                        mobileImg1: mobileImageUrl1,
                        mobileImg2: mobileImageUrl2,
                        mobileVideo: mobileVideoUrl,
                    }}
                />
            )}
            {tabletVideoUrl && (
                <TabletMockup
                    asset={{ type: "video", source: tabletVideoUrl }}
                    showBg={
                        (mobileImageUrl1 ||
                            mobileImageUrl2 ||
                            mobileVideoUrl) &&
                        true
                    }
                />
            )}
            {tabletImageUrl && (
                <TabletMockup asset={{ type: "img", source: tabletImageUrl }} />
            )}
            {skillsEnhanced && (
                <ProjectLearningsSection
                    skillsEnhancedArr={skillsEnhanced}
                    websiteName={name}
                    quote={quote}
                />
            )}
            <SingleWorkSectionFooter nextProjectId={data.nextProjectId} />
        </div>
    );
};

export default SingleWorkPage;
