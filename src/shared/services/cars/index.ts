import api from '../api';
import { IAllCarsResponse, ICarService } from 'src/shared/interfaces';

export default function carsService(): ICarService {
	async function getAllCars(): Promise<IAllCarsResponse[]> {
		return api.get('/cars.json');
	}

	async function getCar(id: number): Promise<IAllCarsResponse> {
		return api.get(`/cars/${id - 1}.json`);
	}

	return { getAllCars, getCar };
}
