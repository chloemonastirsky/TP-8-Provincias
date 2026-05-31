import ProvinceRepository from '../repositories/province-repository.js';

class ProvinceService {
    constructor() {
        this.repository = new ProvinceRepository();
    }

    async getAllAsync() {
        return await this.repository.getAllAsync();
    }

    async getByIdAsync(id) {
        return await this.repository.getByIdAsync(id);
    }

    async createAsync(data) {
        return await this.repository.createAsync(data);
    }

    async updateAsync(id, data) {
        return await this.repository.updateAsync(id, data);
    }

    async deleteByIdAsync(id) {
        return await this.repository.deleteByIdAsync(id);
    }
}

export default ProvinceService;