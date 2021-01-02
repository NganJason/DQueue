import 'dotenv/config.js'
import mongoose from 'mongoose'

import config from './config.js'
import app from './app.js'

const PORT = config.port
const mongoUri = config.mongoUri

async function run() {
  try {
    // Connect to mongo database
    await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
    console.log('Successfully connected to database!')

    // Listen to port
    app.listen(PORT, (err) => {
      if (err) throw err
      console.log(`App is listening at port ${PORT}!`)
    })
  } catch (error) {
    console.log(error)
  }
}

run()