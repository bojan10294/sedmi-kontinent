import { RequestInit } from 'next/dist/server/web/spec-extension/request';

const buildUrl = (url: string) =>
  url.startsWith('http') ? url : `/api/${url}`;

export const fetchService = (url: string, options: RequestInit = {}) =>
  fetch(buildUrl(url), {
    ...options,
    headers: { 'Content-Type': 'application/json', ...options.headers }
  });

export default async function tryCatch(url: string, param?: string) {
  try {
    const res = await fetch(url + (param || ''));
    const result = await res.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

const url = 'http://127.0.0.1:1337/api/';

export const getAllApartments = () => tryCatch(`${url}apartments`);

export const getApartments = (location: string) =>
  tryCatch(
    `${url}apartments?populate=*&filters[Lokacija][Adresa][$eq]=`,
    location
  );

export const getSingleApartment = (apartment: string) =>
  tryCatch(`${url}apartments?populate=*&filters[Naziv][$eq]=`, apartment);

export const getLocations = () => tryCatch(`${url}locations?populate=*`);

export const getCityLocations = (city?: any) =>
  tryCatch(`${url}locations?populate=*&filters[Grad][Naziv][$eq]=`, city);

export const getSingleLocation = (location: string) =>
  tryCatch(`${url}locations?populate=*&filters[Adresa][$eq]=`, location);

export const getCities = () => tryCatch(`${url}cities`);
