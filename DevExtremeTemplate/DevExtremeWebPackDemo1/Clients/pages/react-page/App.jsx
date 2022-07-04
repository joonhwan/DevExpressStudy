import './style.css';

import React from 'react';
import Counter from './components/Counter';

import 'devextreme/dist/css/dx.light.css';

import Button from 'devextreme-react/button';

import Chart, { ArgumentAxis, Series, Legend } from 'devextreme-react/chart';

const data = [
  {
    arg: 1990,
    val: 5320816667,
  },
  {
    arg: 2000,
    val: 6127700428,
  },
  {
    arg: 2010,
    val: 6916183482,
  },
];

export default function App() {
  return (
    <>
      <h1>React App in ASP Net Core Web App</h1>
      <div>
        <Counter />
      </div>
      <div className="mt-3 red-border">
        <Button text="Click Me" onClick={() => alert('안녕하세요')} />
      </div>
      <div className="mt-3">
        <Chart dataSource={data}>
          <ArgumentAxis tickInterval={10} />
          <Series type="bar" />
          <Legend visible={false} />
        </Chart>
      </div>
    </>
  );
}
