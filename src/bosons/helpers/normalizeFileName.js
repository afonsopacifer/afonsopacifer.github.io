const normalizeFileName = fileName => {

  const extensionPositionStart = fileName.length - 4;

  return fileName.slice(0, extensionPositionStart);

}
  
export default normalizeFileName;