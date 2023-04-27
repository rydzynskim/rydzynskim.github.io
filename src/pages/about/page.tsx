import React from 'react';
import { createUseStyles } from 'react-jss';
import { blue } from '../../common/colors';
import MitchRydzynskiResume from '../../common/pdfs/MitchRydzynskiResume.pdf';

const useStyles = createUseStyles({
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  resumeContainer: {
    width: '600px',
    marginTop: '1.5rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  resumeText: {
    fontSize: '1.5rem',
    marginRight: '0.5rem',
  },
  resumeLink: {
    color: blue,
    textDecoration: 'none',
    fontSize: '1.5rem',
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
      <div className={classes.resumeContainer}>
        <div className={classes.resumeText}>Check out my resume</div>
        <a
          className={classes.resumeLink}
          href={MitchRydzynskiResume}
          target="_blank"
          rel="noopener noreferrer"
        >
          HERE
        </a>
      </div>
      <div className={classes.sectionContainer}>
        <div className={classes.sectionHeaderText}>Background</div>
        <div className={classes.sectionContentText}>
          I like learning about and building software. That may be dumb to say,
          as it can mean so many different things, but I&apos;m amazed by all
          that can be accomplished with software. When I click a video on
          youtube, I often find myself thinking about all the things that have
          to work for the video to start playing on my computer. My computer
          sends a signal over wifi encoding the request to my router. The router
          is able to handle that, and convert it to an electrical signal that is
          sent out over some cable. Those signals are then able to navigate a
          series of switches and DNS servers to figure out where they need to
          go. They reach a youtube server which handles my request and sends
          data as an electrical signal back over the network. Those signals are
          able to get back to my wifi router which then transmits them to my
          computer. Meanwhile, my browser&apos;s engine is running, compiling,
          and optimizing code that will handle that response. This engine is
          converting code written in high level languages to lower and lower
          levels until it reaches assembly code. This is passed on to GPUs and
          CPUs which have firmware encoded on them able to run this code by
          manipulating electrical components. This somehow results in a video
          playing on my screen, all in a matter seconds.
          <br />
          <br />
          Even this massive over-simplification of something that seems trivial
          (watching a youtube video), illustrates the beauty of our software
          infrastructure. Every one of the steps outlined above is extremely
          complicated. Yet, somehow it all works, and it works every time. I
          like learning about why that works. I like building on top of and
          contributing to that infrastructure to make products that someone will
          enjoy or find useful.
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
          component firmware and our custom Linux distribution.
          <br />
          <br />
          It has been invaluable experience learning how to maintain and work
          within a large software application. Outside of the technical skills,
          I&apos;ve learned a ton about best practices and how to manage long
          term projects. My favorite part of the job is being able to work with
          engineers across various disciplines on a daily basis. I&apos;m often
          interacting with electrical, mechanical, and materials engineers.
        </div>
      </div>
      <div className={classes.sectionContainer}>
        <div className={classes.sectionHeaderText}>Interests</div>
        <div className={classes.sectionContentText}>
          Outside of work and personal projects/learnings I have a few hobbies.
          I enjoy watching sports - mainly hockey, baseball, and football.
          I&apos;m a big Buffalo sports fan, go Bills! I stay active playing
          golf, skiing, and going to the gym. At night I enjoy reading, and am
          always looking for new books (check out the reading tab). Recently,
          I&apos;ve been trying to write more, as I find it helps me organize my
          thoughts and deeply think about a subject (check out the blog tab).
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
