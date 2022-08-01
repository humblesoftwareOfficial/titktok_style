
const isHttpsUrl = (url = "") => url.includes("https://");

export const formatVideo = (url, width, height) => {
  const newUrl = isHttpsUrl(url)
    ? url.split("https://res.cloudinary.com/faceshop/video/upload/")
    : url.split("https://res.cloudinary.com/faceshop/video/upload/");
//   console.log(`https://res.cloudinary.com/faceshop/video/upload/c_scale,h_${height},w_${width}/${newUrl[1]}`)
//   console.log(url)
  return `https://res.cloudinary.com/faceshop/video/upload/c_limit,h_${height},w_${width}/${newUrl[1]}`;
};
