export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR =
  "https://occ-0-1946-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NjJlNGNjNGYxOTNiODc4ZDhlN2IwMDNhNmZmNDZhMyIsIm5iZiI6MTcyNTg3NjEwMy41MTU3NDksInN1YiI6IjY2ZGMwMTY3MzVmOWE1ZTYxN2I5MjI5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fX3UuKNX3HfVQ0ZEHLsgQARbubbpPNRxn_jgxuV-jyc",
  },
};

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/259422c0-c399-4047-baf2-44bac5612ac1/435b6df3-53e6-4b88-b1be-0f3804e210a1/IN-en-20240819-POP_SIGNUP_TWO_WEEKS-perspective_WEB_f4be2d60-6f77-49e2-aaf7-6327ac5a3a95_large.jpg";

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "kannada", name: "Kannada" },
  { identifier: "telugu", name: "Telugu" },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
