import React from 'react';

import './Works-list.scss';
import Work from '../Work';

const WorksList: React.FC = () => (
  <div className="works-list">
    <h2 className="works-list__title">Шедевры</h2>
    <table className="works-list__table">
      <tr><th className="works-list__table--header">Произведение</th><th className="works-list__table--header">Дата создания</th></tr>
      <Work />
      <Work />
    </table>
  </div>
);

export default WorksList;