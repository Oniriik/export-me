import { URIs } from "./config";

const RandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

export const GetRandomURI = () => {
    return URIs[RandomInt(3)]
}
