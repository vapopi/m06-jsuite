export let formulario1 = $("<div></div>", {
    id: "divPrincipalm",
    class: "missatges",
    html:     `<div class="formulari">
    <div class="formulari__panell">
        <div class="formulari__capcalera">
            <h1>ChatApp - Enviar missatges</h1>
        </div>
        <div class="formulari__contingut">
            <form>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" id="opcio1" name="opcio" value="public" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                    <label class="form-check-label" for="inlineRadio1">Public</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" id="opcio2" name="opcio" value="privat" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                    <label class="form-check-label" for="inlineRadio2">Privat</label>
                </div>
                </div><br>
                
                <select class="form-select" id="grup" aria-label="Default select example">
                </select>
                <select disabled class="form-select" id="destinatari" aria-label="Default select example">
                </select><br><br>

                <div class="formulari__grup"><label for="missatge">Missatge</label><input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" id="missatge" name="missatge"/></div><br>
                <div class="formulari__grup"><button type="button" id="botoEnviar" class="btn btn-primary">Enviar</button></div>
            </form>
        </div>
    </div>
    
</div>`
})