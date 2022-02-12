export let formulario00 = $("<div></div>", {

    id: "divPrincipal",
    class: "botonera",
    html: `<div class="formulari">
                <div class="formulari__panell">
                    <div class="formulari__capcalera">
                        <h1>ChatApp</h1>
                    </div>
                    <div class="formulari__contingut">
                        <form>
                            <div class="formulari__grup"><button id="botoGrups" type="button" class="btn btn-primary">Crear grup</button></div>
                            <div class="formulari__grup"><button id="botoMissatges"type="button" class="btn btn-primary">Enviar missatge</button></div>
                            <div class="formulari__grup"><button id="botoLlistes" type="button" class="btn btn-primary">Llistats missatges/grups</button></div>
                        </form>
                    </div>
                </div>
            </div>`

    })