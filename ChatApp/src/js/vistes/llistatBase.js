export var formulario0 = () =>

`<div class="formulari">
    <div class="formulari__panell">
        <div class="formulari__capcalera">
            <h1>ChatApp - Llistats</h1>
        </div>
        <div class="formulari__contingut">
            <div class="container">
                <form>

                    <h4>GRUPS</h4><br>
                        <table class="table" id="taulaGrups">
                        </table><br>
                    <div class="formulari__grup"><label for="missatge">ID del grup</label><input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" id="grup" name="missatge"/></div><br>
                    <div class="formulari__grup"><button type="button" id="boto1" class="btn btn-primary">Esborrar</button></div>
                    <div class="formulari__grup"><button type="button" id="boto2" class="btn btn-primary">Visualitzar</button></div>
                    <div class="formulari__grup"><button type="button" id="boto3" class="btn btn-primary">Modificar</button></div><br>

                    <h4>MISSATGES</h4><br>
                    <table class="table" id="taulaMissatges">
                    </table><br>
                    <div class="formulari__grup"><label for="missatge">ID del missatge</label><input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" id="msg" name="missatge"/></div><br>
                    <div class="formulari__grup"><button type="button" id="boto4" class="btn btn-primary">Esborrar</button></div>
                    <div class="formulari__grup"><button type="button" id="boto5" class="btn btn-primary">Visualitzar</button></div>
                    <div class="formulari__grup"><button type="button" id="boto6" class="btn btn-primary">Modificar</button></div><br>

                    <h4>FILTRAR</h4><br>
                    <table class="table" id="taulaFiltratge">
                    </table><br>
                    <div class="formulari__grup"><label for="missatgef">A buscar missatges (Paraules)</label><input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" id="msgf" name="missatgef"/></div><br>
                    <div class="formulari__grup"><button type="button" id="boto7" class="btn btn-primary">Buscar</button></div>
                </form>
            </div>
        </div>
    </div>
</div>`
