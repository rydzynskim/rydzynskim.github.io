import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  sectionHeaderText: {
    fontSize: '1.5rem',
  },
  sectionContentText: {
    fontSize: '1.1rem',
    marginTop: '1rem',
  },
  sectionContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '1rem',
    width: '600px',
  },
});

function About(): React.ReactElement {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.sectionContainer}>
        <div className={classes.sectionHeaderText}>Background</div>
        <div className={classes.sectionContentText}>
          Consider watching a video on YouTube. Your computer sends a signal via
          Wi-Fi to your router. This signal is transformed into an electrical
          impulse, which then embarks on a journey through a labyrinth of
          switches and DNS servers. It reaches a YouTube server that understands
          your request and sends back data, retracing the path to your Wi-Fi
          router and then to your computer. Simultaneously, the browser&apos;s
          engine is transforming high-level languages into machine-readable
          code. This intricate dance of electrical signals and code is managed
          by CPUs and GPUs, ultimately manifesting as a video on your screen in
          the blink of an eye.
          <br />
          <br />
          Even this massive over-simplification of something that seems trivial
          (watching a youtube video), illustrates the beauty of our software
          infrastructure. Every one of the steps outlined above is complicated.
          Yet, somehow it all works, and it works consistently. I like learning
          about why that works at every level of the stack. I like building on
          top of, contributing to, and improving on that infrastructure.
        </div>
      </div>
      <div className={classes.sectionContainer}>
        <div className={classes.sectionHeaderText}>
          Education and Experience
        </div>
        <div className={classes.sectionContentText}>
          I graduated from MIT in 2022 with a B.S. in Computer Science and a
          minor in Mathematics. My upper level classes focused more on the
          &quot;mathy&quot; side of CS (algorithms and ML). Outside of class I
          worked at the fitness center, was a member of GEL - an engineering
          leadership program, and was an officer for my fraternity. In the
          summers I held software engineering internships at companies of
          various sizes. After graduation I returned to Markforged, the company
          I interned at after my Junior year, to work full time.
          <br />
          <br />
          Markforged makes industrial grade 3D printers, and I&apos;m a member
          of the IoT team. We&apos;re responsible for the embedded application
          controlling high level printer functionality (sits between slicer
          software and firmware code). We touch a large portion of the software
          stack - directly responsible for the printers&apos; UI and backend
          application. We also work closely with teams who work on electrical
          component firmware and our custom Linux distribution. My favorite part
          of the job is being able to work with engineers across various
          disciplines on a daily basis. I&apos;m often interacting with
          electrical, mechanical, and materials engineers.
        </div>
      </div>
      <div className={classes.sectionContainer}>
        <div className={classes.sectionHeaderText}>Interests</div>
        <div className={classes.sectionContentText}>
          Outside of work and personal projects/learnings I have a few hobbies.
          I enjoy watching sports - mainly hockey, golf, and football. I&apos;m
          a big Buffalo sports fan, go Bills! I stay active playing golf and
          going to the gym. At night I enjoy reading, and am always looking for
          new books (check out the reading tab). Recently, I&apos;ve been trying
          to write more, as I find it helps me organize my thoughts and deeply
          think about a subject (check out the blog tab).
          <br />
          <br />I love playing poker, and watch too many poker blogs on youtube.
          Some friends and I won a few prizes in the 2022 poker bots competition
          at MIT, so I guess they paid off. I enjoy fun mind puzzles - I do the
          sudoku and wordle every day. Lastly, I&apos;m trying to become a
          better cook, so I find myself watching a lot of cooking shows on
          youtube as well.
        </div>
      </div>
    </div>
  );
}

export default About;
