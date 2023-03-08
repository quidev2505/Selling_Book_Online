import createHttp from "./http.service";

class ProductService {
  constructor() {
    this.http = createHttp("/api/order");
  }

  async getAllOrder() {
    return (await this.http.get("/")).data;
  }

  async create(data) {
    return (await this.http.post("/", data)).data;
  }

  async get(id) {
    return (await this.http.get(`/${id}`)).data;
  }

  async getOrderWithID(id) {
    return (await this.http.get(`/${id}`)).data;
  }
}

export default new ProductService();
