const MAX_MOBILE_WIDTH = 600;

export function isDefNotNull(val: any) {
    return val !== null && val !== undefined;
}

export function isMobile() {
    return window.innerWidth <= MAX_MOBILE_WIDTH;
}
