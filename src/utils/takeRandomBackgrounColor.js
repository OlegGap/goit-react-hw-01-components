const takeRandomBackgrounColor = allColorsArray => {
  const randomColorIndex = Math.floor(Math.random() * allColorsArray.length);

  return {
    background: `#${allColorsArray[randomColorIndex]}`,
  };
};
export default takeRandomBackgrounColor;
