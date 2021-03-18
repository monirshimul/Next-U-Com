import { LANG_CHANGE } from '../Actions/LangAction';

const initState = {
    lang: "English"
}

const LangReducer = (state = initState, action) => {
    switch (action.type) {
        case LANG_CHANGE:
            return Object.assign({}, state,
                { lang: action.payload }
            );
        default:
            return state;
    }
}

export default LangReducer;