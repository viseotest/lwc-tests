![image](https://user-images.githubusercontent.com/115108908/194173019-6e22662e-f6e3-492f-a9c5-3bd77bea29ce.png)


# HOULAHOUPS INC.

Dans le cadre de son métier de formateur dans l'univers de l'informatique, la societe HOULAHOUPS utilise la plateforme Salesforce pour génerer des devis de formation, des conventions mais également les differentes demandes autour de ces evenements. Ainsi les employés de l'entreprise sont amenés à créer et mettre à jour les informations des demandes.

Dans un premier temps, le besoin métier est de pouvoir visualiser sur une page la liste des demandes triées par typologie (recordType), rafraichir la liste lorsque la typologie change et enfin appliquer un filtre sur les demandes.

En vous appuyant sur le composant utils dans lequel de la data a été chargée, il vous est demandé de :

* Creer 4 composants (LWC)
* Permettre l'affichage et la selection des typologies (recordType).
* Afficher dans un tableau avec des colonnes la liste des demandes associée à la typologie et/ou le filtre.
* Creer un filtre permettant de selectionner les demandes active/inactive sur la typologie selectionnée.


`caseListviewContainer`
> le role de ce composant servira comme conteneur des 3 autres composants.
   
`caseListviewTypologySelector`
> le role de ce composant permettra d'afficher le selecteur de typologie et d'envoyer sa valeur au conteneur.

`caseListviewDatatable`
> le role de ce composant permettra d'afficher la liste des demandes en fonction d'une typologie et/ou du filtre appliquer.

`caseListviewFilter`
> le role de ce composant permettra d'afficher le filtre et d'envoyer sa valeur au conteneur.
 
 
