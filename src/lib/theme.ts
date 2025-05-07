"use client"

import { createTheme } from "@mui/material/styles";
import { Source_Code_Pro } from "next/font/google";

const sourceCodePro = Source_Code_Pro({
    weight: ['200', '300', '400', '500', '600', '700', '800', '900']
});

export const theme = createTheme({
    typography: sourceCodePro.style,
    palette: {
        primary: {
            main: '#8A2BE2',
            dark: '#5D1E8C',
        },
    },
})