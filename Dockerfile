From node:20-alphine

Workdir /app

Copy package.json

Run npm install

Copy ..

Run npm run build

Expose 3000

Cmd [ "npm", "run", "start"]