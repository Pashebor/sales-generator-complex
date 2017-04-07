/*CONSTANTS*/
export const GET_MODAL_FORM = 'showModal';
/*ACTIONS*/

export const showModal = (logicValue) => {
  return{
      type: GET_MODAL_FORM,
      show: logicValue
  }
};

