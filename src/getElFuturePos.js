import getAlignOffset from './getAlignOffset';

function getElFuturePos(elRegion, refNodeRegion, points, offset, targetOffset) {
  let xy;
  let diff;
  let p1;
  let p2;

  xy = {
    left: elRegion.left,
    top: elRegion.top,
  };

  p1 = getAlignOffset(refNodeRegion, points[1]);
  p2 = getAlignOffset(elRegion, points[0]);

  diff = [p2.left - p1.left, p2.top - p1.top];

  return {
    left: xy.left - diff[0] + offset[0] - targetOffset[0],
    top: xy.top - diff[1] + offset[1] - targetOffset[1],
  };
}

export default getElFuturePos;
