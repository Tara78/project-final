const BASE_URL =

 // process.env.API_URL || "http://localhost:8000";
/*   "https://project-final-tpiwomq62a-lz.a.run.app";  */
 process.env.API_URL || "https://squealing-bath-production.up.railway.app"



// Slug is a suffix of the request and it comes after base url request/
// Slug is sort of the end point of the reuest
export const API_URL = (slug) => `${BASE_URL}/${slug}`;
