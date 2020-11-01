document.title = 'AE3_DOM_FORMULARIOS';


/* PASO 1 */
const div_paso_1 = document.createElement('div');
div_paso_1.id = 'paso_1';
div_paso_1.className = 'paso_1';

const h1_p1 = document.createElement('h1');
h1_p1.appendChild(document.createTextNode('AE3 DOM Formularios'));
const p_p1 = document.createElement('p');
p_p1.appendChild(document.createTextNode('Introduce una url:'));
const form_p1 = document.createElement('form');

const l_url = document.createElement('label');
l_url.setAttribute('for', 'url');
l_url.appendChild(document.createTextNode('URL:'));
const url = document.createElement('input');
url.setAttribute('type', 'url');
url.setAttribute('name', 'callbackurl');
url.id = 'url';
url.required = true;
url.setAttribute('onchange','setURL()');

div_paso_1.appendChild(h1_p1);
div_paso_1.appendChild(p_p1);
div_paso_1.appendChild(l_url);
div_paso_1.appendChild(url);

/* PASO 2 */
const div_form_i = document.createElement('div');
div_form_i.id = 'formulario_solicitud_datos';
div_form_i.className = 'formulario_solicitud_datos';

const form_i = document.createElement('form');
form_i.setAttribute('action', 'index.html');

/* nombre */

const l_name = document.createElement('label');
l_name.setAttribute('for', 'name');
l_name.appendChild(document.createTextNode('Nombre:'));

const name = document.createElement('input');
name.setAttribute('type', 'text');
name.setAttribute('name', 'name');
name.id = 'name';
name.required = true;

/* Apellidos */

const l_surname = document.createElement('label');
l_surname.setAttribute('for', 'surname');
l_surname.appendChild(document.createTextNode('Apellidos:'));

const surname = document.createElement('input');
surname.setAttribute('type', 'text');
surname.setAttribute('pattern', '.+ .');
surname.setAttribute('name', 'surname');
surname.id = 'surname';
surname.reuired = true;

/* Birthday */

const l_bday = document.createElement('label');
l_bday.setAttribute('for', 'birth');
l_bday.appendChild(document.createTextNode('Fecha de nacimiento:'));

const bday = document.createElement('input');
bday.setAttribute('type', 'date');
bday.setAttribute('name', 'birth');
bday.id = 'birth';
bday.required = true;

/* Direccion */

const l_dir = document.createElement('label');
l_dir.setAttribute('for', 'direccion');
l_dir.appendChild(document.createTextNode('Dirección:'));

const dir = document.createElement('input');
dir.setAttribute('type', 'text');
dir.setAttribute('name', 'direccion');
dir.id = 'direccion';

/* Codigo postal */

const l_post = document.createElement('label');
l_post.setAttribute('for', 'postcode');
l_post.appendChild(document.createTextNode('Código postal:'));

const post = document.createElement('input');
post.setAttribute('type', 'number');
post.setAttribute('name', 'postcode');
post.setAttribute('maxlength', 5);
post.setAttribute('size', 5);
post.setAttribute('minlength', 5);
post.required = true;
post.id = 'postcode';

/* Provincia */
const l_prov = document.createElement('label');
l_prov.setAttribute('for', 'provincia');
l_prov.appendChild(document.createTextNode('Provincia:'));

const prov = document.createElement('select');
prov.setAttribute('name', 'provincia');
prov.required = true;
prov.id = 'provincia';
/* Opciones */
/* 0 */
const op0 = document.createElement('option');
op0.setAttribute('value', '');
op0.disabled = true;
op0.selected = true;
op0.appendChild(document.createTextNode('Escoge tu provincia'));

/* 1 */
const op1 = document.createElement('option');
op1.setAttribute('value', 'valencia');
op1.appendChild(document.createTextNode('Valencia'));

/* 2 */
const op2 = document.createElement('option');
op2.setAttribute('value', 'Alicante');
op2.appendChild(document.createTextNode('Alicante'));

/* 3 */
const op3 = document.createElement('option');
op3.setAttribute('value', 'castellon');
op3.appendChild(document.createTextNode('Castellón'));

prov.appendChild(op0);
prov.appendChild(op1);
prov.appendChild(op2);
prov.appendChild(op3);

/* Municipio */

const l_mun = document.createElement('label');
l_mun.setAttribute('for', 'provincia');
l_mun.appendChild(document.createTextNode('Municipio:'));

const mun = document.createElement('input');
mun.setAttribute('type', 'text')
mun.setAttribute('name', 'municipio');
mun.required = true;
mun.id = 'municipio';

/* reset */
const reset = document.createElement('input');
reset.setAttribute('type', 'reset')
reset.setAttribute('value', 'Borrar');
reset.id = 'reset';
reset.className = 'botones_form';

/* Submit */
const submit = document.createElement('input');
submit.setAttribute('type', 'submit')
submit.setAttribute('value', 'Enviar');
submit.id = 'submit';
submit.className = 'botones_form';

/* Añadir elementos */

div_form_i.appendChild(form_i);
form_i.appendChild(l_name);
form_i.appendChild(name);
form_i.appendChild(l_surname);
form_i.appendChild(surname);
form_i.appendChild(l_bday);
form_i.appendChild(bday);
form_i.appendChild(l_dir);
form_i.appendChild(dir);
form_i.appendChild(l_post);
form_i.appendChild(post);
form_i.appendChild(l_prov);
form_i.appendChild(prov);
form_i.appendChild(l_mun);
form_i.appendChild(mun);
form_i.appendChild(reset);
form_i.appendChild(submit);


/* PASO 3 */

const div_review = document.createElement('div');
div_review.id = 'modificar_datos';
div_review.className = 'modificar_datos';

const h1_mod = document.createElement('h1');
h1_mod.appendChild(document.createTextNode('Son los datos introducidos correctos?'));

const l_nombre_mod = document.createElement('label');
l_nombre_mod.appendChild(document.createTextNode('Nombre: '));
const nombre_mod = name.value;
const h_nombre_mod = document.createElement('input');
h_nombre_mod.readOnly = true;
h_nombre_mod.value = nombre_mod;
const l_apellido_mod = document.createElement('label');
l_apellido_mod.appendChild(document.createTextNode('Apellidos: '));
const apellido_mod = surname.value;
const h_apellido_mod = document.createElement('input');
h_apellido_mod.readOnly = true;
h_apellido_mod.value = apellido_mod;
const l_fecha_mod = document.createElement('label');
l_fecha_mod.appendChild(document.createTextNode('Fecha: '));
const fecha_n_mod = bday.value;
const h_fecha_n_mod = document.createElement('input');
h_fecha_n_mod.readOnly = true;
h_fecha_n_mod.value = fecha_n_mod;
const l_direccion_mod = document.createElement('label');
l_direccion_mod.appendChild(document.createTextNode('Direccion: '));
const direccion_mod = dir.value;
const h_direccion_mod = document.createElement('input');
h_direccion_mod.readOnly = true;
h_direccion_mod.value = direccion_mod;
const l_post_mod = document.createElement('label');
l_post_mod.appendChild(document.createTextNode('Código Postal: '));
const post_mod = post.value;
const h_post_mod = document.createElement('input');
h_post_mod.readOnly = true;
h_post_mod.value = post_mod;
const l_prov_mod = document.createElement('label');
l_prov_mod.appendChild(document.createTextNode('Provincia: '));
const prov_mod = prov.value;
const h_prov_mod = document.createElement('input');
h_prov_mod.readOnly = true;
h_prov_mod.value = prov_mod;
const l_municipio_mod = document.createElement('label');
l_municipio_mod.appendChild(document.createTextNode('Municipio: '));
const municipio_mod = mun.value;
const h_municipio_mod = document.createElement('input');
h_municipio_mod.readOnly = true;
h_municipio_mod.placeholder = municipio_mod;

div_review.appendChild(l_nombre_mod);
div_review.appendChild(h_nombre_mod);
div_review.appendChild(l_apellido_mod);
div_review.appendChild(h_apellido_mod);
div_review.appendChild(l_fecha_mod);
div_review.appendChild(h_fecha_n_mod);
div_review.appendChild(l_direccion_mod);
div_review.appendChild(h_direccion_mod);
div_review.appendChild(l_post_mod);
div_review.appendChild(h_post_mod);
div_review.appendChild(l_prov_mod);
div_review.appendChild(h_prov_mod);
div_review.appendChild(l_municipio_mod);
div_review.appendChild(h_municipio_mod);

var indice = 1;
var CallbackUrl = '';

const continuar = document.getElementById('Continue');
const atras = document.getElementById('BackButton');
continuar.setAttribute('onclick', 'next()');

document.body.appendChild(div_paso_1);

function setURL(){
    CallbackUrl = url.value;
}

function next() {
    switch (indice + 1) {
        case 2:
            document.body.removeChild(div_paso_1);
            document.body.appendChild(div_form_i);
            indice = indice +1;
            break;

        case 3:
            document.body.removeChild(div_form_i);
            document.body.appendChild(div_review);
            indice = indice +1;
            break;

        case 4:

            break;
        default:
    }
}