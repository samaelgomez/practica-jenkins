pipeline {
    agent any
    parameters {
        string(name: 'Ejecutor', description: 'Nombre de la persona que ejecuta la pipeline')
        string(name: 'Motivo', description: 'Motivo de la ejecución')
        string(name: 'Correo notificación', description: 'Correo para notificar el resultado de las stages')
    }

    environment {
        jenkinsRepository = credentials("JenkinsRepository")
        vercelToken = credentials("vercelToken")
    }
    
    triggers {
        pollSCM('H H/3 * * *')
    }

    stages {
        stage ("Install dependencies") {
            steps {
                sh "npm install && apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb -y && npm run build && (npm run start&)"
            }
        }

        stage ("Linter") {
            steps {
                script {
                    env.LINTER_RESULT = sh(script: "npm run lint", returnStatus:true)
                }
            }
        }

        stage ("Test") {
            steps {
                script {
                    env.CYPRESS_RESULT = sh(script: "npx cypress run", returnStatus:true)
                }
            }
        }

        stage ("Update_Readme") {
            steps {
                script {
                    env.README_RESULT = sh(script: "node ./jenkinsScripts/index.js ${env.CYPRESS_RESULT}", returnStatus:true)
                }
            }
        }

        stage ("Push_Changes") {
            steps {
                script {
                    sh "./jenkinsScripts/pushChanges.sh ${params.Ejecutor} ${params.Motivo} ${env.jenkinsRepository}"
                }
            }
        }

        stage ("Deploy_to_Vercel") {
            steps {
                sh "./jenkinsScripts/vercel.sh ${env.LINTER_RESULT} ${env.CYPRESS_RESULT} ${env.README_RESULT} ${env.vercelToken}"
            }
        }
    }
}