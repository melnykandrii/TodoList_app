import { SHOW_NEW_MODAL, SHOW_UPDATE_MODAL } from "../actions/modal.actions";

const initialState = {
  newModal: false,
  updateModal: false,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_NEW_MODAL:
      return {
        ...state,
        newModal: !state.newModal,
      };
    case SHOW_UPDATE_MODAL:
      return {
        ...state,
        updateModal: !state.updateModal,
      };

    default:
      return state;
  }
};

export default modalReducer;
