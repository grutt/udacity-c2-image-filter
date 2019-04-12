# Udagram Image Filtering Microservice

Udagram is a simple cloud application developed along side the Udacity Cloud Engineering Nanodegree. It allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering microservice.

The project is split into three parts:
1. [The Simple Frontend](https://github.com/grutt/udacity-c2-frontend)
A basic Ionic client web application which consumes the RestAPI Backend. 
2. [The RestAPI Backend](https://github.com/grutt/udacity-c2-restapi)
Which is a Node-Express server which can be deployed to a cloud service.
3. [The Image Filtering Microservice](https://github.com/grutt/udacity-c2-image-filter) `This Repo`
Which is the final project for the course. It is a Node-Express application which runs a simple Python script to process images.

##Tasks
### Setup Python Enviornment
`pip install virtualenv`
`virtualenv venv`
`source venv/bin/activate`

`deactivate`

### Setup Node Enviornment
`npm init`
`npm i express aws-sdk  --save`
`npm i ts-node-dev tslint typescript --save-dev`
`npm i @types/bluebird @types/express @types/node --save-dev`

### Create a new server.ts file
Use our basic server as an example to set up this file. For this project it's ok to keep all of your business logic in the one server.ts file, but you can try to use feature directories and app.use routing if you're up for it.

### Add your POST imagetoprocess endpoint
It should take a string filekey as an input paramater or respond with 422 unprocessable.
It should require a token in the Auth Header or respond with 401 unauthorized.
    The matching token should be saved as an enviornment variable
    (TIP we broke this out into its own auth.router before, but youc an access headers as part of the req.headers within your endpoint block)
It should NOT use SignedUrls, instead use the aws s3 iny andterface to GetObjects and save to disk locally and put object from disk into the bucket.
    (TIP don't forget we'll need this server to have limited permissions for this bucket)

### Refactor your restapi server
#### POST feed endpoint
It should include a POST request to the new server (TIP keep the server address and token as enviornment variables)
It should update the models to include a processed_imageURL (TIP we've include a migration file for you)

#### GET feed item endpoints
It should map signed urls for the processed_imageURL using the AWS service.

#### Extra Credit - Postman Integration Tests
Try writing a postman collection to test your endpoint. Be sure to cover:
    POST requests with and without tokens
    POST requests with valid and invalid paramaters

#### Extra Credit - Postback URL
Image processing and other complex processing tasks might take a decent amount of time. Try implementing postback urls.
    Repond to the original request with 200 if the request is well formed and processing started. The requesting service should include a url to postback status to.
    Upon completion of the process, post a 200 response indicating the processing was completed.

### Deploying your system!
