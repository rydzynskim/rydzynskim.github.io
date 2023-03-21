import React from 'react';
import { createUseStyles } from 'react-jss';
import { IReadBookProps, IUpcomingBookProps } from './types';
import theBrothersKaramazov from '../../common/images/theBrothersKaramazov.jpg';
import genghis from '../../common/images/genghis.jpg';
import bitcoinStandard from '../../common/images/bitcoinStandard.jpg';
import computerArchitecture from '../../common/images/computerArchitecture.jpg';
import dune from '../../common/images/dune.jpg';
import theCaptainClass from '../../common/images/theCaptainClass.jpg';
import atlasShrugged from '../../common/images/atlasShrugged.jpg';
import theVitalQuestion from '../../common/images/theVitalQuestion.jpg';
import whatIsLife from '../../common/images/whatIsLife.jpg';

const readBookStyles = createUseStyles({
  bookContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '1.5rem',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: '1.5rem',
  },
  info: {
    marginTop: '1rem',
  },
});

function ReadBook(props: IReadBookProps): React.ReactElement {
  const classes = readBookStyles();
  const { title, quote, review, img, imgAlt, author } = props;
  return (
    <div className={classes.bookContainer}>
      <div className={classes.header}>
        <div>
          <div className={classes.title}>{title}</div>
          <div>by {author}</div>
        </div>
        <img src={img} alt={imgAlt} height="150" width="100" />
      </div>
      <div>
        <div className={classes.info}>
          <b>Favorite Quote: </b>
          {quote}
        </div>
        <div className={classes.info}>
          <b>Quick Review: </b>
          {review}
        </div>
      </div>
    </div>
  );
}

const upcomingBookStyles = createUseStyles({
  bookContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '1.5rem',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: '1.5rem',
  },
});

function UpcomingBook(props: IUpcomingBookProps): React.ReactElement {
  const classes = upcomingBookStyles();
  const { title, img, imgAlt, author } = props;
  return (
    <div className={classes.bookContainer}>
      <div className={classes.header}>
        <div>
          <div className={classes.title}>{title}</div>
          <div>by {author}</div>
        </div>
        <img src={img} alt={imgAlt} height="150" width="100" />
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
  sectionContainer: {
    marginTop: '3rem',
    width: '600px',
    display: 'flex',
    flexDirection: 'column',
  },
  sectionText: {
    fontSize: '2rem',
  },
});

function Reading(): React.ReactElement {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.sectionContainer}>
        <div className={classes.sectionText}>Recently Read</div>
        <ReadBook
          title="The Brothers Karmazov"
          author="Fyodor Dostoevsky"
          imgAlt="The Brothers Karamazov"
          img={theBrothersKaramazov}
          quote='"Work tirelessly. If, as you are going to sleep at night, you remember: "I did not do what I ought to have done," arise at once and do it.
                 If you are surrounded by spiteful and callous people who do not want to listen to you, fall down before them and ask their forgiveness,
                 for in truth the guilt is yours, too, that they do not want to listen to you. And if you cannot speak with the embittered, serve them silently
                 and in humility, never losing hope. And if everyone abandons you and drives you out by force, then, when you are left alone, fall down on the
                 earth and kiss it and water it with your tears, and the earth will bring forth fruit from your tears, even though no one has seen or heard you
                 in your solitude. Have faith to the end, even if it should happen that all on earth are corrupted and you alone remain faithful: make your
                 offering even so, and praise God, you who are the only one left. And if there are two of you who come together thus, there is already a whole
                 world, a world of living love; embrace each other in tenderness and give praise to the lord: for his truth has been made full, if only in the
                 two of you." - among the final words of Elder Zosima'
          review='I decided to read this after a person I respect for book recommendations called it, "possibly the best book ever written." After reading, I cannot
                  disagree with that sentiment.'
        />
      </div>
      <div className={classes.sectionContainer}>
        <div className={classes.sectionText}>Upcoming Reads</div>
        <UpcomingBook
          title="Genghis: Birth of an Empire"
          author="Conn Iggulden"
          img={genghis}
          imgAlt="Genghis"
        />
        <UpcomingBook
          title="Computer Architecture: A Quantitative Approach"
          author="John L. Hennessy and David A. Patterson"
          img={computerArchitecture}
          imgAlt="Computer Architecture"
        />
        <UpcomingBook
          title="The Bitcoin Standard"
          author="Saifedean Ammous"
          img={bitcoinStandard}
          imgAlt="The Bitcoin Standard"
        />
        <UpcomingBook
          title="Dune"
          author="Frank Herbert"
          img={dune}
          imgAlt="Dune"
        />
        <UpcomingBook
          title="The Captain Class"
          author="Sam Walker"
          img={theCaptainClass}
          imgAlt="The Captain Class"
        />
        <UpcomingBook
          title="Atlas Shrugged"
          author="Ayn Rand"
          img={atlasShrugged}
          imgAlt="Atlas Shrugged"
        />
        <UpcomingBook
          title="The Vital Question"
          author="Nick Lane"
          img={theVitalQuestion}
          imgAlt="Teh Vital Question"
        />
        <UpcomingBook
          title="What is Life?"
          author="Schrodinger"
          img={whatIsLife}
          imgAlt="What is Life?"
        />
      </div>
    </div>
  );
}

export default Reading;
