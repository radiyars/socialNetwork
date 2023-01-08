import { usersAPI } from '../api/api';
import { updateObjectInArray } from './../components/utils/validators/object-helpers';


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
				users: updateObjectInArray(state.users, action.userId, 'id', { followed: true })
			};

		case UNFOLLOW:

			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, 'id', { followed: false })
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
export const requestUsers = (page, pageSize) => async (dispatch) => {
	dispatch(toggleIsFetching(true));
	dispatch(setCurrentPage(page));

	let response = await usersAPI.getUsers(page, pageSize);
	dispatch(toggleIsFetching(false));
	dispatch(setUsers(response.items));
	dispatch(setTotalUsersCount(response.totalCount));
};


const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
	dispatch(toggleFollowingProgress(true, userId));
	let response = await apiMethod(userId);
	if (response.resultCode == 0) {
		dispatch(actionCreator(userId));
	}
	dispatch(toggleFollowingProgress(false, userId));
}


export const follow = (userId) => async (dispatch) => {
	followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccses);
};


export const unfollow = (userId) => async (dispatch) => {
	followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSucces);
};


export default usersReducer;