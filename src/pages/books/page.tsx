import React from 'react';
import { createUseStyles } from 'react-jss';
import { blue1 } from '../../common/colors';

const useStyles = createUseStyles({
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  infoContainer: {
    flex: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '3rem',
    color: blue1,
  },
  spacer: {
    flex: 1,
  },
});

function Books(): React.ReactElement {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.infoContainer}>Coming Soon</div>
      <div className={classes.spacer} />
    </div>
  );
}

export default Books;
