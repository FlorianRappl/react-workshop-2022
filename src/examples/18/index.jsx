import * as React from 'react';
import { renderToString } from 'react-dom/server';

const selectedTheme = 'dark';

const MyLayout = ({ theme }) => (
  <div>
    The selected theme was <b>{theme}</b> ...
  </div>
);

const myStr = renderToString(<MyLayout theme={selectedTheme} />);

document.querySelector('#app').textContent = myStr;
