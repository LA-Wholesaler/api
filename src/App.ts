import express, {Application} from 'express';
import {Connection, Model} from 'mongoose'
import Models from './models'
import Controllers from './controllers'

interface SettingsInterface {
  port: number
}

export default class App {
  expressApp: Application
  db: Connection
  url: string
  settings: SettingsInterface = {
    port: 3000
  }
  models: any
  controllers: any

  constructor (mongooseConnection: Connection) {
    this.expressApp = express()
    this.db = mongooseConnection
    this.models = Models(mongooseConnection)
    this.controllers = Controllers(this.models)
  }

  async boot () {
    console.log('booting', this.models, this.controllers)

  }

  async start () {
    console.log('starting')
    await this.db.openUri('mongodb://localhost:27017/lawholesaler')
    console.log('this.db', this.db.readyState)
    await this.expressApp.listen(this.settings.port)
    console.log('started')
  }
}