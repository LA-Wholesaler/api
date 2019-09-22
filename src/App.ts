import express, {Application} from 'express';

export default class App {
  expressApp: any
  url: string

  constructor () {
    this.expressApp = express()
  }

  async boot () {
    console.log('booting')
  }

  async start () {
    console.log('starting')
  }
}