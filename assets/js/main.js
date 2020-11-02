document.title = 'AE3_DOM_FORMULARIOS';
/* 

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

const div_form_i = document.createElement('div');
div_form_i.id = 'formulario_solicitud_datos';
div_form_i.className = 'formulario_solicitud_datos';

const form_i = document.createElement('form');
form_i.setAttribute('action', 'index.html');

const l_name = document.createElement('label');
l_name.setAttribute('for', 'name');
l_name.appendChild(document.createTextNode('Nombre:'));

const name = document.createElement('input');
name.setAttribute('type', 'text');
name.setAttribute('name', 'name');
name.id = 'name';
name.required = true;

const l_surname = document.createElement('label');
l_surname.setAttribute('for', 'surname');
l_surname.appendChild(document.createTextNode('Apellidos:'));

const surname = document.createElement('input');
surname.setAttribute('type', 'text');
surname.setAttribute('pattern', '.+ .');
surname.setAttribute('name', 'surname');
surname.id = 'surname';
surname.required = true;

const l_bday = document.createElement('label');
l_bday.setAttribute('for', 'birth');
l_bday.appendChild(document.createTextNode('Fecha de nacimiento:'));

const bday = document.createElement('input');
bday.setAttribute('type', 'date');
bday.setAttribute('name', 'birth');
bday.id = 'birth';
bday.required = true;

const l_dir = document.createElement('label');
l_dir.setAttribute('for', 'direccion');
l_dir.appendChild(document.createTextNode('Dirección:'));

const dir = document.createElement('input');
dir.setAttribute('type', 'text');
dir.setAttribute('name', 'direccion');
dir.id = 'direccion';

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

const l_prov = document.createElement('label');
l_prov.setAttribute('for', 'provincia');
l_prov.appendChild(document.createTextNode('Provincia:'));

const prov = document.createElement('select');
prov.setAttribute('name', 'provincia');
prov.required = true;
prov.id = 'provincia';

const op0 = document.createElement('option');
op0.setAttribute('value', '');
op0.disabled = true;
op0.selected = true;
op0.appendChild(document.createTextNode('Escoge tu provincia'));

const op1 = document.createElement('option');
op1.setAttribute('value', 'valencia');
op1.appendChild(document.createTextNode('Valencia'));

const op2 = document.createElement('option');
op2.setAttribute('value', 'Alicante');
op2.appendChild(document.createTextNode('Alicante'));

const op3 = document.createElement('option');
op3.setAttribute('value', 'castellon');
op3.appendChild(document.createTextNode('Castellón'));

prov.appendChild(op0);
prov.appendChild(op1);
prov.appendChild(op2);
prov.appendChild(op3);

const l_mun = document.createElement('label');
l_mun.setAttribute('for', 'municipio');
l_mun.appendChild(document.createTextNode('Municipio:'));

const mun = document.createElement('input');
mun.setAttribute('type', 'text')
mun.setAttribute('name', 'municipio');
mun.required = true;
mun.id = 'municipio';

const reset = document.createElement('input');
reset.setAttribute('type', 'reset')
reset.setAttribute('value', 'Borrar');
reset.id = 'reset';
reset.className = 'botones_form';

const submit = document.createElement('input');
submit.setAttribute('type', 'submit')
submit.setAttribute('value', 'Enviar');
submit.id = 'submit';
submit.className = 'botones_form';



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

 */
/* PASO 3 */

const name = document.getElementById('name');
const surname = document.getElementById('surname');
const bday = document.getElementById('birth');
const dir = document.getElementById('direccion');
const post = document.getElementById('postcode');
const prov = document.getElementById('provincia');
const mun = document.getElementById('municipio');

const div_review = document.createElement('div');
div_review.id = 'modificar_datos';
div_review.className = 'modificar_datos';

const h1_mod = document.createElement('h1');
h1_mod.appendChild(document.createTextNode('Son los datos introducidos correctos?'));
const p_mod = document.createElement('p');
div_review.appendChild(h1_mod);


var indice = 1;
var CallbackUrl = '';

const continuar = document.getElementById('Continue');
const atras = document.getElementById('BackButton');
continuar.setAttribute('onclick', 'next()');
atras.setAttribute('onclick', 'back()');

function setURL() {
    CallbackUrl = url.value;
    FormValidation();
}

const div_form_i = document.getElementById('formulario_solicitud_datos');
const div_paso_1 = document.getElementById('paso_1');
document.body.removeChild(div_form_i);
document.body.appendChild(div_paso_1);

function next() {
    switch (indice + 1) {
        case 2:
            
            document.body.removeChild(div_paso_1);
            document.body.appendChild(div_form_i);
            indice = indice + 1;
            document.getElementById('indice').value = indice;
            break;

        case 3:
            
            document.body.removeChild(div_form_i);
            document.body.appendChild(div_review);
            indice = indice + 1;
            document.getElementById('indice').value = indice;
            break;

        case 4:

            break;
        default:
    }
}

var datos;
const json = document.createElement('pre');
json.id = json;


function formSubmit() {
    event.preventDefault();
    datos = FormToJson();
    console.log(datos);
    json.textContent = datos;
    appendJSON();
}

function FormToJson() {
    let data = new FormData(document.getElementById('form_1'));
    let JSONdata = JSON.stringify(Object.fromEntries(data), null, 2);
    return JSONdata;
}

function appendJSON() {
    let data = FormToJson();
    data = JSON.parse(data);
    let keys = Object.keys(data);
    console.log(keys);
    console.log(data);
    let pre = document.createElement('pre');
    for (let i = 0; i < keys.length; i++) {
        let aux = keys[i];
        pre.appendChild(document.createTextNode(keys[i] + ' :: ' + data[aux] + '\n'));
    }
    console.log(pre);
    div_review.appendChild(pre);
}

function back() {
    switch (indice - 1) {
        case 2:
            document.body.removeChild(div_review);
            document.body.appendChild(div_form_i);
            indice = indice - 1;
            break;

        case 3:
            document.getElementById('indice').value = indice;
            document.body.removeChild();
            document.body.appendChild(div_review);
            indice = indice - 1;
            break;

        case 1:
            document.getElementById('indice').value = indice;
            document.body.removeChild(div_form_i);
            document.body.appendChild(div_paso_1);
            indice = indice - 1;
            break;
        default:
    }
}

function HideElement() {
    if (!(indice > 1)) {
        document.getElementById('BackButton').className = 'botones hidden';
    }else {
        document.getElementById('BackButton').className = 'botones show';
    }
}

function FormValidation() {
    const form = document.getElementById('form_paso_1');
    for (i = 0; i < form.length; i++) {
        if (form[i].checkValidity()) {
            document.getElementById('Continue').disabled = false;
        } else {
            form[i].className = '' + form[i].className + ' errores';
        }
    }
}