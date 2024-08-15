import { useEffect, useState } from "react";
import axiosClient from "../api/axiosClient";

export async function fetchProject(id) {
    const res = await axiosClient.get(
        `${process.env.REACT_APP_API_URL}/api/projects/${id}`
    );
    return res.data;
}

const useProject = (projectId) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    async function getProjectData() {
        setIsLoading(true);
        const data = await fetchProject(projectId);
        setIsLoading(false);
        setData(data);
    }

    useEffect(() => {
        getProjectData();
    }, [projectId]);

    return { data, isLoading };
};

export default useProject;
