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
        stage ("Install dependencies and start server") {
            steps {
                sh "npm ci && apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb -y && npm run dev"
            }
        }

        stage ("Linter") {
            steps {
                sh "npm run lint"
            }
        }

        stage ("Test") {
            steps {
                sh "npx cypress run"
            }
        }
    }
}
