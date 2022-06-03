export const getStrapiURL = (path = "") => {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337/"
  }${path}`;
};

export const fetchAPI = async (path) => {
  const requestURL = getStrapiURL(path);
  const response = await fetch(requestURL);
  const data = await response.json();

  return data;
};
