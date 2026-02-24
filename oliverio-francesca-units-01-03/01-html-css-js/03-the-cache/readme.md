# Author
Oliverio Francesca

# Assignment
## 3.The cache
Remember the line?
`<link rel="stylesheet" href="./css/styles.css?v=1.0">`  
- What does ?v=1.0 do?  
- How does the browser cache work?  
Create a folder named 03-the-cache  
Inside the folder create a .txt or .doc or .md file with your answers

# Answer
Questa espressione è necessaria per forzare il caricamento della risorsa CSS più recente qualora il browser ne avesse caricata una versione precedente in cache, e questa fosse stata successivamente aggiornata (emessa nuova versione).  
### Cache
Per migliorare l'efficienza e la velocità di caricamento il browser può salvare la risorsa CSS in cache (memoria ad accesso rapido per file usati di frequente).  
### Comportamento senza questa espressione
Il browser farebbe riferimento alla risorsa CSS presente nella cache, non applicando quindi le modifiche effettuate nella nuova versione.  
### Comportamento con questa espressione
Se la versione attualmente caricata in cache non corrisponde a quella richiesta dalla pagina HTML, verrà caricata la nuova versione.