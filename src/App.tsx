import { DatePicker } from 'kohnoa-date-picker';
import './App.css';
import { useCallback, useState } from 'react';

const customTheme = {
  input: {
    label: '#ffffff',
  },
};

function App() {
  const [value, setValue] = useState<string>('initial value');

  const valueHandler = useCallback((value: string) => setValue(value), []);

  return (
    <section className="datePickerSection">
      <p>
        DatePicker value:
        <br />
        {value}
      </p>

      <DatePicker
        onChange={valueHandler}
        customTheme={customTheme}
        range
        label="Choose date range"
      />
    </section>
  );
}

export default App;
