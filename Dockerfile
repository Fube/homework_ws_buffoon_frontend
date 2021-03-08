FROM node:13.12.0-alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN ["npm", "install"]
COPY . ./
RUN ["npm", "run", "build"]
ENTRYPOINT [ "npx", "serve", "-s", "build" ]
