import React, { useState } from 'react';
import Select from './components/Select';
import Button from './components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { errorsAction, register } from './redux/registerActions';

function App() {
  const [values, setValues] = useState({
    input: '',
  });
  const errors = useSelector((state) => state.register.errors);
  const dispatch = useDispatch();
  const onChange = (e) => {
    e.persist();
    setValues((v) => ({ ...v, [e.target.id]: e.target.value }));
    if (Object.values(errors).length) {
      dispatch(errorsAction({}));
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await register(values, dispatch);
  };
  const loading = useSelector((state) => state.register.loading);
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        justifyContent: 'center',
      }}
      className="App"
    >
      <form onSubmit={onSubmit} style={{ width: 400 }}>
        <div>Select an option</div>
        <Select error={!!errors.option} help={errors.option} onChange={onChange} id="option">
          <option>First Option</option>
          <option>Second Option</option>
        </Select>
        By clicking submit you are agreeing to the Terms and Conditions.
        <Button loading={loading} type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default App;
