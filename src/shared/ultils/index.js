import { BASE_URL } from "../contants/app";
export const getImgProduct = (imageName) => {
    return `${BASE_URL}assets/uploads/products/${imageName}`;
}