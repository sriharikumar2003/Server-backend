const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const serviceRoutes = require('./routes/serviceRoutes');

const app = express();
const port = 3000;
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/healthcare_services', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

app.use('/api/services', serviceRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
