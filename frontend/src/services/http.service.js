import axios from "axios";
const user = JSON.parse(localStorage.getItem("user"))
const commonConfig = {
    headers:{
        "Content-Type": "application/json",
        Accept: "application/json",
    },
};

export default (baseURL, auth=false) => {
    const http = axios.create({
        baseURL,
        ...commonConfig
    });

    return http;
};