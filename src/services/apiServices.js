import axios from "axios";
//.env set VITE_LARAVEL_BACKEND_API=localhost:8000
const apiUrl = import.meta.env.VITE_LARAVEL_BACKEND_API;


class ApiServices {

    axiosInstance = axios.create({
        baseURL: apiUrl
    })

    constructor() {
        this.axiosInstance.interceptors.request.use(function (config) {
            const token = localStorage.getItem('token');
            if (!token) {
                return config;
            }
            // console.log(token);
            config.headers.Authorization = `Bearer ${token}`;
            return config;
        }, function (error) {
            return Promise.reject(error);
        });

        //error response
        this.axiosInstance.interceptors.response.use(function (response) {
            // console.log(response.data.errors);
            return response.data;
        }, function (error) {
            return Promise.reject(error.response.data);
        });
    }

    // test apiService
    test = {
        get: async () => {
            return await this.axiosInstance.get('/2')
        }
    }

    //authentication api
    auth = {
        login: (payload) => this.axiosInstance.post('/api/login', payload),
        logout: () => this.axiosInstance.post('/auth/logout'),
    }

    //application api
    products = {
        getProuducts: (page) => this.axiosInstance.get('/api/products'),
        getProuductsId: (id) => this.axiosInstance.get('/api/products/' + id)
    }
}

export const apiServices = new ApiServices();