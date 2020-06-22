# Fullstack FastAPI Elasticsearch

First you have to install some dependencies:
- [python](http://python.org)
- [node](https://nodejs.org/en/)

Pratice programming using this libs:
- [react](https://pt-br.reactjs.org/)
- [webpack](https://webpack.js.org/)
- [fastapi](https://fastapi.tiangolo.com/tutorial/first-steps/)

For some study i am using specially this tutorials:
- [webpack+react](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html)


# Install Dependencies

*Open the shell(or git bash on Windows)*

1. Navigate to proeject repository
2. In the shell run `./scripts/install.sh`

# Run

*The dependencies have was to been installed*

## Developer mode

*Open the shell(or git bash on Windows)*

For running backend:

1. Navigate to project repository
2. run the `./scripts/run-server.sh`

*Open another shell(or git bash on Windows)*

For running frontend:

1. Navigate to project repository
2. run the `yarn watch:front`
3. In a new shell instance run the `yarn live:front`

## User mode

*Only with Docker for now*

*Open another shell(or git bash on Windows)*

1. Navigate to the project repository
2. run the `docker-compose up`
3. Open the http://localhost:4000 on browser