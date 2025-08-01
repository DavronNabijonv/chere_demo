// Base types
export type Language = "uz" | "ru" | "eng";

export interface ILangTypes extends IBaseTypes {
  key: string;
  eng: string;
  uz: string;
  ru: string;
}

export interface IBaseTypes {
  collectionId: string;
  collectionName: string;
  id: string;
  created: string;
  updated: string;
}

export interface IProductTypes extends IBaseTypes {
  image:string,
  price:number,
  name:string,
  description:string,
  expand: {
    name: ILangTypes;
    description: ILangTypes;
  };
}

export type IExpandType<K extends string> = Record<K, ILangTypes>;
