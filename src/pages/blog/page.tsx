import React from 'react';
import { createUseStyles } from 'react-jss';
import { IBlogPostProps } from './types';
import { blue } from '../../common/colors';

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
  const { link, title, description } = props;
  return (
    <div>
      <div className={classes.title}>{title}</div>
      <div className={classes.description}>{description}</div>
      <div className={classes.linkContainer}>
        <div>Click&nbsp;</div>
        <a
          className={classes.linkText}
          href={link}
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
          title="The Incentive Problem"
          link="https://docs.google.com/document/d/1IXiwVmyyNem1cbsGfw8HeZxKDxl5h9YRf7dCzj7cpPM/edit?usp=sharing"
          description="Why are incentives necessary? When do problems arise? Are there potential solutions?"
        />
      </div>
    </div>
  );
}
export default Blog;
