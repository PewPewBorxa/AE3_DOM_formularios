document.title = 'AE3_DOM_FORMULARIOS';

const Nombre = document.getElementById('name');
const surname = document.getElementById('surname');
const bday = document.getElementById('birth');
const direccion = document.getElementById('direccion');
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
continuar.setAttribute('onclick', 'next()');
const atras = document.getElementById('BackButton');
atras.setAttribute('onclick', 'back()');

function setURL() {
    CallbackUrl = url.value;
    FormValidation(document.getElementById('form_paso_1'));
}

const div_form_i = document.getElementById('formulario_solicitud_datos');
const div_paso_1 = document.getElementById('paso_1');
document.body.removeChild(div_form_i);
document.body.appendChild(div_paso_1);

const AceptaDatos = document.createElement('button');
AceptaDatos.id = 'submit_datos';
AceptaDatos.className = 'botones_form';
AceptaDatos.disabled = false;
AceptaDatos.appendChild(document.createTextNode('SI'));
AceptaDatos.setAttribute('onclick', 'AceptarDatos()');
div_review.appendChild(AceptaDatos);

const Agradecimiento = document.createElement('div');
const PAgradecimiento = document.createElement('p');
PAgradecimiento.appendChild(document.createTextNode('Gracias por rellenar el formulario, \n Pulsa Terminar para ir a la URL que pusiste en el primer paso.'));
Agradecimiento.appendChild(PAgradecimiento);

const Terminar = document.createElement('button');
Terminar.id = 'finish';
Terminar.className = 'botones_form';
Terminar.disabled = false;
Terminar.appendChild(document.createTextNode('Terminar'));
Terminar.setAttribute('onclick', 'EndSurvey()');
Agradecimiento.appendChild(Terminar);

function next() {
    switch (indice + 1) {
        case 2:
            continuar.disabled = true;
            document.getElementById('BackButton').classList.remove("hidden");
            document.body.removeChild(div_paso_1);
            document.body.appendChild(div_form_i);
            indice = indice + 1;

            break;

        case 3:
            document.getElementById('BackButton').classList.remove("hidden");
            continuar.disabled = true;
            document.body.removeChild(div_form_i);
            document.body.appendChild(div_review);
            indice = indice + 1;

            break;

        case 4:
            document.body.removeChild(div_review);
            document.body.appendChild(Agradecimiento);
            continuar.disabled = true;
            continuar.className = '' + continuar.className + ' hidden';
            indice = indice + 1;


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
    json.textContent = datos;
    appendJSON();
    document.getElementById('Continue').disabled = false;
}

function FormToJson() {
    let data = new FormData(document.getElementById('form_sol_datos'));
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
    pre.id = 'pre';
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
            continuar.disabled = false;
            div_review.removeChild(document.getElementById('pre'));
            document.body.removeChild(div_review);
            document.body.removeChild(AceptaDatos);
            document.body.appendChild(div_form_i);
            indice = indice - 1;
            break;

        case 3:
            continuar.disabled = false;
            document.body.removeChild(Agradecimiento);
            document.body.appendChild(div_review);
            indice = indice - 1;
            break;

        case 1:
            document.getElementById('BackButton').className = '' + document.getElementById('BackButton').className + ' hidden';
            continuar.disabled = false;
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
    } else {
        document.getElementById('BackButton').className = 'botones show';
    }
}

function FormValidation(form) {
    for (i = 0; i < form.length; i++) {
        if (form[i].checkValidity()) {
            form[i].classList.remove("errores");
            document.getElementById('Continue').disabled = false;
        } else {
            form[i].className = '' + form[i].className + ' errores';
            document.getElementById('Continue').disabled = true;
        }
    }
}

function ValidarFormulario2(element) {
    x = element;
    if (x.checkValidity()) {
        x.classList.remove("errores");
    } else {
        x.className = '' + x.className + ' errores';
    }
    ValdiaSubmit();
}

function ValdiaSubmit() {
    const form = document.getElementById('form_sol_datos');
    yes = false;
    for (i = 0; i < form.length; i++) {
        if (form[i].checkValidity() == true) {
            yes = true;
        } else {
            yes = false;
            break;
        }
    }
    if (yes) {
        document.getElementById('submit').disabled = false;
    } else {
        document.getElementById('submit').disabled = true;
        document.getElementById('Continue').disabled = true;
    }
}

function AceptarDatos() {
    document.getElementById('Continue').disabled = false;
}

function EndSurvey() {
    window.location.replace(CallbackUrl);
}
