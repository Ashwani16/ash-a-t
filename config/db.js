const mongoose = require ("mongoose")

var connection = null;

connection = mongoose.connect(process.env.URI).then(() => {
    console.log('✅ MongoDB connected successfully');
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
  });

  module.export ={connection}