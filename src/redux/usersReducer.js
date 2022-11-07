const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';


// state по умолчанию
let initialState = {
	// users: [
	// 	{ id: 1, followed: false, fullName: 'Radiy', status: 'cool boy!', location: { city: 'Cheboksary', country: 'Russia' } },
	// 	{ id: 2, followed: true, fullName: 'Marina', status: 'cool girl!', location: { city: 'Cheboksary', country: 'Russia' } },
	// 	{ id: 3, followed: false, fullName: 'Timur', status: 'cool boy!', location: { city: 'Cheboksary', country: 'Russia' } },
	// ],
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {

		case FOLLOW:
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.userId) {
						return { ...user, followed: true };
					}
					return user;
				})
			};

		case UNFOLLOW:

			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.userId) {
						return { ...user, followed: false };
					}
					return user;
				})
			};

		case SET_USERS:
			return { ...state, users: [...state.users, ...action.users] };

		default:
			return state;
	}
}

// Подписаться
export const followAC = userId => ({ type: FOLLOW, userId });

// Отписаться
export const unfollowAC = userId => ({ type: UNFOLLOW, userId });

// Сетаем юзеров
export const setUsersAC = users => ({ type: SET_USERS, users });



export default usersReducer;