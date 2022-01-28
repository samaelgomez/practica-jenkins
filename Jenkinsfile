pipeline {
    agent any
    parameters {
        string(name: 'Ejecutor', description: 'Nombre de la persona que ejecuta la pipeline')
        string(name: 'Motivo', description: 'Motivo de la ejecución')
        string(name: 'Correo notificación', description: 'Correo para notificar el resultado de las stages')
    }
    
    triggers {
        pollSCM('H H/3 * * *')
    }

    stages {
        stage ("Install dependencies") {
            steps {
                sh "npm ci && apt-get install xvfb"
            }
        }

        stage ("Linter") {
            steps {
                sh "npm run lint"
            }
        }

        stage ("Test") {
            steps {
                sh "./node_modules/.bin/cypress run"
            }
        }
    }
}
