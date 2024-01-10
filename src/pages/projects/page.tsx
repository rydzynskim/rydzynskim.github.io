import React from 'react';
import { createUseStyles } from 'react-jss';
import { IProjectPostProps } from './types';
import { blue } from '../../assets/colors';
import extendedBot from '../../assets/images/extendedBot.png';

const projectStyles = createUseStyles({
  postContainer: {
    marginTop: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  title: {
    fontSize: '1.5rem',
    color: blue,
    textDecoration: 'underline',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  image: { marginTop: '1rem', alignSelf: 'center' },
  description: {
    fontSize: '1.1rem',
    marginTop: '1rem',
  },
});

function ProjectPost(props: IProjectPostProps): React.ReactElement {
  const classes = projectStyles();
  const { name, img, imgAlt, githubLink, description } = props;
  return (
    <div className={classes.postContainer}>
      <a className={classes.title} href={githubLink}>
        {name}
      </a>
      <img
        className={classes.image}
        src={img}
        alt={imgAlt}
        height="300"
        width="500"
      />
      <div className={classes.description}>{description}</div>
    </div>
  );
}

const useStyles = createUseStyles({
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  projectContainer: {
    width: '600px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
  },
});

function Projects(): React.ReactElement {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.projectContainer}>
        <ProjectPost
          name="Extended-Bot"
          img={extendedBot}
          imgAlt="extendedBot"
          githubLink="https://github.com/rydzynskim/extended-bot"
          description="A command line chatbot built on top of gpt-3.5-turbo-1106 that has the ability to call locally defined functions. I am
                      able to define any arbitrary funtion and have the chatbot call it. This turns out to be fairly powerful. As an example, 
                      I can have it query a local mysql database, and then create an interactive plot of the results in just a few prompts 
                      (see image above)."
        />
      </div>
    </div>
  );
}

export default Projects;
