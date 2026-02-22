import axios from "axios";

const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNGUwMWEwMGYyYzNmY2E3NWJjZmRiNjMzYjc3NjMyOSIsIm5iZiI6MTcxMTYzNzI2MC4zODksInN1YiI6IjY2MDU4MzBjZDQwMGYzMDE3ZDkwNmFkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pxDAKD0yKCOu0ylLFP7lhDEUPqjAZvnFm_3h-TW9biA"

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers["Authorization"] = `Bearer ${API_KEY}`;

export const fetchData = async (path='', newParams = {}) => {
    const {data} = await axios.get(path, {
        params: {
            language: "en-US",
            ...newParams
        }
    })
 return data;
}

export const imageBaseURL = "https://image.tmdb.org/t/p/w500";








// 34e01a00f2c3fca75bcfdb633b776329 - key