export interface ICarService {
	getAllCars: () => Promise<IAllCarsResponse[]>;
	getCar: (id: number) => Promise<IAllCarsResponse>;
}

export interface IAllCarsResponse {
	id: number;
	brand: Brand;
	model: string;
	price: number;
	small_picture: string;
	options: Option[];
}

export interface Brand {
	title: string;
	brand_name: string;
	logo: string;
}

export interface Option {
	option: number;
	color: string;
	avaliable: boolean;
	picture: string;
}
