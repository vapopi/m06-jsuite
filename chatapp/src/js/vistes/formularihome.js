import formulario from "../../formulari.html"
 
export const formulario2 = () => {

    let div = document.createElement('div');
    div.innerHTML=formulario
    document.body.append(div);
}
