const BASE_URL =
<<<<<<< HEAD
  process.env.API_URL || "http://localhost:8080";
/*   "https://project-final-tpiwomq62a-lz.a.run.app";  */

=======
  // process.env.API_URL || "https://project-final-tpiwomq62a-lz.a.run.app";
  process.env.API_URL || "http://localhost:8080";
>>>>>>> c31e729bbd15f8aa150868f2222157352f825a48

// Slug is a suffix of the request and it comes after base url request/
// Slug is sort of the end point of the reuest
export const API_URL = (slug) => `${BASE_URL}/${slug}`;
