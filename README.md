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
  
Però açò és possible que ens done error tant de next com de eslint, per a evitar-ho simplement els afegim al nostre package.json.  
![12](https://user-images.githubusercontent.com/61690297/151995248-418e620d-ac88-4748-b86b-41cef3e2753d.jpg)
![14](https://user-images.githubusercontent.com/61690297/151995272-5d6d1a19-1f33-479b-b479-deaf085cac3d.jpg)  
  
Ara ja podem fer el push i el build i veure si funciona.  
![15](https://user-images.githubusercontent.com/61690297/151995501-5e24f171-3b2a-4d2d-97e2-4993758c64ae.jpg)
![16](https://user-images.githubusercontent.com/61690297/151995532-c3d0af0b-fe96-4135-9811-c5b1aa120d16.jpg)  
  
## Cypress  
Per a fer els tests de Cypress farem una nova stage que guardarà en una variable el resultat que donen els tests. Igualem la variable a l'execució dels tests afegint el returnStatus per a que retorne els resultats. No obstant, executar-ho ara també donaria error per no tindre xvfb, per això hem afegit l'"apt-get install" a les instal·lacions de les dependències. A més, com el servidor ha d'estar executant-se per a fer els tests també hem afegit "npm run build && (npm run start&)" per a que s'execute de fons sense quedar-se infinitament el stage executant-se.  
  
Fem push i revisem els logs dels tests, podem observar que baix del tot diu "All specs passed", pel que s'han fet satisfactòriament.  
![19](https://user-images.githubusercontent.com/61690297/151998147-12f3d11e-0ba4-4b15-ab96-f03932e93e6e.jpg)  
  
## Update README  
Per a fer aquest pas el primer que farem serà crear l'arxiu que actualitzarà el README. Creem un fitxer en jenkinsScripts i li afegim el següent.  
  
Agafem el paràmetre que li passem amb el "process.argv[2]", fem l'expressió regular i depenent del valor del paràmetre farà success o failure. Hem pogut revisar que Cypress ens tornava un 0 fent un echo del resultat abans.  
![21](https://user-images.githubusercontent.com/61690297/151999384-477a15f2-61fc-43fe-a52b-310c92d80ca1.jpg)  
  
Podem provar localment si funciona, però en Jenkins encara no, per lo que passem al següent pas.  
  
## Push changes  
Per a poder fer un commit des de l'arxiu shell necessitarem indicar-li on volem que ho faça, per a açò utilitzarem credencials per a mantenir la nostra token segura.  
  
Anem al nostre GitHub -> Developer Settings i ahí podrem generar una clau d'accéss privada. Haurem de generar una i copiar el resultat. Després, anem al panel de control de Jenkins -> Administrar Jenkins -> Credentials -> Apretem en global i finalment "Add credentials". Seleccionarem com a tipus d'aquest "Secret text", ficarem al secret la URL del nostre repositori afegint-li davant el token que hem generat i una @ (https://<token>@github.com/samaelgomez/practica-jenkins.git en aquest cas), i finalment el nom que li volem donar a aquesta credencial.  
![23](https://user-images.githubusercontent.com/61690297/152000831-45fd4d27-64d6-43d5-9cb6-a87da932ea22.jpg)  

Ara que tenim la nostra credencial l'hem d'afegir al nostre Jenkinsfile per a poder enviar-la al script que farem posteriorment. La declarem com a una variable d'entorn i fiquem els stages del README i de push_changes. En el primer enviem els resultats de Cypress com havíem dit i en segon li passarem els dos primers paràmetres per a poder editar el missatge de commit i també passem la credencial que acabem d'afegir.  
![24](https://user-images.githubusercontent.com/61690297/152001349-a8b5d9ad-94ed-4387-9d97-cf63f1584cf2.jpg)  
  
Finalment creem també al directori jenkinsScript un pushChanges.sh on li indiquem les nostres dades, indiquem la credencial com a remote i acabem de fer el push. Li donem permisos d'execució al fitxer amb "chmod +x <path>/pushChanges.sh" i ja estaria tot.  
![22](https://user-images.githubusercontent.com/61690297/152001996-f34ba267-77fc-4849-9602-e6b67a655b43.jpg)  
  
Fem push i build novament passant els paràmetres que volem al nostre commit i veiem que finalitza amb èxit.  
![25](https://user-images.githubusercontent.com/61690297/152002243-fa10a4a5-d1b1-491e-b298-5f23e53edfcb.jpg)  
  
Ara si anem als nostres commits realitzats veiem que hi ha un nou que s'ha generat automàticament amb les dades que hem ficat als paràmetres.  
![26](https://user-images.githubusercontent.com/61690297/152002377-088a0f14-02cc-4895-92ef-47b98966ac09.jpg)  
  
Així que si anem al final del nostre README podem veure que ara tenim uns tests satisfactoris de Cypress.  
![27](https://user-images.githubusercontent.com/61690297/152002677-3a033750-e6ac-4601-856d-fbf2aa811cba.jpg)  
  
Per a comprovar que realment funciona com deu, anem a forçar un error de Cypress per a veure si la badge canvia. Anem a cypress/integration/1-my-tests/api/users.spec.js i llancem un error.  
![28](https://user-images.githubusercontent.com/61690297/152003029-56454f90-5429-4264-a772-8c5ea0e4f515.jpg)  
  
I finalment fem un altre push i tornem a mirar el README. Podem veure que ha canviat a failure degut a l'error.  
![29](https://user-images.githubusercontent.com/61690297/152003596-a96194df-a96e-461c-884c-e0bb33505f30.jpg)  
  
<!---Start place for the badge -->
RESULTADO DE LOS ÚLTIMOS TESTS: [![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)
<!---End place for the badge -->
