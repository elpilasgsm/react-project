import {v4 as uuidv4} from 'uuid';

const NAME = "NOTES"
const StorageService = {

    save(obj) {
        if (!localStorage.getItem(NAME)) {
            localStorage.setItem(NAME, JSON.stringify({}));
        }
        if (!obj.id) {
            obj.id = uuidv4();
        }
        let data = this.getAll();
        data[obj.id] = obj;
        localStorage.setItem(NAME, JSON.stringify(data));
    },
    get(id) {
        let data = this.getAll();
        if (data[id]) {
            return data[id]
        } else {
            return null;
        }
    },
    delete(id) {
        let data = this.getAll();
        delete data[id];
        localStorage.setItem(NAME, JSON.stringify(data));
    },
    getAll() {
        return JSON.parse(localStorage.getItem(NAME));
    }
}
export const save = StorageService.save.bind(StorageService);
export const get = StorageService.get.bind(StorageService);
export const getAll = StorageService.getAll.bind(StorageService);
export const deleteRow = StorageService.delete.bind(StorageService);
