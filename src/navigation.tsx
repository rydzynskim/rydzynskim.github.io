import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import { black, gray } from './common/colors';

const useStyles = createUseStyles({
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  navContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '800px',
    marginTop: '1rem',
  },
  pageNavContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  idleNameNav: {
    fontSize: '1.75rem',
    fontWeight: 500,
    textDecoration: 'none',
    color: gray,
  },
  activeNameNav: {
    fontSize: '1.75rem',
    fontWeight: 800,
    textDecoration: 'none',
    color: black,
  },
  idleNav: {
    fontSize: '1.25rem',
    fontWeight: 500,
    textDecoration: 'none',
    color: gray,
  },
  activeNav: {
    fontSize: '1.5rem',
    fontWeight: 800,
    textDecoration: 'none',
    color: black,
  },
  outletContainer: {
    width: '800px',
    height: '100%',
  },
});

function Nav(): React.ReactElement {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.navContainer}>
        <div>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? classes.activeNameNav : classes.idleNameNav
            }
          >
            Mitch Rydzynski
          </NavLink>
        </div>
        <div className={classes.pageNavContainer}>
          <NavLink
            to="about"
            className={({ isActive }) =>
              isActive ? classes.activeNav : classes.idleNav
            }
          >
            ABOUT
          </NavLink>
          <NavLink
            to="projects"
            className={({ isActive }) =>
              isActive ? classes.activeNav : classes.idleNav
            }
          >
            PROJECTS
          </NavLink>
          <NavLink
            to="books"
            className={({ isActive }) =>
              isActive ? classes.activeNav : classes.idleNav
            }
          >
            READING
          </NavLink>
          <NavLink
            to="blog"
            className={({ isActive }) =>
              isActive ? classes.activeNav : classes.idleNav
            }
          >
            BLOG
          </NavLink>
        </div>
      </div>
      <div className={classes.outletContainer}>
        <Outlet />
      </div>
    </div>
  );
}

export default Nav;
