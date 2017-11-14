import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

const average = data => _.round(_.sum(data) / data.length);

const WeatherChart = ({ data, color, units }) => (
    <div>
        <Sparklines height={120} width={180} data={data}>
            <SparklinesLine color={color} />
            <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <div>{average(data)} {units}</div>
    </div>
);

export default WeatherChart; 