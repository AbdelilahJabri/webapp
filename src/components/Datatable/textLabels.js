/*
 * Default text labels.
 */
const getTextLabels = () => ({
  body: {
    noMatch: 'Désolé, aucun enregistrement n\'a été trouvé',
    toolTip: 'Trier',
  },
  pagination: {
    next: 'Page Suivante',
    previous: 'Page Précédente',
    rowsPerPage: 'Lignes par page:',
    displayRows: 'de',
  },
  toolbar: {
    search: 'Chercher',
    downloadCsv: 'Télécharger CSV',
    print: 'Imprimer',
    viewColumns: 'Colonnes à Voir',
    filterTable: 'Filtrer le Tableau',
  },
  filter: {
    all: 'Tous',
    title: 'Champs à filtrer',
    reset: 'Réinitialiser',
  },
  viewColumns: {
    title: 'Afficher les Colonnes',
    titleAria: 'Afficher/Cacher les Colonnes',
  },
  selectedRows: {
    text: 'Ligne(s) sélectionnée(s)',
    delete: 'Supprimer',
    deleteAria: 'Supprimer les lignes sélectionnées',
  },
});

export default getTextLabels;
