# Backlog UE CDP (Groupe 1 - Equipe 5)

## Description des rôles

* Un **utilisateur** est un visiteur qui a crée un compte et qui est connecté sur l'application. Il possède un nom, un pseudo, un e-mail et un mot de passe.
* Un **chef de projet** est un utilisateur qui a crée un projet (ou un développeur auquel le chef de projet a assigné ce rôle). Il possède tous les droits sur ce projet.
* Un **développeur** est un utilisateur auquel un chef de projet a affecté un projet.
* Un **product owner** est un utilisateur sélectionner par le chef de projet pour renseigné les besoins du projet et pour décrire les notes permettant l'évolution du projet (lors des sprints reviews).

## Description des termes

* Un **backlog** est un ensemble de user stories.
* Une **user story** ou **issue** est définit par : un identifiant unique, une description, une difficulté et une priorité.
* Une **tâche** est définit par un identifiant, une user story attachée, une description, une durée et un état (à faire, en cours, terminée, testée). Une tâche peut être assigné à un ou plusieurs développeur(s).
* Un **sprint** est un ensemble de tâches définit par : un numéro, un titre, une date de début et une date de fin.
* Un **cahier de charge** définit les besoins fonctionnels du projet et transmit à l'application sous la forme d'un fichier PDF.


* **La difficulté** est noté de manière croissante suivant une suite de Fibonacci (1,2,3,5 ...) : 1 étant facile et 5 étant difficile.


## User stories

| ID  	|   Description	                                                                                                                                                        |   Difficulté	|   Priorité	|  Planification |  Etat 	|
|-------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|---------------|----------------|----------|
|   US1	|  En tant qu'utilisateur je souhaite pouvoir créer un compte en renseignant un pseudo, un nom, un e-mail et un mot de passe  afin d'accéder aux fonctionnalités de l'application. 	|      2       |   MOYENNE	   	|   	         |	TODO	|
|   US2	|  En tant qu'utilisateur je souhaite pouvoir me connecter en accédant avec mon email et mon mot de passe  afin de voir mes projets actifs et leurs avancements.                	|   	2       |   MOYENNE	  	|                |	TODO	|
|   US3	|  En tant qu'utilisateur, je souhaite pouvoir me déconnecter de l'application afin de quitter l'application.                                                        	|   	1       |   BASSE	   	|   	         |	TODO	|
|   US4	|  En tant qu'utilisateur je souhaite pouvoir créer un projet avec un titre (comme identifiant unique), une durée, une description, une url du dépot de code et un cahier des charges afin de  pouvoir gérer ce projet. 	             |       2    	|   HAUTE	   	|   	Sprint 1         |	TODO	|	
|   US5	|  En tant que chef de projet je souhaite pouvoir ajouter ou supprimer des développeurs, des chefs de projet ou des product owner sur les projets que j'ai créer afin de pouvoir gérer les utilisateurs ayant accès à mes projets. 	                       |       2     	|   HAUTE	   	|   	         |	TODO	|
|   US6	|  En tant que chef de projet je souhaite pouvoir ajouter, modifier ou supprimer des user stories de mon Backlog. 	                                                                                    |       3    	|   HAUTE	   	|       Sprint 1         |	TODO	|
|   US7  |  En tant que chef de projet je peux créer, modifier, supprimer un sprint en renseignant un nom, une date de début et une date de fin, afin de pouvoir y renseigner un ensemble d'issues.                                                            	|   	3       |   HAUTE	   	|   	 Sprint 1        |	TODO	|
|   US8	|  En tant que chef de projet je souhaite pouvoir terminer un sprint afin de pouvoir mettre les tâches non terminées dans le sprint suivant. 	                                                |   	3       |   HAUTE	   	|   	         |	TODO	|	
|   US9	|  En tant que chef de projet je souhaite pouvoir ajouter, supprimer une issue d'un sprint afin d'affecter leurs tâches associées aux différents développeurs.                   |       2      |   HAUTE	   	  |   	  Sprint 1         |	TODO	|	
|   US10	|  En tant que chef de projet je souhaite pouvoir créer une ou plusieurs tâche(s) en renseignant une issue associée.   						                   |       2      |   HAUTE	   	  |   	           |	TODO	|	
|   US11	|  En tant que chef de projet je souhaite pouvoir attribuer une ou plusieurs tâches à des développeurs afin d'organiser le projet.                                                  |   	2       |   HAUTE	   	|   	         |	TODO	|	
|   US12	|  En tant que développeur je souhaite pouvoir assigner une tâche comme en cours, à tester, à documenter  ou faite.                                                                                         	|        2   	|   HAUTE	   	|   	         |	TODO	|
|   US13	|  En tant que développeur je souhaite pouvoir accéder à la liste des projets dont je fais parti afin de consulter le backlog ou les tâches qui me sont assignées.  								    |     2      	|   HAUTE	   	|   	Sprint 1         |	TODO	|
|   US14	|  En tant qu'utilisateur je souhaite pouvoir consulter le backlog et les sprints des projets auxquels je suis affecté.  								    |     2      	|   HAUTE	   	|   	         |	TODO	|
| US15 | 	   En tant que chef de projet, je souhaite pouvoir associer des dépendances entre les tâches.                                                       | 2 | MOYENNE |   | TODO |
| US16 | 	En tant que chef de projet, je souhaite pouvoir visualiser les différentes dépendances entre les tâches afin d'être aider dans la planification. | 5 | MOYENNE |   | TODO |
| US17 | En tant que développeur, je peux associer un build (sous la forme d'un lien) à un sprint.                                           | 1 | MOYENNE |   | TODO |
| US18 | En tant que product owner, je souhaite pouvoir ajouter des notes aux issues afin de faire évoluer les besoins du projet.                                          | 1 | BASSE |   | TODO |



