import {Faq} from "./faq";


export interface Contact {

  id?: number;
  img?: string;
  title?:string;
  address?:string;
  phone?:string;
  mail?:string;
  bank?:string;
  info?:string;
  map?:string;
  faqs?: Faq[];
}
