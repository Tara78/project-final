FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN ["npm", "install"]
COPY . .
ENV MONGO_URL=mongodb+srv://tara:hnNEOTdFyaFmVUeA@cluster0.ewvfes3.mongodb.net/final-project-user?retryWrites=true&w=majority

# ENV PORT=8080

ENV PORT 8080

EXPOSE $PORT

ENTRYPOINT ["npm", "start"]



