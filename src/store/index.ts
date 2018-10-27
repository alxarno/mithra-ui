import { IRootStore } from "./interfeces";
import AppStoreModule from './modules/app'
import {IAppStoreModule} from './modules/app/interfaces'


export default class RootStore implements IRootStore{
  appStore:IAppStoreModule

  constructor(){
    this.appStore = new AppStoreModule(this)
  }

}