import { atom } from "recoil";

export const webcamAtom=atom({
    key:"webcamera",
    default:false,
})

export const backButtonAtom=atom({
    key:"backButton",
    default:false,
})

const captureImageAtom=atom({
    key:"imgcapture",
    default:"false"
})

