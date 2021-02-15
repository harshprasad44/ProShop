# ProShop
Complete Online Shopping WebApp

## Env Variables
Create a .env file in then root and add the following

```javascript
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
```

## Install Dependencies (frontend & backend)
```bash
npm install
cd frontend
npm install
```

## Run
```bash
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```
