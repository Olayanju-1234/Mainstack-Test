pipeline {
    agent any

    stages {
        stage('Trigger Pipeline Job') {
            steps {
                script {
                    // Trigger the main pipeline job
                    echo "Triggering Pipeline Job"
                    build job: 'Mainstack-Job', wait: true
                }
            }
        }
    }
}
