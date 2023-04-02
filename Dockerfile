FROM node

WORKDIR /app

COPY package.json .

COPY package-lock.json .

RUN npm ci

COPY . .

# RUN npm build

EXPOSE 3000

# CMD ["npm", "start"]