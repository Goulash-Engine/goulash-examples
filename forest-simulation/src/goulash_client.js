import axios from "axios";

export default class GoulashClient {
  setupActor(key) {
    axios.post(`http://localhost:8080/actors/${key}`)
  }

  async fetchAllActors() {
    const response = await axios.get('http://localhost:8080/actors?container=root')
    return response.data
  }

}
