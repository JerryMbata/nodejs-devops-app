pipeline {

    agent any

    environment {
        IMAGE_NAME = "jerrymbata1/nodejs-devops-app"
        IMAGE_TAG = "${BUILD_NUMBER}"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh """
                    docker build -t ${IMAGE_NAME}:${IMAGE_TAG} .
                """
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'dockerhub',
                        usernameVariable: 'DOCKER_USER',
                        passwordVariable: 'DOCKER_PASS'
                    )
                ]) {
                    sh """
                        echo "${DOCKER_PASS}" | docker login \
                        -u "${DOCKER_USER}" \
                        --password-stdin
                    """
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                sh """
                    docker push ${IMAGE_NAME}:${IMAGE_TAG}
                """
            }
        }

        stage('Update Kubernetes Manifest') {
            steps {
                sh """
                    export HOME=/var/lib/jenkins
                    export GIT_SSH_COMMAND="ssh -o StrictHostKeyChecking=no"

                    rm -rf k8s-manifests

                    git clone git@github.com:JerryMbata/k8s-manifests.git

                    cd k8s-manifests

                    sed -i "s|image:.*|image: ${IMAGE_NAME}:${IMAGE_TAG}|" deployment.yaml

                    git config user.email "jenkins@local"
                    git config user.name "Jenkins"

                    git add deployment.yaml

                    git commit -m "Update image to ${IMAGE_TAG}" || echo "No changes to commit"

                    git push origin main
                """
            }
        }
    }
} 
