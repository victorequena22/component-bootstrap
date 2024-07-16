import { CSSProperties } from "react"
import { hexToRGBA2 } from "./Seleccionar/Converts"

export function colorRGB([r, g, b]: any, [i, j, t] = [0, 0, 0]) {
    return `rgb(${r + i}, ${g + j}, ${b + t})`
}
export function textRGB([r, g, b]: any) {
    let r1 = r >= 128 ? 0 : 255
    let g1 = g >= 128 ? 0 : 255
    let b1 = b >= 128 ? 0 : 255
    const max = Math.max(r1, g1, b1)
    const min = Math.min(r1, g1, b1)
    if (max !== min) {
        if (r1 === g1) b1 = b1 === min ? Math.max(r, g, b) : Math.min(r, g, b)
        if (r1 === b1) g1 = g1 === min ? Math.max(r, g, b) : Math.min(r, g, b)
        if (b1 === g1) r1 = r1 === min ? Math.max(r, g, b) : Math.min(r, g, b)
    }
    return colorRGB([r1, g1, b1])
}

export default function getColor(hex: string | undefined, hover: boolean, invert?: boolean,): CSSProperties {
    if (hex && hex.includes('gradient')) {
        return {
            color: '#FFFFFF',
            background: hex
        }
    }
    const rgb = hexToRGBA2(hex ? hex : '#000000');
    if (hover) {
        const backH = colorRGB(rgb, [-20, -20, -20])
        const textH = textRGB(rgb.map((c: number) => 255 - c))
        return {
            color: invert ? textH : backH,
            borderColor: invert ? textH : backH,
            backgroundColor: invert ? backH : textH
        }
    }
    const back = colorRGB(rgb)
    const text = textRGB(rgb)
    return {
        color: invert ? text : back,
        borderColor: invert ? text : back,
        backgroundColor: invert ? back : text
    }
}