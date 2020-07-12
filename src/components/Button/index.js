import React from 'react';
import classes from './styles.module.scss';

const Button = (props) => {
  const { className, children, loading, ...restProps } = props;
  return (
    <button className={[className, classes.button, props.disabled ? classes.disabled: ''].join(' ')} {...restProps}>
      {loading ? (
        <div className={classes.loaderParent}>
          <div className={classes.loader} />
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
