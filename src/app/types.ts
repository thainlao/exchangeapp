import { StaticImageData } from "next/image";

export interface ICurrency {
    name: string | any;
    short_name: string;
    img: string | StaticImageData | any;
    value: number;
}