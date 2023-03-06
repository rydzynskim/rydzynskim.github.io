import React from 'react';
import { createUseStyles } from 'react-jss';
import composite from '../../common/images/composite.jpg';

const useStyles = createUseStyles({
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  infoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 2,
  },
  textContainer: {
    fontSize: '1.5rem',
    width: '400px',
  },
  spacer: {
    flex: 1,
  },
});

function Home(): React.ReactElement {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.infoContainer}>
        <p className={classes.textContainer}>
          Hi, my name is Mitch Rydzynski and this is my personal website. It
          serves as a central place to collect my interests, work, and thoughts.
          I apologize there isn&apos;t much here yet. I&apos;ll add to it over
          time.
        </p>
        <img src={composite} alt="Headshot" height="400" width="300" />
      </div>
      <div className={classes.spacer} />
    </div>
  );
}

export default Home;
