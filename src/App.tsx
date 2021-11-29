import React, { useState } from "react";
import { connect } from "react-redux";
import { hesapla } from "./actions";
import "./style.css";
const App = (props: any) => {
  const [para, setPara] = useState(0.0);
  return (
    <div className="container mt-3">
      <div className="card">
        <div className="card-header">Para Üstü Hesaplama</div>
        <div className="card-body">
          <div className="input-group">
            <span className="input-group-text">Para</span>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setPara(parseFloat(e.target.value));
              }}
            />
          </div>
          <ul className="list-group list-group-flush">
            {Object.entries(props.paraUstu).map((t: any, k: any) => (
              <li className="list-group-item font-weight-bold" key={k}>
                {t[1]}
                &times;
                {t[0]}₺
              </li>
            ))}
          </ul>
        </div>
        <div className="card-footer">
          <button
            className="btn btn-primary float-end"
            type="button"
            onClick={() => props.hesapla(para)}
          >
            Hesapla
          </button>
        </div>
      </div>
    </div>
  );
};

export default connect(
  (state: { paraUstu: Object }) => {
    return {
      paraUstu: state.paraUstu
    };
  },
  { hesapla }
)(App);
