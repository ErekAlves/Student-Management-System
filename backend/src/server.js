const app = require('./app');

require('dotenv').config();

const conection = require('./models/conection');

const PORT = process.env.PORT || 3333;

conection
  .sync({ force: false })
  .then(() => {
    console.log('Sync OK');
    app.listen(`${PORT}`, () => console.log(`Server running on port ${PORT}`));
  })

  .catch((error) => {
    console.error('Error sync:', error);
  });
