import axios from "axios";

export default class GoulashClient {
  setupActor(id) {
    axios.post(`http://localhost:3000/actors/${id}`)
  }

}
