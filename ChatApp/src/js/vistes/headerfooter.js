import "../../css/layout.css"
import "../../css/components.css"
/* import "../../css/styles.css" */

// Importacio dels elements
import header from "../../header.html"
import footer from "../../footer.html"
import head from "../../head.html"

export const head1 = () => {
    $("body").append(head)
}

export const header1 = () => {
    $("body").append(header)
}

export const footer1 = () => {
    $("body").append(footer)
}