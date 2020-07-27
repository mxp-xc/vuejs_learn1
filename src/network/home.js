import { Request } from "@/network/request";

export default class HomeRequest {
  static getHomeMultiData() {
    const request = new Request({
      url: '/home/multidata',
      method: 'get',
    })
    return request.send()
  }
}
