import React, { Component } from 'react';
import { with4Slices } from './data';

const Donut = require('../../node_modules/britecharts-react/lib/cjs/Donut.js').default;

export default class DonutChartLibCJS extends Component {

    render() {
        return (
            <Donut
                data={with4Slices()}
            />
        );
    }
};