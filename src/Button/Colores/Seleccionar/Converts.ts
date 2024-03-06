
export function rgbaToHex(r: number, g: number, b: number, a: number) {
    var outParts = [
        r.toString(16),
        g.toString(16),
        b.toString(16),
        Math.round(a * 255).toString(16).substring(0, 2)
    ];
    // Pad single-digit output values
    outParts.forEach(function (part, i) {
        if (part.length === 1) {
            outParts[i] = '0' + part;
        }
    })
    return ('#' + outParts.join(''));
}
export function hexToRGBA(hex: string) {
    let c: any;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length == 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = '0x' + c.join('');
        return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',1)';
    }
    return hex;
}
export function hexToRGBA2(hex: string) {
    let c: any;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length == 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = '0x' + c.join('');
        return [(c >> 16) & 255, (c >> 8) & 255, c & 255];
    }
    return hex.replace('rgba(', '').replace(')', '').split(',').map(s => parseInt(s));
}
