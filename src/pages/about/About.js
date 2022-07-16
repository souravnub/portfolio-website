import { useEffect } from "react";
import { setNavTextColor } from "../../features/navigation/navSlice";
import { useDispatch } from "react-redux/es/hooks/useDispatch";

const About = () => {
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(setNavTextColor("black"));
    }, []);
    return <div>hello about</div>;
};

export default About;
