import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  infoContainer: {
    width: '600px',
    flex: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
  },
  spacer: {
    flex: 1,
  },
});

function Projects(): React.ReactElement {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.infoContainer}>
        I&apos;ll update this page soon when I finish a project worth sharing.
        Recently I&apos;ve been playing around with a stock classifier CNN and
        my own programming language interpreter.
      </div>
      <div className={classes.spacer} />
    </div>
  );
}

export default Projects;
