import deafultImg from './img/defalutImg.jpg'
import { imageBaseURL } from './movies-api'

export const createImgURL = url => {
    return url ? imageBaseURL + url : deafultImg;
}