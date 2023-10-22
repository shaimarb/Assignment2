const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
//app.use(bodyParser.json());

const PORT = process.env.PORT || 4002;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

mongoose.connect('mongodb+srv://rashar1500:abcde@cluster0.gykuuot.mongodb.net/?retryWrites=true&w=majority',
{useNewUrlParser:true});

const connection = mongoose.connection;

connection.once('open',()=>{
    console.log("DB connected......")
})

// Use the product routes
const productRoutes = require('./routes/product.routes');
app.use('/api/products', productRoutes);

// Route to display the welcome message
app.get('/', (req, res) => {
    res.json({ "message": "Welcome to DressStore app." });
  });