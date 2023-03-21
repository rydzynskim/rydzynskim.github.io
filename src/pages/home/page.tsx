import React from 'react';
import { createUseStyles } from 'react-jss';
import { gray } from '../../common/colors';
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
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  sourceCodeText: {
    margin: '2rem',
    fontSize: '1.25rem',
    fontWeight: 500,
    color: gray,
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
        </p>
        <img src={composite} alt="Headshot" height="400" width="300" />
      </div>
      <div className={classes.spacer}>
        <a
          className={classes.sourceCodeText}
          href="https://github.com/rydzynskim/rydzynskim.github.io"
        >
          Source Code
        </a>
      </div>
    </div>
  );
}

export default Home;
