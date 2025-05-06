import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is mobile size on mount and when window resizes
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    if (!isMenuOpen) return;

    const closeMenu = () => setIsMenuOpen(false);
    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener('click', closeMenu);
  }, [isMenuOpen]);

  // Toggle menu
  const toggleMenu = (e) => {
    e.stopPropagation(); // Prevent immediate closing from document click
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Backdrop overlay with blur effect - always rendered but conditionally visible */}
      {isMobile && (
        <div
          className={`mobile-menu-backdrop ${isMenuOpen ? 'visible' : ''}`}
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      <nav className="gaia-navbar">
        <div className="gaia-navbar-container">
          <span className="gaia-navbar-logo">GAIA</span>

          {/* Hamburger menu button for mobile */}
          {isMobile && (
            <button
              className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          )}

          {/* Navigation links - always visible on desktop, conditionally visible on mobile */}
          <ul className={`nav-links ${isMobile ? (isMenuOpen ? 'mobile-open' : 'mobile-closed') : ''}`}>
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/xbox" onClick={() => setIsMenuOpen(false)}>Xbox</Link></li>
            <li><Link to="/playstation" onClick={() => setIsMenuOpen(false)}>PlayStation</Link></li>
            <li><Link to="/pc" onClick={() => setIsMenuOpen(false)}>PC</Link></li>
            <li><Link to="/legacy" onClick={() => setIsMenuOpen(false)}>Legacy Hall</Link></li>
            <li><Link to="/get-to-know-us" onClick={() => setIsMenuOpen(false)} className="get-to-know-link">Get to Know Us</Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

function Footer() {
  return (
    <footer className="gaia-footer">
      <p>&copy; {new Date().getFullYear()} GAIA Clan Global. All rights reserved.</p>
    </footer>
  );
}

function SiteDeveloper() {
  return (
    <aside className="gaia-developer-card">
      <h3>Site Developer</h3>
      <p><strong>Taco</strong> &mdash; Member Since 2024</p>
      <p>Hello, I'm Taco and I'm responsible for the creation and maintenance of the GAIA Clan website. This is one of many projects I work on in order to add to my portfolio to one day become a professional front-end developer. GAIA and her Allies have been a joy to work with and I hope to continue doing so for as long as possible.</p>
    </aside>
  );
}

const legacyEntries = [
  {
    name: 'GAIAxD4RK',
    img: 'https://cdn.gaiaclanglobal.com/GAIAxTroy.png',
    desc: `Younger brother of GAIA's very own, GAIAxChar…he was a good associate and later Clan Member of GAIA during the year 2022. D4RK passed away on October 28th 2022 after a Fatal Car Accident. The profound affect that this had on the clan and surrounding community was felt for a very long time, a year after. He was a Bright and Loyal Young Kid and was loved by his sister and his brothers in GAIA and other Community's. Rest in Peace, lil bro- Imperii Gloria`,
    section: 'Honoring Our Past',
  },
  {
    name: 'HelloSadie',
    img: 'https://cdn.gaiaclanglobal.com/HelloSadie.png',
    desc: `A Revered Founder of GAIA back in April 17th, 2010…Sadie was a good friend and valued member of the Originals. She helped set the values that continue to be apart of GAIA's core to this very day, and she was a long standing member of GAIA for 8 years before taking her own life in late 2018. She was loved by many of the OG members of the clan, and she was always a shoulder for everyone to cry on. She suffered at the hands of a bad home life and where her real family resulted in abuse, she lost herself in a reality of the game world…the world we all share. she loved to sing and make music and was very talented with an Accoustic Guitar. she will forever be missed by everyone who walks the path of a true GAIA member…Rest in Peace, Sis. I miss and love you so much- Imperii Gloria`,
    section: 'Honoring Our Past',
  },
  {
    name: 'GAIAxLench',
    img: 'https://cdn.gaiaclanglobal.com/GAIAxLench.png',
    desc: `GAIA's Vice-President for the period of 2022-2023, he has countless contributions to the Clan; earning almost every single medal possible within the Clan. Lench spent a large portion of his tenure as a Leader of the Clan, leading the clan in both wartime and peace time….his contribution to GAIA laid the foundation of everything that GAIA is today, and there is no one more qualified to be apart of our very own Legacy Hall. Lench served faithfully as a Courser in his early time within the Clan, Quickly rising to the rank of Commander and later Commissioner; Lench was known for being as Quick with his gun as he was with his words and became known for handling issues by whatever means necessary. Imperii Gloria!`,
    section: 'Xbox Chapter Inducts',
  },
  {
    name: 'GAIAxTerra',
    img: 'https://cdn.gaiaclanglobal.com/GAIAxKura.png',
    desc: `One of the only Founders who is still active in the crew a decade later, Terra has served in every rank and at every level possible within the clan. Maintaining a steady position as a Strong and Loyal Advisor and Enforcer TO THIS DAY without failure. Terra has shown every exceptional quality expected of a GAIA member with devout loyalty to not only the Leader, The Clan name and reputation, but also the members- her steadfast "no-nonsense" attitude has helped many a member break out of their shell and find their home here. Terra officially retired from an Active Leadership role within the Clan in early 2021 and has since maintained the Rank of "Zealot" and continues to be a prime example of true loyalty in the flesh. I grew up with Terra, we've fought, been enemies, been best friends, and through thick and thin; there is nobody on this earth who I would shed blood faster for than GAIAxTerra. (Figuratively of course) Imperii Gloria`,
    section: 'Xbox Chapter Inducts',
  },
  {
    name: 'GAIAxBard',
    img: 'https://cdn.gaiaclanglobal.com/GAIAxBard.png',
    desc: `One of GAIA's longest standing Xbox Veterans, Bard was the Vice-President of GAIA going into 2024. Bard has long been a Leader of our clan since his days as a Courser, setting the groundwork for the Courser Division…Bard worked for over a Year to get to the Rank of Commander and leading the Largest Courser Division to date with over 21 members in total and then eventually after 2 years of service, made his way to the rank of Commissioner where his talents shined as an Ambassador to other groups, bard has long been the liaison between GAIA and other groups on games outside of Red Dead. Under Bard's Leadership, GAIA has expanded and grown into multiple different gaming franchises and was recognized by many different gaming circles. After Lench stepped down, it was only right that my right hand man be someone who has stood by me through everything GAIA has been through on Xbox. Bard deserves this spot just as much as everyone else on this list. Imperii Gloria`,
    section: 'Xbox Chapter Inducts',
  },
  {
    name: 'GAIAxIvar',
    img: 'https://cdn.gaiaclanglobal.com/GAIAxIvar.gif',
    desc: `Ivar has long been one of the greatest Instruments of GAIA's success since the VCO Incident. Ivar works his way from the very bottom for over half as a year, serving in the Sentinel Division and setting the groundwork for the division during GAIA's restoration, and after a long period of serving as a Grunt within the Clan, he eventually took leadership as Commander of the Division after the unfortunate Banning of Ex-Commander Lilith…Ivar took leadership of the Division and lead it with pride and distinction where he eventually earned his Orange name in late 2023, where he was promoted to Commissioner and succeeded by Cowburr who then took his rank as Commander. Ivar has re-established what it means to be a loyal and hardworking individual within the boundaries of this clan. A lot of the work he does is behind the scenes but he also has proven himself to be an established General and leader of troops during battle, Ivar is also one of GAIA's most established leaders…his advice has changed the course of history in many aspects. He has earned his place in our Great hall alongside the other great leaders of this Clan, and as such; on February 1st 2025…during the GAIA Conference, he was promoted to President of all GAIA Operations on Xbox and given Command of the Entire Chapter…he still continues to lead to this day.`,
    section: 'Xbox Chapter Inducts',
  },
  {
    name: 'GAIAxOdin',
    img: 'https://cdn.gaiaclanglobal.com/GAIAxOdin.png',
    desc: `Considered by most to be the greatest Courser Commander by far, rivaled by none. Odin has granted his own unique insight into GAIA's leadership and structure. Being considered one of the most Loyal Commander's to ever grace GAIA's Halls. His unique approach to training and Division Leadership has shown The Coursers to become to pinnacle of what it means to be a PVP Division under his Guidance. As of 2024, GAIA's Coursers have achieved what is considered an all-time high on Good PVP Players while Odin retains his role as Commander. Odin joined in 2023 alongside that of Ivar The Boneless and Freydis, and many others that have joined us on our journey. He continues to be one of the greatest Member's GAIA has to offer, with not only dedication to his Division but the Clan as a whole. The people who have followed in Odin's Footsteps have lead successful paths within GAIA, and many are happy to serve under him. He's a good personal friend of myself and one of our most dedicated members since our re-establishment on all fronts.`,
    section: 'Xbox Chapter Inducts',
  },
  {
    name: 'GAIAxChar',
    img: 'https://cdn.gaiaclanglobal.com/GAIAxChar.gif',
    desc: `Probably by far one of the most dedicated and respected Leader's of the Clan's history. Rising through the ranks in 2022, Char rose to prominence within the Instructor Division; leading it to the highest heights the division has ever seen in its history. The Instructor Division under Char's leadership was the best run division of its time, eventually leading to her promotion to Commissioner. Her tenure as Commissioner was a hard fought one, during a rough patch for the Clan; one she fought for with sheer tenacity. Events lead her to leading her own group during this tumultuous period, proving herself as a capable leader and achieving a following of loyal individuals. She eventually returned to the fold in 2023, rising to her previous roles as Instructor Commissioner…responsible for the creation of the policies the instructor Division follows to this day. Her prominence in her division and ability to maintain her composure seen her promoted by Council to Commissioner once again, where she remained until her ascension to Vice-President under Coffee during the first half of 2024. She lead the clan in Coffee's many absences and worked on fixing the Clan's issues. Dedicating time and merit to every goal she set for herself and her peers. She stepped down and became a Zealot in the latter half of 2024, where she remained until the end of the year where she took her post as Commissioner once more. Char has long been one of the greatest members to ever grace these walls, with her being well loved by members and affiliates alike. Her contributions to the standards of leadership and membership within the Clan will resound through not only the Xbox branch, but other Branches as well. Skal to the beautiful Charmithious the Great!`,
    section: 'Xbox Chapter Inducts',
  },
];

function LegacyHall() {
  return (
    <div className="gaia-content-container legacy-hall-container">
      <h1 className="gaia-title">Legacy Hall</h1>
      <h2 className="gaia-subtitle">Honoring Our Past &amp; Celebrating Our Leaders</h2>
      {['Honoring Our Past', 'Xbox Chapter Inducts'].map(section => (
        <div key={section} className="legacy-section">
          <h3 className="legacy-section-title">{section}</h3>
          <div className="legacy-entries">
            {legacyEntries.filter(e => e.section === section).map(entry => (
              <div className="legacy-entry" key={entry.name}>
                <img className="legacy-profile-pic" src={entry.img} alt={entry.name} />
                <div className="legacy-entry-info">
                  <h4 className="legacy-entry-name">{entry.name}</h4>
                  <p className="legacy-entry-desc">{entry.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function Home() {
  return (
    <main className="gaia-content-container">
      <header className="gaia-hero">
        <h1 className="gaia-title">GAIA Clan Global</h1>
        <p className="gaia-subtitle">Established 2010 &mdash; A Family of Gamers</p>
        <div className="gaia-divider" />
      </header>
      <section className="gaia-section gaia-section-who">
        <h2>Who Are We?</h2>
        <p>GAIA Clan Global is an official online community for people looking for companionship and a loyal place to call family. With a long history of outstanding service in the Xbox gaming community, GAIA has since expanded to multiple platforms. We've moved most of our operations to Discord, a great platform for people to come together, play games, and meet others. Here, we play on a variety of platforms: PC, Xbox, PlayStation, Nintendo, VR, and more!</p>
        <p>Our Members are welcoming and friendly, you won't feel left out here. As Members of GAIA, each and every one of us strives to make others feel like family. There are all kinds of individuals here just waiting to meet you. Come share your interests with us, such as art, music and hobbies! Tell us about yourself!</p>
      </section>
      <section className="gaia-section gaia-section-origins">
        <h2>GAIA Clan Origins</h2>
        <p>GAIA Clan Global started as VENM, a successful online gaming community on console before deciding to change to a moniker that more closely resembled our family-oriented ideals. We're named after Mother Earth, GAIA, and like a mother should, we strive to take care of our family and be a benefit to our communities. We aim to uphold standards that anyone could admire and encourage helping our fellow man. At the end of the day, however, we value our own above all.</p>
        <blockquote className="gaia-quote">“Greater love has no one but this: to lay down one's life for one's friends.”</blockquote>
        <p>GAIA Clan Global is more than just a group, it's a history deep and rich with people and events. There are too many aspects to even begin listing them all. There are countless layers of old history, but what about the new history? People like you are the people that create new history.</p>
      </section>
      <section className="gaia-section gaia-section-rules">
        <h2>Rules</h2>
        <ul>
          <li>Must be 13 or Older.</li>
          <li>Have A Working MIC.</li>
          <li>Global Community, All Timezones Welcome.</li>
          <li>Zero Tolerance For Discrimination &amp; Cyberbullying.</li>
          <li>Full Membership of GAIA Discord Server(s) Is Required To Be Considered An Official Member Of GAIA.</li>
        </ul>
      </section>
      <SiteDeveloper />
    </main>
  );
}

function XboxPage() {
  return (
    <div className="gaia-content-container">
      <h1 className="gaia-title">Xbox Chapter</h1>
      <section className="gaia-section">
        <h2>About</h2>
        <p>Information about the GAIA Xbox chapter, its history, games, and community.</p>
      </section>
      <section className="gaia-section">
        <h2>How to Join</h2>
        <p>Instructions for joining the Xbox chapter, requirements, and contact info.</p>
      </section>
    </div>
  );
}

function PCPage() {
  return (
    <div className="gaia-content-container">
      <h1 className="gaia-title">PC Chapter</h1>
      <section className="gaia-section">
        <h2>About</h2>
        <p>Information about the GAIA PC chapter, its history, games, and community.</p>
      </section>
      <section className="gaia-section">
        <h2>How to Join</h2>
        <p>Instructions for joining the PC chapter, requirements, and contact info.</p>
      </section>
    </div>
  );
}

function PlayStationPage() {
  return (
    <div className="gaia-content-container">
      <h1 className="gaia-title">PlayStation Chapter</h1>
      <section className="gaia-section">
        <h2>About</h2>
        <p>Information about the GAIA PlayStation chapter, its history, games, and community.</p>
      </section>
      <section className="gaia-section">
        <h2>How to Join</h2>
        <p>Instructions for joining the PlayStation chapter, requirements, and contact info.</p>
      </section>
    </div>
  );
}

function GetToKnowUsPage() {
  return (
    <div className="gaia-content-container">
      <h1 className="gaia-title">Get to Know Us</h1>
      <h2 className="gaia-subtitle">Meet the Director, Presidents, Senior HR, Veteran Members, and Honorable Mentions</h2>
      {/* Director */}
      <div className="legacy-entries">
        <div className="legacy-entry">
          <img className="legacy-profile-pic" src="https://cdn.gaiaclanglobal.com/GAIAxCoffee.png" alt="Director Coffee" />
          <div className="legacy-entry-info">
            <h4 className="legacy-entry-name">GAIAxCoffee (Director)</h4>
            <span className="profile-join-date">Member since 2010</span>
            <p className="legacy-entry-desc">Director of GAIA.</p>
          </div>
        </div>
      </div>

      {/* Presidents */}
      <h3 className="legacy-section-title" style={{marginTop: '2.5rem'}}>Presidents</h3>
      <div className="legacy-entries">
        {/* Xbox President - Boneless */}
        <div className="legacy-entry">
          <img className="legacy-profile-pic" src="https://cdn.gaiaclanglobal.com/GAIAxIvar.gif" alt="President Boneless" />
          <div className="legacy-entry-info">
            <h4 className="legacy-entry-name">Boneless (President, Xbox)</h4>
            <span className="profile-join-date">Member since 2023</span>
            <p className="legacy-entry-desc">Some may say I'm a comical comedian with a sense of justice and order. Others may say I'm a die-hard warlord who would stop at nothing to free GCG of any threat, both foreign and domestic. If you were to ask me, I'd say that how you walk into our halls will determine which version of me you'll get. I've been the tip of the prestigious spear, leading the charge that has ended most wars in this current era, though none of which I've won alone. I owe it to our members; without them, we as leaders wouldn't have a place to be.<br/><br/>I think I speak for President Switchy and myself when I say that each Member of ours is as equally important as every leader who guides them on the platinum standard path. And there isn't a thing we wouldn't do for them! I love each and every one of our people who bears the GAIA name! They are my family! And they can be yours too! We will accept you with open arms and warm hearts, no matter where you came from or how you got here!</p>
          </div>
        </div>
        {/* PC President - Switchy */}
        <div className="legacy-entry">
          <img className="legacy-profile-pic" src="https://cdn.gaiaclanglobal.com/GAIAxSwitchy.png" alt="President Switchy" />
          <div className="legacy-entry-info">
            <h4 className="legacy-entry-name">Switchy (President, PC)</h4>
            <span className="profile-join-date">Member since 2018</span>
            <p className="legacy-entry-desc">Salutations, Reader. I am Switchy, President of GAIA Clan Global's PC Chapter. I come to offer you all the gift and joy of having friends and a loyal Family. I will personally ensure you have a pleasant stay with us under my wing, as well as that of The Great and Victorious Xbox Chapter's President, Ivar. There are many things to look forward to in GAIA Clan, and I would love to get to know you, so please consider joining us!<br/><br/>As the former Chairman and long-time veteran of what is now referred to as "Old GAIA" or "GAIA EMPIRE," I've seen a lot in my time with the community. It has evolved into something unique, and I am happy to be back from hiatus and be here with you all again to help us grow. There is so much about GAIA that I have missed. The amazing times that I was able to share with everyone are something that I will never forget, but it is time to look forward to "New GAIA." Thank you, Director Coffee, for allowing me this opportunity to start a new chapter for GAIA Clan Global.</p>
          </div>
        </div>
        {/* PlayStation President - Bard */}
        <div className="legacy-entry">
          <img className="legacy-profile-pic" src="https://cdn.gaiaclanglobal.com/GAIAxBard.png" alt="President Bard" />
          <div className="legacy-entry-info">
            <h4 className="legacy-entry-name">Bard (President, PlayStation)</h4>
            <span className="profile-join-date">Member since 2021</span>
            <p className="legacy-entry-desc">One of GAIA's longest standing Xbox Veterans, Bard was the Vice-President of GAIA going into 2024. Bard has long been a leader of our clan since his days as a Courser in the Xbox Chapter, setting the groundwork for the Courser Division…<br/><br/>Bard worked for over a year to achieve rank of Commander and leading the largest Courser Division to date with over 21 members in total. After 2 years of service, he eventually advanced to the rank of Commissioner, where his talents shone as an ambassador to other groups, Bard has long been the liaison between GAIA and other groups on games outside of Red Dead.<br/><br/>Under Bard's leadership, GAIA has expanded and grown into multiple different gaming franchises and has been recognized by many different gaming circles. Bard deserves this spot just as much as everyone else on this list.</p>
          </div>
        </div>
      </div>

      {/* Vice President */}
      <h3 className="legacy-section-title" style={{marginTop: '2.5rem'}}>Vice President (Xbox Chapter)</h3>
      <div className="legacy-entries">
        <div className="legacy-entry">
          <img className="legacy-profile-pic" src="https://cdn.gaiaclanglobal.com/GAIAxChar.gif" alt="Vice President Charmithious" />
          <div className="legacy-entry-info">
            <h4 className="legacy-entry-name">Charmithious (Vice President, Xbox)</h4>
            <span className="profile-join-date">Member since 2022</span>
            <p className="legacy-entry-desc">spacer…</p>
          </div>
        </div>
      </div>

      {/* Senior HR */}
      <h3 className="legacy-section-title" style={{marginTop: '2.5rem'}}>Senior HR</h3>
      <div className="legacy-entries">
        <div className="legacy-entry">
          <img className="legacy-profile-pic" src="https://cdn.gaiaclanglobal.com/GAIAxBard.png" alt="Senior HR Bard" />
          <div className="legacy-entry-info">
            <h4 className="legacy-entry-name">Bard (Senior HR)</h4>
            <span className="profile-join-date">Member since 2021</span>
            <p className="legacy-entry-desc">One of GAIA's longest standing Xbox Veterans, Bard was the Vice-President of GAIA going into 2024. Bard has long been a leader of our clan since his days as a Courser in the Xbox Chapter, setting the groundwork for the Courser Division…<br/><br/>Bard worked for over a year to achieve rank of Commander and leading the largest Courser Division to date with over 21 members in total. After 2 years of service, he eventually advanced to the rank of Commissioner, where his talents shone as an ambassador to other groups, Bard has long been the liaison between GAIA and other groups on games outside of Red Dead.<br/><br/>Under Bard's leadership, GAIA has expanded and grown into multiple different gaming franchises and has been recognized by many different gaming circles. Bard deserves this spot just as much as everyone else on this list.</p>
          </div>
        </div>
        <div className="legacy-entry">
          <img className="legacy-profile-pic" src="https://cdn.gaiaclanglobal.com/GAIAxFreydis.png" alt="Senior HR Freydis" />
          <div className="legacy-entry-info">
            <h4 className="legacy-entry-name">Freydis (Senior HR)</h4>
            <span className="profile-join-date">Member since 2023</span>
            <p className="legacy-entry-desc">spacer…</p>
          </div>
        </div>
      </div>

      {/* Loyal Veterans */}
      <h3 className="legacy-section-title" style={{marginTop: '2.5rem'}}>Loyal Veterans</h3>
      <div className="legacy-entries">
        <div className="legacy-entry">
          <img className="legacy-profile-pic" src="https://cdn.gaiaclanglobal.com/GAIAxZenith.png" alt="Veteran Zenith" />
          <div className="legacy-entry-info">
            <h4 className="legacy-entry-name">Zenith (Veteran)</h4>
            <span className="profile-join-date">Member since 2013</span>
            <p className="legacy-entry-desc">spacer…</p>
          </div>
        </div>
        <div className="legacy-entry">
          <img className="legacy-profile-pic" src="https://cdn.gaiaclanglobal.com/GAIAxFireMonk.png" alt="Veteran FireMonk" />
          <div className="legacy-entry-info">
            <h4 className="legacy-entry-name">FireMonk (Veteran)</h4>
            <span className="profile-join-date">Member since [YEAR]</span>
            <p className="legacy-entry-desc">spacer…</p>
          </div>
        </div>
      </div>

      {/* Honorary Mentions */}
      <h3 className="legacy-section-title" style={{marginTop: '2.5rem'}}>Honorary Mentions</h3>
      <div className="legacy-entries">
        <div className="legacy-entry">
          <img className="legacy-profile-pic" src="https://cdn.gaiaclanglobal.com/GAIAxRagnar.png" alt="Honorary Ragnar" />
          <div className="legacy-entry-info">
            <h4 className="legacy-entry-name">Ragnar (Honorary Mention)</h4>
            <span className="profile-join-date">Member since 2023</span>
            <p className="legacy-entry-desc">spacer…</p>
          </div>
        </div>
        <div className="legacy-entry">
          <img className="legacy-profile-pic" src="https://cdn.gaiaclanglobal.com/GAIAxCosmic.png" alt="Honorary Cosmic" />
          <div className="legacy-entry-info">
            <h4 className="legacy-entry-name">Cosmic (Honorary Mention)</h4>
            <span className="profile-join-date">Member since 2021</span>
            <p className="legacy-entry-desc">spacer…</p>
          </div>
        </div>
        <div className="legacy-entry">
          <img className="legacy-profile-pic" src="https://cdn.gaiaclanglobal.com/GAIAxBioticMike.png" alt="Honorary BioticMike" />
          <div className="legacy-entry-info">
            <h4 className="legacy-entry-name">BioticMike (Honorary Mention)</h4>
            <span className="profile-join-date">Member since 2023</span>
            <p className="legacy-entry-desc">spacer…</p>
          </div>
        </div>
        <div className="legacy-entry">
          <img className="legacy-profile-pic" src="https://cdn.gaiaclanglobal.com/GAIAxOdin.png" alt="Honorary Odin" />
          <div className="legacy-entry-info">
            <h4 className="legacy-entry-name">Odin (Honorary Mention)</h4>
            <span className="profile-join-date">Member since 2023</span>
            <p className="legacy-entry-desc">Odin The Bloody, considered by most to be the greatest Courser Commander by far, rivaled by none, has granted his own unique insight into GAIA's leadership and structure. He is regarded as one of the most loyal Commanders to ever grace GAIA's halls. His unique approach to training and Division leadership has transformed the Coursers into the pinnacle of what it means to be a PvP Division under his guidance. As of 2024, GAIA's Coursers have achieved what is considered an all-time high on good PvP players, while Odin retained his role as Commander.<br/><br/>Odin joined in 2023 alongside that of Ivar The Boneless and Freydis, and many others that have joined us on our journey. He continues to be one of the greatest Members GAIA has to offer, with not only dedication to his Division but the Clan as a whole. The people who have followed in Odin's footsteps have led successful paths within GAIA, and many are happy to serve under him. He's a good personal friend of Director Coffee himself and is one of our most dedicated Members since our re-establishment on all fronts.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="gaia-background">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/legacy" element={<LegacyHall />} />
        <Route path="/xbox" element={<XboxPage />} />
        <Route path="/pc" element={<PCPage />} />
        <Route path="/playstation" element={<PlayStationPage />} />
        <Route path="/get-to-know-us" element={<GetToKnowUsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
