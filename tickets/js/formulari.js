export var rellenarDatos = () =>

`<div class="formulari">
    <div class="formulari__panell">
        <div class="formulari__capcalera">
            <h1>Iniciar Sessio</h1>
        </div>
        <div class="formulari__contingut">
            <form>
                
                <div class="formulari__grup"><label for="title">Titol</label><input type="text" id="title" name="title" required="required" /></div>
                <div class="formulari__grup"><label for="desc">Descripcio</label><input type="textarea" id="desc" name="desc" required="required" /></div>
                <div class="formulari__grup"><label class="formulari__recordar"><input type="checkbox" />Recordar</label><a class="formulari__recuperar" href="canviarContrasenya.html">Has oblidat la teva contrasenya?</a></div>
                <div class="formulari__grup"><label class="formulari__recordar"></label><a class="formulari__recuperar" href="registrar-te.html">Registrar-te</a></div>
                <div class="formulari__grup"><button type="submit">Iniciar Sessio</button></div>
            </form>
        </div>
    </div>
</div>`