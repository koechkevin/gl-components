import React from 'react';
import classes from './styles.module.scss';

const Select = (props) => {
  const { children, className, help, error, ...restProps } = props;
  return (
    <div style={{ height: 48 }}>
      <select style={{ borderColor: error && 'red' }} className={[className, classes.select].join(' ')} {...restProps}>
        <option value="">{}</option>
        {children}
      </select>
      <div style={{ color: error && 'red' }}>{help}</div>
    </div>
  );
};

export default Select;
