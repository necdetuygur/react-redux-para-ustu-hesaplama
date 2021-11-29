import { Dispatch } from "redux";

export const hesapla = (para: number) => (dispatch: Dispatch) => {
  dispatch({
    type: "HESAPLA",
    payload: para
  });
};
