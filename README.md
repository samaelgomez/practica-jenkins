# Pràctica Jenkins  
En aquesta pràctica realitzarem una sèrie d'activitats sobre Jenkins.  

## Què és Jenkins?
Jenkins és un servidor open source que permet organitzar una sèrie d'accions per a aconseguir una integració continua i automatitzada.  
  
Aquest està escrit amb Java i s'ha fet popular perquè facilita les tarees repetitives i estalvia temps.  
  
## Configuració d'una pipeline amb Jenkins  
Les pipelines de Jenkins són el conjunt d'instruccions que podem indicar-li per a que faça automàticament.  
  
Per a configurar una pipeline hem de crear una tarea de tipus pipeline i entrar a la configuració. Una vegada dins podem elegir si volem escriure'l ahí directament o si volem que vinga per SCM. Si elegim la segona podrem afegir el GitHub que volem que mire i la rama.  
![90](https://user-images.githubusercontent.com/61690297/151938314-08bb7bad-e1dd-4385-ae60-86f8ab63becc.jpg)  
Si baixem un poc més també veiem que podem especificar quin nom d'arxiu volem que busque, aquest normalment serà Jenkinsfile. Una vegada acabem, apliquem i guardem.  
![91](https://user-images.githubusercontent.com/61690297/151938462-64df27f1-cf64-41d2-8975-f9ad29f3c3ad.jpg)  
  
## Preparació inicial
Per a començar hem de fer un clone al repositori amb "git clone <url>", executem docker i fem un docker run al nostre contenidor de jenkins que ja té npm instal·lat. Li afegim al comandament els ports pels que volem que funcione, el volum que utilitzarà i ho executem com a modo detached amb el -d.  
![2](https://user-images.githubusercontent.com/61690297/151975504-2ba730ad-62eb-435b-b16b-5dc0a6759694.jpg)  
  
Una vegada executat podem anar a localhost:8080, entrar al nostre Jenkins i crear la tarea. Per a fer-ho soles hem d'apretar "Nueva tarea" i escriure el nom que li volem donar, en aquest cas Practica, i seleccionar l'opció de Pipeline.  
![3](https://user-images.githubusercontent.com/61690297/151975694-908cb959-50a5-404a-80d9-c05d7671e351.jpg)  
  
Ara que la tenim creada anem a la configuració en el panell de l'esquerra i fiquem la pipeline amb SCM, fiquem la URL del nostre repositori i li deixem la rama master i l'arxiu Jenkinsfile que tenim més avall.  
![4](https://user-images.githubusercontent.com/61690297/151976020-ffc8a106-6292-4eab-bc48-bd00fc12a5eb.jpg)  
  
## Paràmetres  
Per a començar el nostre Jenkinsfile li ficarem els 3 paràmetres amb els seus noms i descripcions corresponents i ficarem una stage de prova per a comprovar que tot funciona correctament.  
![5](https://user-images.githubusercontent.com/61690297/151976381-7399c52e-a685-476e-87ae-fca7b60e1b24.jpg)  
  
Fem push, anem al nostre Jenkins i seleccionem "Build with parameters". Ens apareixeran els nostres paràmetres per a replenar i la stage de prova també funciona.  
![6](https://user-images.githubusercontent.com/61690297/151976586-6d293510-1a17-4ea0-acc4-607d37f0c122.jpg)
![7](https://user-images.githubusercontent.com/61690297/151976596-76b1657a-fe2d-4fb8-bf4a-9bcd8b436109.jpg)  
  
## Triggers  
Per a afegir el nostre trigger simplement hem d'afegir el pollSCM següent:  
![8](https://user-images.githubusercontent.com/61690297/151976748-945859ae-a3b8-45d6-b689-58a8476c708f.jpg)  
  
Veiem que quan passa el temps que li indiquem al trigger ens apareix automàticament un nou procés com a pendent, en uns pocs segons comença i es fa correctament.  
![9](https://user-images.githubusercontent.com/61690297/151976997-f6daa311-7692-4627-b8ec-2658f43fc004.jpg)  
  
## Linter  
Per a afegir Linter primer haurem de fer un "npm install" per a que instal·le les dependències necessàries. Una vegada acabat fem el "npm run lint" en la següent stage.  
![10](https://user-images.githubusercontent.com/61690297/151977516-d4836432-7072-404d-955b-adf166021dc0.jpg)  
  
<!---Start place for the badge -->
RESULTADO DE LOS ÚLTIMOS TESTS: [![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)
<!---End place for the badge -->