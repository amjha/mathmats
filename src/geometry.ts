type Point = [number, number];

const onSegment = (px: number, py: number, qx: number, qy: number, rx: number, ry: number) => {
    if (qx <= Math.max(px, rx) && qx >= Math.min(px, rx) && qy <= Math.max(py, ry) && qy >= Math.min(py, ry))
        return true
    return false
}

const determineOrientation = (px: number, py: number, qx: number, qy: number, rx: number, ry: number) => {
    let val = (qy - py) * (rx - qx) - (qx - px) * (ry - qy);
    if (val == 0)
        return 0
    else if (val > 0)
        return 1
    else
        return 2
}

const checkIntersect = (p1x: number, p1y: number, p2x: number, p2y: number, q1x: number, q1y: number, q2x: number, q2y: number) => {
    let o1 = determineOrientation(p1x, p1y, p2x, p2y, q1x, q1y),
    o2 = determineOrientation(p1x, p1y, p2x, p2y, q2x, q2y),
    o3 = determineOrientation(q1x, q1y, q2x, q2y, p1x, p1y),
    o4 = determineOrientation(q1x, q1y, q2x, q2y, p2x, p2y);

    if (o1 != o2 && o3 != o4)
        return true
    if (o1 == 0 && onSegment(p1x, p1y, q1x, q1y, p2x, p2y))
        return true
    if (o2 == 0 && onSegment(p1x, p1y, q2x, q2y, p2x, p2y))
        return true
    if (o3 == 0 && onSegment(q1x, q1y, p1x, p1y, q2x, q2y))
        return true
    if ((o4 == 0 && onSegment(q1x, q1y, p2x, p2y, q2x, q2y)))
        return true
    return false
}

export const doLinesIntersect = (p1: Point, p2: Point, q1: Point, q2: Point) => {
    return checkIntersect(p1[0], p1[1], p2[0], p2[1], q1[0], q1[1], q2[0], q2[1]) ? true : false;
}


export const isEquilateralTriangle = (t1: number) => {
    return t1 ? true : false;
}