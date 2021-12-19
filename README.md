Vercel deployment: https://practica-ghactions.vercel.app/

# Pràctica GitHub Actions
Primer que tot prepararem l'entorn on treballarem amb el nou directori i clone.  
![1](https://user-images.githubusercontent.com/61690297/146692761-7a4b7742-3e3d-4a73-99ee-fddbf90cc2d7.jpg)  

Necessitem també menejar els arxius ocults manualment.  
![1_2](https://user-images.githubusercontent.com/61690297/146692785-02ae1d49-d65b-4c60-9e44-aa3c8b10f1f2.jpg)  

## Linter
Per al primer job de linter simplement haurem de crear l'arxiu de workflow i fer el npm run lint.  
![2](https://user-images.githubusercontent.com/61690297/146692827-fc285ff0-dd2b-4586-a99b-5596b7ac2783.jpg)  

Açò ens donarà els primers errors que haurem de solucionar.  
![3](https://user-images.githubusercontent.com/61690297/146692840-71de5505-940a-4371-94c6-e12ab7588ff7.jpg)  

Anem als arxius que ens donen problemes i canviem el necessari.  
![4](https://user-images.githubusercontent.com/61690297/146692879-b1972f6c-97d5-452d-92a5-f43187343cd6.jpg)  
![5](https://user-images.githubusercontent.com/61690297/146692887-41894102-b35d-42cf-b4a4-c6eedb9f7000.jpg)  

De manera que ja no ens dóna cap error i el job acaba satisfactòriament.  
![6](https://user-images.githubusercontent.com/61690297/146692908-91995eba-3aaa-4bdf-8ccf-22427df98e67.jpg)  
![7](https://user-images.githubusercontent.com/61690297/146692914-53e4504d-3538-471a-be9f-641752698fb0.jpg)  

## Cypress
Per al job de Cypress haurem de ficar el needs per a que es faça sempre després de Linter i li fiquem el if always per a que sempre s'execute.  
A més, en el step de l'action de Cypress li fiquem un id per a poder accedir al seu outcome en el següent step i muntem l'artefacte.  
![8](https://user-images.githubusercontent.com/61690297/146692996-3bccc12c-d29a-47a8-929b-40f9a1a74dc4.jpg)  

Ara podem veure que els tests de Cypress també es passen correctament i que crea l'artifact.  
![9](https://user-images.githubusercontent.com/61690297/146693027-61d7d927-2be2-4786-946e-9598d36ececa.jpg)  
![10](https://user-images.githubusercontent.com/61690297/146693031-3dd23d62-ddef-4bb0-9def-854d7f4f54af.jpg)  
![11](https://user-images.githubusercontent.com/61690297/146693040-3e85ec7a-f0de-42db-8423-6aa3c707ac41.jpg)  

També podem baixar-se l'artifact i veure que el seu contingut és correcte.  
![12](https://user-images.githubusercontent.com/61690297/146693052-f823beda-14f4-44e9-9be3-d6e14c14ea77.jpg)

## Badge job
Per a afegir la badge al README necessitem un arxiu JS que reemplace els valors que volem, per a açò farem un regex i amb el replace ho canviem fàcilment.  
![13](https://user-images.githubusercontent.com/61690297/146693093-3441cb75-8e6d-46de-ae71-007ad698bd46.jpg)  

Ara crearem el nostre propi action que agafarà l'input del workflow i executarà el nostre JS.  
![14](https://user-images.githubusercontent.com/61690297/146693134-21a8f03c-c652-4771-b027-62999bbdc626.jpg)  

I al workflow afegim el nou job que es baixarà l'artifact generat, afegirà en un output anomenat "cypress-result" el contingut d'aquest i cridarà a l'action que hem fet passant-li l'output creat. També farà el commit en cas de que hi haja algo que commitejar.  
![15](https://user-images.githubusercontent.com/61690297/146693186-3983eade-2dfc-4e20-8406-5a8e6fcdaf9e.jpg)  

Ara ja podem fer el build de l'arxiu JS.  
![16](https://user-images.githubusercontent.com/61690297/146693202-cfe4cee8-5994-4b50-ad5b-dfee2af11936.jpg)  

I fiquem el que ens ha donat en l'action, de manera que tindríem una estructura així:  
![17](https://user-images.githubusercontent.com/61690297/146693223-71c871ff-8338-4910-bf07-dbb150f283e7.jpg)  

Fem el push i veiem que les actions i l'artifact funcionen perfectament i el badge s'ha afegit satisfactòriament.  
![18](https://user-images.githubusercontent.com/61690297/146693255-21f03c1c-c26e-44fc-9ecc-04cf3efea440.jpg)  
![19](https://user-images.githubusercontent.com/61690297/146693258-e8af8af4-79ee-4823-bd1c-db3112f70563.jpg)  

## Vercel
Per a fer el deployment de la nostra aplicació en Vercel primer hem de preparar el nostre projecte per a muntar-lo. Per a açò soles hem de fer "npx vercel link" i plenar l'informació demanada.  
![20](https://user-images.githubusercontent.com/61690297/146693350-ebfac4fb-5b90-41a1-8ffb-46d77584fbf2.jpg)  

Amb açò ens loggejarem també a Vercel i ja tindríem aquesta configuració preparada.  
![21](https://user-images.githubusercontent.com/61690297/146693363-1a33ab2d-64ff-4e43-8f44-40b408e41313.jpg)  

Aquesta instal·lació ens crearà un nou fitxer project.json amb el nostre projectId i orgId que necessitarem mes endavant.  
![22](https://user-images.githubusercontent.com/61690297/146693393-cd801dc6-ef48-444c-ad2d-517439dfc1d2.jpg)  

Si anem als ajustos de Vercel, en l'apartat de tokens ens permet crear-nos una token d'identificació que també necessitem. Apretem en "create" i ens enviarà un correu amb el nostre token.  
![23](https://user-images.githubusercontent.com/61690297/146693442-afb99b71-55df-43b2-af31-19ef06a50a1d.jpg)  

Ara amb aquestes 3 tokens ja tenim tot el necessari per al projecte, de manera que anem al nostre repositori i les afegim com a secrets del nostre repositori GitHub per a mantindre l'informació segura.  
![24](https://user-images.githubusercontent.com/61690297/146693466-d95d7914-12b2-4073-8713-22c1bc70cf62.jpg)  

Amb açò fet soles ens queda anar al nostre workflow i afegir-li el step amb l'action de vercel i les tokens generades. El nom d'aquestes variables ha de ser aquest i no cap altre per a que Vercel les puga llegir.  
![25](https://user-images.githubusercontent.com/61690297/146693497-b06ed7b2-1760-4dcf-a732-8bcd84397000.jpg)  

Si ara anem a "overview" en Vercel veurem que està el nostre projecte disponible, i si apretem en "visit" veurem el nostre projecte funcionant.  
![26](https://user-images.githubusercontent.com/61690297/146693517-fe366f68-2983-47cc-98c2-39c44295538b.jpg)  
![27](https://user-images.githubusercontent.com/61690297/146693520-d7d45d78-776c-41ac-b3ce-53d913a036bc.jpg)  

## Notification job
Per a enviar-nos les notificacions dels resultats dels nostres jobs utilitzarem PostMail. Primer que tot anirem a "https://postmail.invotes.com/", ficarem el nostre email i rebrem un token d'accés que guardarem com a secret de GitHub per a utilitzar més avant.  
![28](https://user-images.githubusercontent.com/61690297/146693630-848fc8bc-e911-4444-af73-20ebe57e136d.jpg)  

Farem un arxiu JS on ficarem el token que hem generat i ficarem l'asumpte, missatge amb tota la informació que rebrem per l'action i ho enviem.  
![29](https://user-images.githubusercontent.com/61690297/146693749-a8d5704e-8e7a-46d3-8868-1f368e512d5d.jpg)  

El nostre action tindrà tots els inputs que volem que rebrà del workflow i executem l'index.js.  
![30](https://user-images.githubusercontent.com/61690297/146693775-1139ac69-164e-4d14-9d65-50cfab75e3c5.jpg)  

Al workflow afegim el job de notificació que dependrà de tots els demés i executarà la nostra action enviant el token de PostMail i tots els resultats dels jobs anteriors.  
![31](https://user-images.githubusercontent.com/61690297/146693811-3c88e667-1177-4818-bb40-4d03825344ad.jpg)  

Finalment anem al nostre repositori i veiem tots els jobs funcionant.  
![32](https://user-images.githubusercontent.com/61690297/146693824-cc5cbc23-fdb8-4dc1-b2ec-035043b175b5.jpg)  

També veurem que ens ha aplegat el correu amb els resultats.  
![33](https://user-images.githubusercontent.com/61690297/146693838-22d2a62e-5108-48a9-a4e2-130483af6914.jpg)  

I si editem alguns fitxers per a que dóne errors o salte algun job veiem que els resultats canvien també.  
![34](https://user-images.githubusercontent.com/61690297/146693853-c0b6105a-8bd4-484c-9a6a-2c4585cd5e2d.jpg)  

<!---Start place for the badge -->
RESULTADO DE LOS ÚLTIMOS TESTS: [![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)
<!---End place for the badge -->
