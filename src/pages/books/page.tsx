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
import moloch from '../../common/images/moloch.jpeg';
import howToBeSuccessful from '../../common/images/howToBeSuccessful.jpeg';
import computationalExplorer from '../../common/images/computationalExplorer.jpg';
import shoeDog from '../../common/images/shoeDog.jpeg';
import mindAndMatter from '../../common/images/mindAndMatter.jpg';
import ghostInTheWires from '../../common/images/ghostInTheWires.jpg';

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

/* eslint-disable react/no-danger */
function ReadBook(props: IReadBookProps): React.ReactElement {
  const classes = readBookStyles();
  const { title, quote, img, imgAlt, author } = props;
  return (
    <div className={classes.bookContainer}>
      <div className={classes.header}>
        <div>
          <div className={classes.title}>{title}</div>
          <div>by {author}</div>
        </div>
        <img src={img} alt={imgAlt} height="150" width="100" />
      </div>
      <div className={classes.info}>
        <b>Favorite Quote: </b>
        <div dangerouslySetInnerHTML={{ __html: quote }} />
      </div>
    </div>
  );
}
/* eslint-enable */

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
          title="The Captain Class"
          author="Sam Walker"
          img={theCaptainClass}
          imgAlt="The Captain Class"
          quote="The captains of the world's sixteen greatest sports teams were not angels. They sometimes did nasty things to win, especially when the stakes were highest.
                They didn't believe that being sportsmanlike all the time was a prerequisite for being great.
                <br>
                <br>
                The poeple in the stands, or the journalists who cover companies like Apple, see things differently than the participants. They live in the 'normal world',
                where conventional principles of decency preside. The people inside the struggle, however, live between a different set of brackets. In the game frame, there
                are prescribed penalties for misbehavior. You get a yellow card. You get ten minutes in the sin bin. You get expelled from the match. You get suspended. If it serves
                a purpose, and you manage to get away with it, then it is, as Deschamps put it, an intelligent foul. While these actions may have the potential to be hurful,
                hurting people isn't the point.
                <br>
                <br>
                In sports and many other competitive pursuits, we're taught from an early age that there is no difference between how you compete and who you are. Some leaders,
                like Derek Jeter, lived by this credo and won universal praise for doing so. But the Tier One captains considered this a false choice. They believed that what
                mattered was another distinction - the difference between leaders who worry about how they're perceived and leaders who drag their teams through
                challenges by any means necessary.
                <br>
                <br>
                The world puts a lot of pressure on athlletes, especially captains, to be champions and paragons of virtue. But these two things do not always correlate.
                It's sometimes one or the other. The most decorated captains in history understood this."
        />
        <ReadBook
          title="Ghost in the Wires"
          author="Kevin Mitnick"
          img={ghostInTheWires}
          imgAlt="Ghost in the Wires"
          quote='This is where it got a bit tricky. When two systems establish an initial connection over TCP, a series of packets are sent back and forth to create
                a "session" between them. This is called a "three-way handshake." During the handshake, the target system transmits a packet back to the machine
                trying to establish the connection. Because the targeted server believes it&apos;s responding to the real system&apos;s request to establish a connection,
                the handshake process fails because the attacker&apos;s system never receives the packet to complete the three-way handshake.
                <br>
                <br>
                Enter the TCP sequence number: the protocol uses sequence numbers to acknowledge the receipt of data. If the attacker could predict the sequence number
                of the packet being sent from the target system to the real server during the initial handshake, he could complete the process by sending an acknowledgement
                packet (with the correct sequence number), and establish a connection appearing to be from the trusted machine.
                <br>
                <br>
                This effectively established a session by guessing the TCP sequence number. Because the targeted system was fooled into thinking it had established
                a connection with a trusted machine, it allowed the attacker to exploit the trust relationaship, and bypass the usual password requirement - allowing full
                access to the mahcine. At this point, the attacker could write over the corrent .rhosts file on the target machine, allowing anyone access to the root without a password.'
        />
        <ReadBook
          title="Atlas Shrugged"
          author="Ayn Rand"
          img={atlasShrugged}
          imgAlt="Atlas Shrugged"
          quote="&quot;Every man is free to rise as far as he's able or willing, but it's only the degree to which he thinks that determines the degree to which he'll rise.
                Physcial labor as such can extend no further than the range of the moment. The man who does no more than physcial labor, consumes the material value-equivalent
                of his own contribution to the process of production, and leaves no further value, neither for himself nor others. But the man who produces an idea in any field
                of rational endeavor - the man who discovers new knowledge - is the permanent benefactor of humanity. Material products can't be shared, they belong to some
                ultimate consumer; it is only the value of an idea that can be shared with unlimited numbers of men, making all sharers richer at no one's sacrifice or loss, raising
                the productive capacity of whatever labor they perform. It is the value of his own time that the strong of the intellect transfers to the weak, letting them
                work on the jobs he discovered, while devoting his time to further discoveries. This is a mutual trade to mutual advantage; the interests of the mind are one,
                no matter what the degree of intelligence, among men who desire to work and don't seek or expect the unearned.
                <br>
                <br>
                In proportion to the mental energy he spent, the man who creates a new invention receives but a small percentage of his value in terms of material payment, no
                matter what millions he earns. But the man who works as a janitor in the factory producing that invention, receives an enormous payment in proportion to the mental
                effort that his job requires of him. And the same is true of all men between, on all levels of ambition and ability. The man at the top of the intellectual pyramid
                contributes the most to all those below him, but gets nothing except his material payment, receiving no intellectual bonus from others to add to the value of his
                time. The man at the bottom who, left to himself, would starve in his hopeless ineptitude, contributes nothing to those above him, but receives the bonus of all 
                of their brains. Such is the nature of the 'competition' between the strong and the weak of the intellect. Such is the pattern of 'exploitation' for which you have
                damned the strong.&quot; - John Galt"
        />
        <ReadBook
          title="Mind and Matter"
          author="Erwin Schrödinger"
          img={mindAndMatter}
          imgAlt="Mind and Matter"
          quote="Now in this fashion differentials, variants of response, bifurcations, etc., are piled up one upon the other in unserveyable abundance, but
                only the most recent ones remain in the domain of consciousness, only those with regard to which the living substance is still in the stage
                of learning or practising. One might say, metaphorically, that consciousness is the tutor who supervises the education of the living substance,
                but leaves his pupil alone to deal with all those tasks for which he is already sufficiently trained. But I wish to underline three times in red
                ink that I mean this only as a metaphor. The fact is only this, that new situations and the new responses they prompt are kept in the light of
                consciousness; old and well practised ones are no longer so."
        />
        <ReadBook
          title="What is Life?"
          author="Erwin Schrödinger"
          img={whatIsLife}
          imgAlt="What is Life?"
          quote="Well, this is a fantastic description, perhaps less becoming a scientist than a poet. However, it needs no poetical imagination but only clear
                and sober scientific reflection to recognize that we are here obviously faced with events whose regular and lawful unfolding is guided by a 'mechanism'
                entirely different from the 'probability mechanism' of physics. For it is simply a fact of observation that the guiding principle in every cell is 
                embodied in a single atmoic association existing only in one copy (or sometimes two) - and a fact of observation that it results in producing events
                which are a paragon of orderliness. Whether we find it astonishing or whether we find it quite plausible that a small but highly organized group of
                atoms be capable of acting in this manner, the situation is unprecedented, it is unknown anywhere else expect in living matter. The physicist and the
                chemist, investigating inanimate matter, have never witnessed phenomena which they had to interpret this way. The case did not arise and so our theory
                does not cover it - our beautiful statistical theory of which we were so justly proud because it allowed us to look behind the curtain, to watch the
                magnificent order of exact physcial law coming forth from atomic and moleculer disorder; because it revelaed that the most important, the most general,
                the all-embracing law of entropy increase could be understood without a special assumption ad hoc, for it is nothing but molecular disorder itself."
        />
        <ReadBook
          title="Shoe Dog"
          author="Phil Knight"
          imgAlt="Shoe Dog"
          img={shoeDog}
          quote="I thought back on my running career at Oregon. I'd competed with, and against, men far better, faster, more physically gifted. Many were future 
                Olympians. And yet I'd trained myself to forget this unhappy fact. People reflexively assume that competition is always a good thing, that it always
                brings out the best in people, but that's only true of people who can forget the competition. The art of competing, I'd learned from track, was the art
                of forgetting, and I now remind myself of that fact. You must forget your limits. You must forget your doubts, your pain, your past. You must forget
                that internal voice screaming, begging, 'not one more step!' And when it's not possible to forget it, you must negotiate with it. I thought over all
                the races in which my mind wanted one thing, and my body wanted another, those laps in which I'd had to tell my body, 'Yes, you raise some excellent
                points, but let's keep going anyway...'"
        />
        <ReadBook
          title="Adventures of a Computational Explorer"
          author="Stephen Wolfram"
          imgAlt="Adventures of a Computational Explorer"
          img={computationalExplorer}
          quote="One defines some particular objective - say generating a hash code, evaluating a mathematical function, creating a musical piece, or
                recognizing a class of linguistic forms. Then one searches the computational universe for a program that achieves the objective. It might
                be that the simplest program that would be needed would be highly complex - and out of reach of enumerative search methods. But the Principle
                of Computational Equivalence suggests that this will tend not to be the case - and in practice it seems that it is not. And indeed one often
                finds surprisingly simple programs that achieve all sorts of complex purposes. Unlike things created by traditional engineering, however, there
                is no constraint that these programs operate in ways that we as humans can readily understand. And indeed it is common to find that they do not.
                Instead, in a sense, they tend to operate much more like many systems in nature - that we can describe as achieving a certain overall purpose, but
                can't readily understand how they do it."
        />
        <ReadBook
          title="How To Be Successful (Blog)"
          author="Sam Altman"
          imgAlt="How to be Successful"
          img={howToBeSuccessful}
          quote="Most people overestimate risk and underestimate reward. Taking risks is important because it's impossible to be right all the 
                time—you have to try many things and adapt quickly as you learn more. It's often easier to take risks early in your career; you don't 
                have much to lose, and you potentially have a lot to gain. Once you’ve gotten yourself to a point where you have your basic obligations covered 
                you should try to make it easy to take risks. Look for small bets you can make where you lose 1x if you’re wrong but make 100x if it works. Then 
                make a bigger bet in that direction."
        />
        <ReadBook
          title="The Bitcoin Standard"
          author="Saifedean Ammous"
          imgAlt="The Bitcoin Standard"
          img={bitcoinStandard}
          quote="In a free market economy with sound money, savers have to defer consumption in order to save. Money that is deposited in a bank as savings is money
                taken away from consumption by people who are delaying the gratification that consumption could give them in order to gain more gratification
                in the future. The exact amount of savings becomes the exact amount of loanable funds available for producers to borrow. The availability of capital
                goods is inextricably linked to the reduction of consumption: actual physcial resources, labor, land, and capital goods will move from being employed
                in the provision of final consumption goods to the production of capital goods. The marginal worker is directed away from car sales and toward a job
                in the car factory; the proverbial corn seed will go into the ground instead of being eaten."
        />
        <ReadBook
          title="Meditations on Moloch (Blog)"
          author="Scott Alexander"
          imgAlt="Mediations on Moloch"
          img={moloch}
          quote="And the whole point of Bostrom's Superintelligence is that this is within our reach. Once humans can design machines that are smarter than we are, 
                by definition they'll be able to design machines which are smarter than they are, which can design machines smarter than they are, and so on in a 
                feedback loop so tiny that it will smash up against the physical limitations for intelligence in a comparatively lightning-short amount of time. 
                If multiple competing entities were likely to do that at once, we would be super-doomed. But the sheer speed of the cycle makes it possible that 
                we will end up with one entity light-years ahead of the rest of civilization, so much so that it can suppress any competition - including competition 
                for its title of most powerful entity - permanently. In the very near future, we are going to lift something to Heaven. It might be Moloch. But it 
                might be something on our side. If it's on our side, it can kill Moloch dead."
        />
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
          title="Dune"
          author="Frank Herbert"
          img={dune}
          imgAlt="Dune"
        />
        <UpcomingBook
          title="The Vital Question"
          author="Nick Lane"
          img={theVitalQuestion}
          imgAlt="Teh Vital Question"
        />
      </div>
    </div>
  );
}

export default Reading;
