const INITIAL_STATE = {
  paraUstu: {}
};

export const reducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case "HESAPLA":
      let paraUstu: any = {};
      let para: number = action.payload;
      const paralar = [200, 100, 50, 20, 10, 5, 1, 0.5, 0.25, 0.1, 0.05, 0.01];
      for (let i in paralar) {
        if (para >= paralar[i]) {
          para -= paralar[i] * (paraUstu[paralar[i]] = ~~(para / paralar[i]));
        }
      }
      return { ...state, paraUstu };
    default:
      return state;
  }
};
