pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                // Your build steps here
                echo 'Building...'
            }
        }
        stage('Test Branch Main') {
            steps {
                // Your test steps here
                echo 'Testing...'
            }
        }
        stage('Test Branch Test') {
            steps {
                // Your test steps here
                echo 'Testing Main again'
            }
        }
        stage('Deploy') {
            steps {
                // Your deployment steps here
                echo 'Deploying...'
            }
        }
        stage('Deploy Test') {
            steps {
                // Your deployment steps here
                echo 'Deploying...'
            }
        }
    }
}
