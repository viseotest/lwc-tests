![image](https://user-images.githubusercontent.com/115108908/194173019-6e22662e-f6e3-492f-a9c5-3bd77bea29ce.png)


# HOULAHOUPS INC.

Dans le cadre de son métier de formateur dans l'univers de l'informatique, la société HOULAHOUPS utilise la plateforme Salesforce pour générer des devis de formation, des conventions mais également les différentes demandes autour de ces évènements. Ainsi les employés de l'entreprise sont amenés à créer et mettre à jour les informations des demandes.

Dans un premier temps, le besoin métier est de pouvoir visualiser sur une page la liste des demandes triées par type d'enregistrement (recordType), rafraichir la liste des demandes lorsque la typologie change et enfin appliquer un filtre sur la liste demandes.

En vous appuyant sur le composant utils dans lequel de la data a été chargée, il vous est demandé de :

- Créer 4 composants (LWC)
- Permettre l'affichage et la sélection des types d'enregistrements (recordType).
- Afficher dans un tableau avec des colonnes la liste des demandes associée à la typologie et/ou le filtre.
- Créer un filtre permettant de sélectionner les demandes active/inactive sur la typologie sélectionnée.


### Détails Technique
  
| Nom Composant | Role Composant |
| :--- | :--- |
| `caseListviewContainer` | le role de ce composant servira comme conteneur des 3 autres composants. |
| `caseListviewRecordTypeSelector` | le role de ce composant permettra d'afficher la liste des types d'enregistrements et d'envoyer sa valeur au conteneur. |
| `caseListviewDatatable` | le role de ce composant permettra d'afficher la liste des demandes en fonction d'un type d'enregistrement et/ou du filtre appliqué. |
| `caseListviewFilter` | le role de ce composant permettra d'afficher le filtre et d'envoyer sa valeur au conteneur. |
  

### Utils composant :

#### Liste des demandes
```javascript
const data = { ... };
```

#### Methode de récuperation des demandes
```javascript
 export const getCasesByTypology = (typology) => { 
    return data[typology];
}
```

Vous avez le droit d'enrichir la methode `getCasesByTypology` présent dans le fichier utils qui permet de recupérer la liste des demandes !


 
 
