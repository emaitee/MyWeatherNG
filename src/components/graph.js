import React from 'react';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from 'react-sparklines';
import _ from 'lodash';

function avg(data) {
  return _.round(_.sum(data) / data.length);
}

export default function({ data, color, unit }) {
  return (
    <div>
      <Sparklines height={120} width={180} data={data}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <p>{avg(data)}{unit}</p>
    </div>
  );
}
