const getElementPositions = (element, baseElement) => {
  if (!element) {
    return {
      x: 0,
      y: 0,
      x2: 0,
      y2: 0,
      width: 1,
      height: 1,
      bodyRect: undefined,
      elemRect: undefined,
    };
  }

  const bodyRect = (baseElement || document.body).getBoundingClientRect();
  const elemRect = element.getBoundingClientRect();
  const x = elemRect.left - bodyRect.left;
  const y = elemRect.top - bodyRect.top;
  const x2 = bodyRect.right - elemRect.right;
  const y2 = bodyRect.bottom - elemRect.bottom;

  return { x, y, x2, y2, width: elemRect.width, height: elemRect.height, bodyRect, elemRect };
};

export default getElementPositions;
