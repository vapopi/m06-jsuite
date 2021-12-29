import "../../css/layout.css"
import "../../css/components.css"
/* import "../../css/styles.css" */

// Importacio dels elements
import header from "../../header.html"
import footer from "../../footer.html"
import head from "../../head.html"

export const head1 = () => {
    let div = document.createElement('div');
    div.innerHTML=head
    document.body.append(div);
}

export const header1 = () => {
    let div = document.createElement('div');
    div.innerHTML=header
    document.body.append(div);
}

export const footer1 = () => {
    let div2 = document.createElement('div2');
    div2.innerHTML=footer
    document.body.append(div2);
}