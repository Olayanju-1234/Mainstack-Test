pipeline {
    agent any

    stages {
        stage('Trigger Pipeline Job') {
            steps {
                script {
                    // Trigger the main pipeline job
                    build job: 'Mainstack-Job', wait: true, parameters: [
                        string(name: 'BRANCH_NAME', value: "${env.BRANCH_NAME}")
                    ]
                }
            }
        }
    }
}
