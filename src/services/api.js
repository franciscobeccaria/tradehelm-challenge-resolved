//import axios from 'axios';

const getAllData = () => {
	const MOCK = [
		{ id: 0, name: 'Sushi de pejelagarto', description: '200 g' },
		{ id: 1, name: 'Hamburguesa de pejelagarto', description: '100 g' },
		{ id: 2, name: 'Tarta de pejelagarto', description: '500 g' },
	];
	/* const request = axios.get();
	return request.then((resp) => {
		let dataArray = [];
		resp.data.history.day.forEach((e) => dataArray.push({ time: e.date, value: e.close }));
		return MOCK;
	}); */
	return MOCK;
};

const createItem = (name, description) => {
	console.log(name, description);
};

const removeItem = (id) => {
	console.log(id);
};

export { getAllData, createItem, removeItem };
