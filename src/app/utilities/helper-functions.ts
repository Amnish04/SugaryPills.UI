const MAX_MOBILE_WIDTH = 600;

export function isDefNotNull(val: any) {
    return val !== null && val !== undefined;
}

export function isMobile() {
    return window.innerWidth <= MAX_MOBILE_WIDTH;
}

export function convertDecimalToPercentage(value: any) {
    return Number(value) * 100;
}
