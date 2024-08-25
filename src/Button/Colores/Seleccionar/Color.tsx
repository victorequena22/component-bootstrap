/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import ColorPicker from 'react-best-gradient-color-picker'
import { hexToRGBA } from "./Converts";
import { RowConfig } from "../../../Contens";


export interface Props {
    setData: (d: string) => void;
    color: string;
    disableAlpha?: boolean;
    colores?: string[];
    gradiend?: boolean;
}
export default function ColorSolido({ gradiend, setData, color: c, disableAlpha = false, colores }: Props) {
    const [color, setColor] = useState(hexToRGBA(c))
    const p = colores ? colores.map(c => hexToRGBA(c)) : [];
    const present = p.filter(c => gradiend ? true : !(c.includes('gradient')))
    useEffect(() => setData(color), [color])
    return <RowConfig style={{ padding: '.5rem .5rem .5rem .5rem', background: '#eeeeee' }}>
        <ColorPicker value={color} onChange={setColor} hideOpacity={disableAlpha}
            hidePresets={!present.length} presets={present} hideEyeDrop
            hideColorTypeBtns={!gradiend} disableDarkMode key={c + 'palete'} />
    </RowConfig>
}
