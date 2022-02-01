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
