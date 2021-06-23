import { usersClient } from "../http_common";

class UsersDataService {
  getAll() {
    return usersClient.get("/users");
  }
}

export default new UsersDataService();