import { createGlobalStyle } from "styled-components";

// copiei na caruda mesmo! o layout tava bom kkkk
// Vou alterando conforme minha necessidade, e o que eu não tiver utilizado eu vou tirar :D 

export const GlobalStyles = createGlobalStyle`
    html, body, main, article, nav, aside, section,
    header, footer, address, div,
    h1, h2, h3, h4, h5, h6, p, blockquote, ol, ul, li, dl, dt, dd,
    hr, pre, figure, figcaption,
    table, caption, thead, tbody, tfoot, tr, th, td, col, colgroup,
    form, fieldset, legend, label, input, button, select, datalist,
    optgroup, option, textarea, progress, meter,
    img, iframe, embed, object, param, video, audio, source,
    canvas, track, map, area, del, ins,
    a, em, strong, i, b, u, s, small, abbr, q, cite, dfn, sub, sup,
    time, code, kbd, samp, var, bdi, bdo, ruby, rt, rp, wbr,
    mark, span, br {
    padding: 0;
    margin: 0;
    font-size: 100%;
    font-style: normal;
    font-weight: normal;
    vertical-align: baseline;
    background: transparent;
    box-sizing: border-box;
}

    button,
    select,
    textarea,
    input {
    max-width: 100%;
    color: inherit;
    font-family: inherit;
    line-height: inherit;
    vertical-align: baseline;
}

    a {
    text-decoration: none;
}

    img,
    svg {
    max-width: 100%;
    border: 0;
}

    li {
    list-style: none;
}

    ::after,
    ::before {
    box-sizing: inherit;
}

    body {
    font-family: "Poppins", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    min-height: 100vh;
    line-height: 1.40;
    background-color: #FFFFFF;
}

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
    margin-bottom: 16px;
    font-weight: 600;
}

    h1 {
    font-size: 28px;
}

    h2 {
    font-size: 24px;
}

    h3 {
    font-size: 20px;
}

    h4 {
    font-size: 16px;
}

    h5 {
    font-size: 12px;
}

    h6 {
    font-size: 12px;
}

    p {
    line-height: 1.5;
}

    strong {
    font-weight: 800;
}

    ol, ul {
    margin-bottom: 16px;
}

    ol li {
    margin-right: 4px;
    margin-left: 24px;
    list-style-type: decimal
}

    ul li {
    margin-right: 4px;
    margin-left: 24px;
    list-style-type: '-'
}
`;