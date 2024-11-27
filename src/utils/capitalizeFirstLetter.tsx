// export const capitalizeFirstLetter = (str: string): string => {
//   return str?.toLowerCase()?.replace(/\b\w/g, (char) => char?.toUpperCase());
// };
export const capitalizeFirstLetter = (str: string): string => {
  return str?.replace(/\w\S*/g, function (txt) {
    return txt?.charAt(0)?.toUpperCase() + txt?.substr(1)?.toLowerCase();
  });
};
