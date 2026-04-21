## 1. Prerequisiti
Node.js: Assicurarsi che Node.js sia installato (scaricabile da nodejs.org).
Visual Studio Code: Installato.

## 2. Installazione di Sass
Aprire il terminale (o il terminale integrato in VSC) e installare Sass globalmente nel sistema utilizzando npm:  

```npm install -g sass```

In alternativa, è possibile installarlo localmente nel progetto con npm install --save-dev sass.


## 3. Compilazione SCSS in VSC
Una volta creato un file .scss (es. style.scss), è possibile compilarlo in .css in diversi modi:

**Compilazione Manuale (Terminale):**

```sass style.scss style.css```

**Compilazione Automatica ("Watch" Mode):**

Per far sì che Sass compili automaticamente il file ogni volta che viene salvato, utilizzare il flag --watch:

```sass --watch style.scss style.css```

Questo comando monitorerà le modifiche e aggiornerà il file CSS in tempo reale. 