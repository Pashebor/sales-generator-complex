/*CONSTANTS*/
export const SHOW_OFFER = 'showOffer';
/*ACTIONS*/

export const showOffer = (index) => {
  return{
      type: SHOW_OFFER,
      btn: index
  }
};
