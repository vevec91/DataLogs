xui.Class('App.Data', 'xui.Module',{
    Instance:{
        Dependencies: ['xui.css'],
        Required:[],
        properties : {
            usersData: [
                { id: 'utilisateur1', password: 'motdepasse1' },
                { id: 'utilisateur2', password: 'motdepasse2' },
                // Ajoutez d'autres données selon vos besoins
            ]
        },
        initialize : function(){
        },
        iniComponents : function(){
            var host=this, children=[], append=function(child){children.push(child.get(0));};

            // Ajoutez le code HTML et CSS pour le tableau
           var tableHtml = '<h2>Tableau Utilisateurs</h2>' +
                '<table>' +
                    '<thead>' +
                        '<tr>' +
                            '<th>Identifiant</th>' +
                            '<th>Mot de passe</th>' +
                        '</tr>' +
                    '</thead>' +
                    '<tbody>' +
                        this.properties.usersData.map(function(user) {
                            return '<tr>' +
                                       '<td>' + user.id + '</td>' +
                                       '<td>' + user.password + '</td>' +
                                   '</tr>';
                        }).join('') +
                    '</tbody>' +
                '</table>';


            // Créez un élément DOM à partir du code HTML
            var tableElement = xui.create('<div>' + tableHtml + '</div>');

            // Ajoutez l'élément DOM au composant
            append(tableElement);

            return children;
        },
        propSetAction : function(prop){
            // Logique à exécuter lorsqu'une propriété est modifiée
        }
    },
    Static:{
        $DataModel:{
            // Définissez le modèle de données selon les besoins
        },
        $EventHandlers:{
            // Ajoutez des gestionnaires d'événements si nécessaire
        },
        $Functions:{
            // Ajoutez des fonctions statiques si nécessaire
        }
    }
});
