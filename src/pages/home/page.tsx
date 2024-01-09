import React from 'react';
import { createUseStyles } from 'react-jss';
import { blue } from '../../assets/colors';
import composite from '../../assets/images/composite.jpg';
import MitchRydzynskiResume from '../../assets/pdfs/MitchRydzynskiResume.pdf';

const useStyles = createUseStyles({
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  infoContainer: {
    marginTop: '5rem',
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
    marginTop: '2rem',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  sourceCodeText: {
    marginRight: '2rem',
    marginBottom: '1rem',
    fontSize: '1.25rem',
    fontWeight: 500,
    color: blue,
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
          href={MitchRydzynskiResume}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
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
