import "../../css/layout.css"
import "../../css/components.css"
import header from "../../header.html"
import footer from "../../footer.html"
import head from "../../head.html"

export const HeadOriginal = () => {
    let div = document.createElement('div');
    div.innerHTML = head
    document.body.append(div);
}

export const HeaderOriginal = () => {
    let div = document.createElement('div');
    div.innerHTML = header
    document.body.append(div);
}

export const FooterOriginal = () => {
    let div2 = document.createElement('div2');
    div2.innerHTML = footer
    document.body.append(div2);
}