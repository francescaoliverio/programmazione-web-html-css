# Author
Oliverio Francesca

# Assignment
## 3.Columns and nations
Repeat the following exercises from a previous unit using flexbox to structure the page
1. Columns columns
2. United Nations

In a readme.md file, compare the two approaches in terms of:
- Result
- Code quality
- Future flexibility

# Solution
### Columns columns
#### Result
Risultato più flessibile, responsive, non tarato sul contenuto (es. il bordo non dipende dalla colonna con più testo per arrivare fino in fondo).
#### Code quality
Più codice, in termine di righe, ma funziona meglio. Bisogna però analizzare con senso critico quali delle proprietà di flexbox sono utili, e quali invece superflue (default user-agent stylesheet).
#### Future flexibility
Più facile da modificare: cambiare l'ordine degli elementi, il numero di colonne, il fattore di ridimensionamento delle colonne rispetto alla sidebar.

---
### United Nations
#### Result
Meno codice, risolti bug dovuti al rendering a larghezze della viewport critiche, in generale più manutenibile.
#### Code quality
Codice molto più chiaro, pulito e leggibile.
#### Future flexibility
Flessibilità e scalabilità: cambiare ordine, numero o proporzione fra le colonne è molto più semplice (e meno calcoli).