# Quiz App

Microservice to upload an image to AWS S3 bucket
[App Link](https://quiz-app-frontend-fqdpa.ondigitalocean.app/)

## Features

- Create a Quiz setting up MCQ (Multiple Choice Question)
- Upload an image
- Complete a Quiz by selecting an Answer

### Other projects connected to the app

- [Frontend](https://github.com/noyan-alimov/quiz-app-frontend)
- [Main Backend](https://github.com/noyan-alimov/quiz-app-main-backend)
- [Reverse Proxy acts as an endpoint for the Frontend](https://github.com/noyan-alimov/quiz-app-reverse-proxy)

### Deployment

Deployed to AWS EKS.
But, due to Auth0 being able to work only with HTTPS, deployed to Digital Ocean as there is little to no effort to setup HTTPS there.
