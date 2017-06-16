// returns 0 to 1 normalized value
function norm(value, min, max) {
    return (value - min) / (max - min);
}

// Linear Interpolation
function lerp(norm, min, max) {
    return (max-min) * norm + min;
}

function map(value, sourceMin, sourceMax, destMin, destMax) {
    return lerp(norm(value, sourceMin, sourceMax), destMin, destMax);
}

function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
