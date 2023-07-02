import React from 'react';
import { createUseStyles } from 'react-jss';
import { IBlogPostProps } from './types';
import { blue } from '../../common/colors';
import PreventingQuitting from '../../common/pdfs/PreventingQuitting.pdf';
import TheIncentiveProblem from '../../common/pdfs/TheIncentiveProblem.pdf';

const blogStyles = createUseStyles({
  title: {
    fontSize: '1.5rem',
    marginTop: '1.5rem',
  },
  linkContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '1rem',
  },
  linkText: {
    color: blue,
    textDecoration: 'none',
  },
  description: {
    fontSize: '1.1rem',
    marginTop: '1rem',
  },
});

function BlogPost(props: IBlogPostProps): React.ReactElement {
  const classes = blogStyles();
  const { pdf, title, description } = props;
  return (
    <div>
      <div className={classes.title}>{title}</div>
      <div className={classes.description}>{description}</div>
      <div className={classes.linkContainer}>
        <div>Click&nbsp;</div>
        <a
          className={classes.linkText}
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
        >
          HERE
        </a>
        <div>&nbsp;to open in a new tab.</div>
      </div>
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
  blogsContainer: {
    height: '100%',
    width: '600px',
    display: 'flex',
    flexDirection: 'column',
  },
});

function Blog(): React.ReactElement {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.blogsContainer}>
        <BlogPost
          title="Preventing Quiting"
          pdf={PreventingQuitting}
          description="Useful mindset shifts to avoid quitting open-ended tasks with no deadline."
        />
        <BlogPost
          title="The Incentive Problem"
          pdf={TheIncentiveProblem}
          description="Why are incentives necessary? When do problems arise? Are there potential solutions?"
        />
      </div>
    </div>
  );
}
export default Blog;
