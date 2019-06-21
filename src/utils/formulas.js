export const pathFromBezierCurve = (cubicBexierCurve) => {
  const {
    initialAxis, initialControlPoint, endingControlPoint, endingAxis
  } = cubicBexierCurve

  return `
    M${initialAxis.x} ${initialAxis.y}
    c ${initialControlPoint.x} ${initialControlPoint.y}
    ${endingControlPoint.x} ${endingControlPoint.y}
    ${endingAxis.x} ${endingAxis.y}
  `;
};
