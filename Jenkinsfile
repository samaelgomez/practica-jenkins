pipeline {
    agent any
    parameters {
        string(name: 'Ejecutor', description: 'Nombre de la persona que ejecuta la pipeline')
        string(name: 'Motivo', description: 'Motivo de la ejecución')
        string(name: 'Correo notificación', description: 'Correo para notificar el resultado de las stages')
    }

    environment {
        jenkinsRepository = credentials("JenkinsRepository")
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
                sh "npm run lint"
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
                sh "node ./jenkinsScripts/index.js ${env.CYPRESS_RESULT}"
            }
        }

        stage ("Push_Changes") {
            steps {
                sh "./jenkinsScripts/pushChanges.sh ${params.Ejecutor} ${params.Motivo} ${env.jenkinsRepository}"
            }
        }
    }
}