# Simon Says
## Descrizione:
## Visualizzare in pagina 5 numeri casuali (anche tramite alert).
## Da lì parte un timer di 30 secondi. (durante il quale i numero non devono essere visibili all’utente)
## Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
## Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

- Visualizzare in pagina 5 numeri casuali
    - Creiamo una FUNZIONE:
        - FINCHE non trovi 5 numeri diversi tra loro:
            - estrai numeri casuali da 1 a 99
        - PUSHAMO i numeri in un array

- parte un timer di 30 secondi

- l’utente deve inserire, uno alla volta, i 5 numeri che ha visto precedentemente
    - Creiamo una FUNZIONE:
        - FINCHE non trovi 5 numeri diversi tra loro:
            - Chiediamo all'utente (con un prompt()) di inserire il numero
                - verifichiamo:
                - SE isNaN(numero) === false O numero < 1 O numero > 99
                    - PUSHAMO il numero in un array
                - ALTRIMENTI chiediamo un altro numero

- confrontiamo i dati dei due array

- il software dice quanti e quali dei numeri da indovinare sono stati individuati