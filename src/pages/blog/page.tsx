import React from 'react';
import { Outlet, useNavigate, useOutlet } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import { IBlogSlotProps } from './types';
import { blue } from '../../assets/colors';

const blogStyles = createUseStyles({
  topContainer: {
    marginTop: '1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: '1.5rem',
    color: blue,
    textDecoration: 'underline',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  date: {
    fontSize: '1.1rem',
  },
  description: {
    fontSize: '1.1rem',
    marginTop: '1rem',
  },
});

function BlogSlot(props: IBlogSlotProps): React.ReactElement {
  const classes = blogStyles();
  const navigation = useNavigate();
  const { path, date, title, description } = props;
  return (
    <div>
      <div className={classes.topContainer}>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions, jsx-a11y/anchor-is-valid */}
        <a className={classes.title} onClick={() => navigation(path)}>
          {title}
        </a>
        <div className={classes.date}>{date}</div>
      </div>
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
  blogsContainer: {
    height: '100%',
    width: '600px',
    display: 'flex',
    flexDirection: 'column',
  },
  outletContainer: {
    width: '800px',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
});

function Blog(): React.ReactElement {
  const outlet = useOutlet();
  const classes = useStyles();
  if (!outlet) {
    return (
      <div className={classes.container}>
        <div className={classes.blogsContainer}>
          <BlogSlot
            title="Preventing Quitting"
            date="3/31/2023"
            description="Useful mindset shifts to avoid quitting open-ended tasks with no deadline."
            path="quitting"
          />
          <BlogSlot
            title="The Incentive Problem"
            date="3/27/2023"
            description="Why are incentives necessary? When do problems arise? Are there potential solutions?"
            path="incentives"
          />
        </div>
      </div>
    );
  }

  return (
    <div className={classes.outletContainer}>
      <Outlet />
    </div>
  );
}
export default Blog;
