import { getInput } from "@actions/core";
var XMLHttpRequest = require("xhr2");

function toParams(data_js) {
    var form_data = [];
    for ( var key in data_js ) {
        form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
    }

    return form_data.join("&");
}

var data_js = {
    "access_token": getInput("postmail-token")
};

var request = new XMLHttpRequest();

var subject = "Resultado del workflow ejecutado";
var message = "Se ha realizado un push en la rama main que ha provocado la ejecución del workflow nombre_repositorio_workflow con los siguientes resultados:\n- linter_job: " + getInput("linter-result") + "\n- cypress_job: " + getInput("cypress-result") + "\n- add_badge_job: " + getInput("add-badge-result") + "\n- deploy_job: " + getInput("deploy-result");
data_js['subject'] = subject;
data_js['text'] = message;
var params = toParams(data_js);

request.open("POST", "https://postmail.invotes.com/send", true);
request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

request.send(params);