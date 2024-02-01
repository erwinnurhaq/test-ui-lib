function checkNullishObj(obj = {}) {
  return Object.fromEntries(
    Object.entries(obj).filter(([, val]) => val !== '' && val !== null && val !== undefined)
  );
}

export default checkNullishObj;
