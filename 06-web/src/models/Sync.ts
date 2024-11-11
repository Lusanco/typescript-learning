import axios, { AxiosResponse } from "axios";
const http = "http://localhost:3000/users/";

export class Sync {
  fetch(): void {
    axios
      .get(`${http}${this.get("id")}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      });
  }

  save(): void {
    const id = this.get("id");
    if (this.get("id")) {
      // put
      axios.put(`${http}${id}`, this.data);
    } else {
      // post
      axios.post(`${http}`, this.data);
    }
  }
}
