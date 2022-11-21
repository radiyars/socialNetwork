import axios from "axios";

export const usersAPI = {

	getUsers(currentPage = 1, pageSize = 10) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => response.data);
	},

	unfollow(userId = 0) {
		return instance.delete(`follow/${userId}`)
			.then(response => response.data);
	},

	// ! у post должен быть еще один объект после url
	follow(userId = 0) {
		return instance.post(`follow/${userId}`)
			.then(response => response.data);
	}

}

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY': 'c7b45913-93c3-498c-9d8d-dac7cb1512dc'
	}
});


