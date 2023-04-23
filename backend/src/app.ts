import express from 'express'
import cors from 'cors'
import axios from 'axios'
import * as dotenv from 'dotenv'

dotenv.config()

class App {
  public express: express.Application

  public constructor() {
    this.express = express()
    this.middlewares()
    this.routes()
  }

  private middlewares() {
    this.express.use(express.json())
    this.express.use(cors({ origin: true }))
  }

  private routes(): void {
    this.express.post('/authenticate', async (req, res) => {
      const { username } = req.body

      try {
        const response = await axios.put(
          'https://api.chatengine.io/users',
          { username: username, secret: username, first_name: username },
          { headers: { 'private-Key': process.env.PRIVATE_KEY } },
        )
        return res.status(response.status).json(response.data)
      } catch (err) {
        return res.status(err.response.status).json(err.response.data)
      }
    })
  }
}
export default new App().express
