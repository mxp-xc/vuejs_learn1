import axios from 'axios'
import settings from "@/common/const"


export class Request {
  constructor(config, baseURL=settings.baseURL, timeout) {
    this.config = config
    this.instance = axios.create({
      baseURL,
      timeout
    })
  }

  send() {
    let config = this.config

    this.instance.interceptors.request.use(config => {
      return config
    }, error => {
      console.log(error);
    })
    this.instance.interceptors.response.use(response => {
        return response.data
      }, error => {
        console.log(error);
      }
    )
    return this.instance(config)
  }

}
