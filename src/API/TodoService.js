import axios from "axios";
export class TodoService {
  static async getTodos() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    return response.data;
  }
}
