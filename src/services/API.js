import axios from "axios";

export const API = axios.create({
    baseURL: "http://goweather.herokuapp.com/weather/"
});



