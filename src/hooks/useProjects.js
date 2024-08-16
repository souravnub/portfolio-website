import { useEffect, useState } from "react";
import axiosClient from "../api/axiosClient";

export async function fetchProjects({ count }) {
    const res = await axiosClient.get(
        count
            ? `${process.env.REACT_APP_API_URL}/api/projects?count=${count}`
            : `${process.env.REACT_APP_API_URL}/api/projects`
    );
    return res.data;
}

const useProjects = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    async function getProjectsData() {
        setIsLoading(true);
        const data = await fetchProjects();
        setIsLoading(false);
        setData(data);
    }

    useEffect(() => {
        getProjectsData();
    }, []);

    return { data, isLoading };
};

export default useProjects;
