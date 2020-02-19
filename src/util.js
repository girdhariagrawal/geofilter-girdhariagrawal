/**
 * Converts the provided degree into radian
 * @param degree value in degree
 */
const degreeToRadian = (degree) => degree * (Math.PI / 180);

/**
 * Converts the provided radian into degree
 * @param radian value in radian
 */
const radianToDegree = (radian) => radian * (180 / Math.PI);

module.exports = { degreeToRadian, radianToDegree };
