
class LocalStorageService {
   static USER_DATA_KEY = 'userData';

    static saveUserData(userData) {
        localStorage.setItem(this.USER_DATA_KEY, JSON.stringify(userData))
    }

    static getUserData() {
        const storeData = localStorage.getItem(this.USER_DATA_KEY)

        if (storeData) {
            return JSON.parse(storeData)
        }

        return null
    }

    static clearUserData() {
        localStorage.removeItem(this.USER_DATA_KEY)
    }
}

export default LocalStorageService