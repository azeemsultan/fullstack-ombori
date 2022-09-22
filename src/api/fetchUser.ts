import { UserList } from "../types/users";
import axios from "axios";
import parse from "../utils/parse";
import { isUndefined } from "lodash";

class FetchUser {
  async getAll(page: number): Promise<UserList> {
    return new Promise((resolve, reject) => {
      axios
        .get(`https://reqres.in/api/users?page=${page}`)
        .then((response) => {
          response = parse(response);
          if (!isUndefined(response?.data)) {
            const res = response?.data;
            resolve(res);
          } else {
            reject(new Error("Failed to retrive users."));
          }
        })
        .catch((error) => {
          reject(new Error("Something went wrong"));
        });
    });
  }
}

export const userApi = new FetchUser();
