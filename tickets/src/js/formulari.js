export var rellenarDatos = () =>

`<div class="formulari">
    <div class="formulari__panell">
        <div class="formulari__capcalera">
            <h1>Ticktes</h1>
        </div>
        <div class="formulari__contingut">
            <form>
                
                <div class="formulari__grup"><label for="title">Titol</label><input type="text" id="title" name="title" required="required" /></div>
                <div class="formulari__grup"><label for="desc">Descripcio</label><input type="textarea" id="desc" name="desc" required="required" /></div>
                <div><span>Asignar a 
                <select class="form-select" id="grup" aria-label="Default select example">
                <option></option>
                </select></span>
                </div>
                <div class="formulari__grup"><button type="submit" id="enviar">Enviar Formulari</button></div>
                <table id="TicketsHechos">
                    <tr>
                        
                    </tr>
                </table>
            </form>
        </div>
    </div>
</div>`