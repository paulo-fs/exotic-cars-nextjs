import axios, { AxiosError } from 'axios';

const api = axios.create({
	baseURL: 'https://exotic-cars-5810f-default-rtdb.firebaseio.com/',
	timeout: 6000,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
});

api.interceptors.response.use(
	async (response) => {
		if (response.status === 200) return await response.data;
	},
	function (error: AxiosError) {
		if (error.response) {
			return Promise.reject(error.response);
		}
		return Promise.reject(error);
	}
);

export default api;
