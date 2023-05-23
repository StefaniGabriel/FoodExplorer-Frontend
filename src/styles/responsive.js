const responsive = (size, baseWidth = 1440) => {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const calculatedSize = (size / baseWidth) * screenWidth;
    return `${calculatedSize}px`;
  };
  
  export default responsive;