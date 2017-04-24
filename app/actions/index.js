/*CONSTANTS*/
export const SHOW_OFFER = 'showOffer';
/*ACTIONS*/

export const showOffer = (logicValue, index) => {
  return{
      type: SHOW_OFFER,
      show: logicValue,
      btn: index
  }
};

