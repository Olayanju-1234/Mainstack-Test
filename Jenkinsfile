pipeline {
    agent any
    
    stages {
        stage('Hello') {
            steps {
                // Clone the repository
                sh 'echo "Helloing the project..."'
            }
        }
        
        stage('Build') {
            steps {
                // Example build step
                sh 'echo "Building the project..."'
                // Add your actual build commands here, e.g., `npm install` or `mvn clean package`
            }
        }
        
        stage('Deploy') {
            steps {
                // Example deploy step
                sh 'echo "Deploying the project..."'
                // final stage
                // Add your actual deploy commands here, e.g., deploying to a server or pushing a Docker image
            }
        }
    }
    
    post {
        always {
            // Steps that always run after the pipeline, such as cleanup
            sh 'echo "Cleaning up..."'
        }
        success {
            // Steps that run only if the pipeline succeeds
            sh 'echo "Deployment succeeded."'
        }
        failure {
            // Steps that run only if the pipeline fails
            sh 'echo "Deployment failed."'
        }
    }
}