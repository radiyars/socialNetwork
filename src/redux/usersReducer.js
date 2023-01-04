import { usersAPI } from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


// state по умолчанию
let initialState = {
	users: [],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 2,
	isFetching: false,
	followingInProgress: [],
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
			return { ...state, users: action.users };

		case SET_CURRENT_PAGE:
			return { ...state, currentPage: action.currentPage };

		case SET_TOTAL_USERS_COUNT:
			return { ...state, totalUsersCount: action.totalUsersCount };

		case TOGGLE_IS_FETCHING:
			return { ...state, isFetching: action.isFetching };

		case TOGGLE_IS_FOLLOWING_PROGRESS:
			return {
				...state,
				followingInProgress: action.isFetching
					? [...state.followingInProgress, action.userId]
					// пропускаем только ту Id, которая неравна той Id, которая пришла в action
					: state.followingInProgress.filter(id => id != action.userId)
			};

		default:
			return state;
	}
}

// Подписаться на юзера
export const followSuccses = userId => ({ type: FOLLOW, userId });

// Отписаться от юзера
export const unfollowSucces = userId => ({ type: UNFOLLOW, userId });

// Получаем данные на юзеров
export const setUsers = users => ({ type: SET_USERS, users });

// Выбираем "порцию" юзеров
export const setCurrentPage = currentPage => ({ type: SET_CURRENT_PAGE, currentPage });

// Сетаем общее количество юзеров
export const setTotalUsersCount = totalUsersCount => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });

// Определяем выводить рисунок загрузки или нет
export const toggleIsFetching = isFetching => ({ type: TOGGLE_IS_FETCHING, isFetching });

// Определяем блокировать кнопку FOLLOW или нет
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });


// thunk
export const requestUsers = (page, pageSize) => {
	return (dispatch) => {
		dispatch(toggleIsFetching(true));
		dispatch(setCurrentPage(page));

		usersAPI.getUsers(page, pageSize)
			.then(data => {
				dispatch(toggleIsFetching(false));
				dispatch(setUsers(data.items));
				dispatch(setTotalUsersCount(data.totalCount));
			});
	}
}

export const follow = (userId) => {
	return (dispatch) => {
		dispatch(toggleFollowingProgress(true, userId));
		usersAPI.follow(userId)
			.then(data => {
				if (data.resultCode == 0) {
					dispatch(followSuccses(userId));
				}
				dispatch(toggleFollowingProgress(false, userId));
			});
	}
}

export const unfollow = (userId) => {
	return (dispatch) => {
		dispatch(toggleFollowingProgress(true, userId));
		usersAPI.unfollow(userId)
			.then(data => {
				if (data.resultCode == 0) {
					dispatch(unfollowSucces(userId));
				}
				dispatch(toggleFollowingProgress(false, userId));
			});
	}
}



export default usersReducer;