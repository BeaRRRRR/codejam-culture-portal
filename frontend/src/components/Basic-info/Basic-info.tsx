import React from 'react';

import './Basic-info.scss';

const BasicInfo: React.FC = () => (
  <div className="basic-info">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/1200px-Smiley.svg.png"
      alt="author image"
      className="basic-info__image" />
    <h2 className="basic-info__title">Михаил Павлович Парусников</h2>
    <p className="basic-info__life" >(1893 — 1968)</p>
    <p className="basic-info__description">Cоветский архитектор, действительный член АА СССР (1950), академик АН БССР (1950; член-корреспондент с 1947). Педагог, профессор (с 1948). Лауреат Государственной премии Белорусской ССР (1968).</p>
  </div>
);

export default BasicInfo;
