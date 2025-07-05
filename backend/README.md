# Backend Server

Basic Express server for Equilearn application.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the `backend` folder with your MongoDB connection string. You can use the connection provided earlier:

```env
PORT=4000
MONGODB_URI="mongodb+srv://rksrivastava9890:UlSY7YNEgR6Q6jE2@centuryfinancecluster.bggmzok.mongodb.net/centuryFinanceDB?retryWrites=true&w=majority&appName=CenturyFinanceCluster"
```

3. Run the server in development mode:

```bash
npm run dev
```

For a simple production run, use:

```bash
npm start
```

The server will respond with `Backend is running` on the root route and will connect to MongoDB if the connection string is valid.