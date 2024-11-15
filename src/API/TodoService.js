import axios from "axios";
class TodoService {
  async getTodos() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  }
}
export const todoService = new TodoService();
