import * as types from "../actions/actionTypes";


export default function courseReducer(state = [], action){
	switch(action.type){
		case types.CREATE_COURSE_SUCCESS:
			return [...state,
				Object.assign({},action.course)
			];
            // Spread operator and immutability of store -> Object.assign
        case types.UPDATE_COURSE_SUCCESS:
            return [
                ...state.filter(course => course.id !== action.course.id),Object.assign({},action.course)
            ];
		case types.LOAD_COURSES_SUCCESS:
			return action.courses;

		default:
			return state;
	}
}