import * as React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Icon from '../../static/book.png'

export default function StepperTimeline() {
    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#00211d', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="November - 1916"
                iconStyle={{ background: '#00211d', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-subtitle">The Alchemist</h3>
                <p>
                The story is recounted by the protagonist, Count Antoine de C, in the first person. Hundreds of years ago, Antoine's noble ancestor was responsible for the death of a dark wizard, Michel Mauvais. The wizard's son, Charles le Sorcier, swore revenge on not only him but all his descendants, cursing them to die on reaching the age of 32. 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
                date="September - 1917"
                iconStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-subtitle">A Reminiscence of Dr. Samuel Johnson</h3>
                <p>
                In A Reminiscence of Dr. Samuel Johnson, Lovecraft tries to mimic the disarrayed memories of an old man reminiscing about the past, crafting a narrative that is non-linear and mostly illogical. But the rub is that it’s also incredibly pointless. There’s nothing of substance in the scenes remembered by the narrator, and, in the end, when he promises to tell more if the response to this first recollection of events is favorable, the reader can only shudder at the thought.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#00211d', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="October - 1919"
                iconStyle={{ background: '#00211d', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Beyond the Wall of Sleep</h3>
                <p>
                An intern in a mental hospital relates his experience with Joe Slater, an inmate who died at the facility a few weeks after being confined as a criminally insane murderer. He describes Slater as a "typical denizen of the Catskill Mountains region, who corresponds exactly with the 'white trash' of the South", for whom "laws and morals are nonexistent" and whose "general mental status is probably below that of any other native American people". Although Slater's crime was exceedingly brutal and unprovoked he had an "absurd appearance of harmless stupidity" and the doctors guessed his age at about forty. During the third night of his confinement, Slater had the first of his "attacks". He burst from an uneasy sleep into a frenzy so violent it took four orderlies to strait-jacket him. For nearly fifteen minutes he gave vent to an incredible rant. The words were in the voice and couched in the paltry vocabulary of Joe Slater but the onlookers could construe from the inadequate language
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
                date="November - 1919"
                iconStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Dagon</h3>
                <p>
                The story is the testament of a tortured, morphine-addicted man who plans to commit suicide over an incident that occurred early on in World War I when he was a merchant marine officer.
                In the unnamed narrator's account, his cargo ship is captured by a German sea-raider in "one of the most open and least frequented parts of the broad Pacific." He escapes on a lifeboat and drifts aimlessly across the sea "somewhat south of the equator" until he eventually finds himself inexplicably stranded on "a slimy expanse of hellish black mire which extended about me in monotonous undulations as far as I could see.... The region was putrid with the carcasses of decaying fish, and of other less describable things which I saw protruding from the nasty mud of the unending plain." He speculates that this land mass could be "a portion of the ocean floor... thrown to the surface" by a volcanic upheaval, "exposing regions which for innumerable millions of years had lain hidden under unfathomable watery depths." 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#00211d', color: '#fff' }}
                date="November - 1919"
                iconStyle={{ background: '#00211d', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">The White Ship</h3>
                <p>
                A lighthouse keeper named Basil Elton engages upon a peculiar fantasy in which a robed, bearded man is piloting a mystical white ship which appears when the moon is full. Elton walks out across the water on a bridge of moonbeams and joins the bearded man on this ship, and together they explore a mystical chain of islands unlike anything that can be found on Earth.
                They travel past Zar, a green land where "dwell all the dreams and thoughts of beauty that come to men once and then are forgotten", then the majestic city of Thalarion, "City of a Thousand Wonders", where dwell frightful demons. They pass Akariel, the huge carven gate of Thalarion, and continue their voyage. Elton is informed that those who enter both places have never returned.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
                date="May - 1920"
                iconStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">The Statement of Randolph Carter</h3>
                <p>
                The Statement of Randolph Carter" is the first person testimony of the titular character, who has been found wandering through swampland in an amnesiac shock. In his statement, Carter attempts to explain the disappearance of his companion, the occultist Harley Warren.
                Warren has come into the possession of a book written in an unknown language that he forbids Carter from seeing. Carter mentions that Warren has other "strange, rare books on forbidden subjects", several of which are in Arabic.
                Based on something he has read in his mysterious book, Warren encourages Carter to travel with him to an ancient graveyard near Big Cypress Swamp. Upon arriving, Warren locates a particular tomb and opens it to reveal a staircase that descends into the earth. Taking a lantern, he leaves Carter on the surface and follows the stairs into the darkness, communicating with his companion by a telephone wire. 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#00211d', color: '#fff' }}
                date="June - 1920"
                iconStyle={{ background: '#00211d', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">The Doom that Came to Sarnath</h3>
                <p>
                According to the tale, more than 10,000 years ago, a race of shepherd people colonized the banks of the river Ai in a land called Mnar, forming the cities of Thraa, Ilarnek, and Kadatheron (not to be confused with Kadath), which rose to great intellectual and mercantile prowess. Craving more land, a group of these hardy people migrated to the shores of a lonely and vast lake at the heart of Mnar, founding the metropolis of Sarnath.
                But the settlers were not alone. At the other side of the lake was the ancient, grey-stone city of Ib, inhabited by a queer race who had descended from the moon. Lovecraft described them as "in hue as green as the lake and the mists that rise above it.... They had bulging eyes, pouting, flabby lips, and curious ears, and were without voice."
                These beings worshipped a strange god known as Bokrug, the Great Water Lizard, although it was more their physical form that caused the people of Sarnath to despise them.
                The people of Sarnath killed all the creatures inhabiting Ib, destroyed the city and took their idol as a trophy, putting it in Sarnath's main temple. The next night, the idol vanished under peculiar circumstances, and Taran-Ish, the high-priest of Sarnath, was found dead. Before dying, he had scrawled a single sign on the empty altar: "DOOM". 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
                date="November - 1920"
                iconStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">The Cats of Ulthar</h3>
                <p>
                This story is about how the town of Ulthar made the decision to forbid anyone from killing cats. The narrator recalls that in the time before the law was passed, there was an old cotter and his wife who trapped and killed their neighbors' cats. The villagers, too fearful to confront the old couple, decided to just keep their cats indoors and out of trouble.
                Then, a caravan of strange travelers arrived one day to Ulthar. They were wearing strange clothes and performed foreign prayers that the villagers could not understand. Traveling with the wanderers was a small orphan boy named Menes and his pet kitten.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#00211d', color: '#fff' }}
                date="November - 1920"
                iconStyle={{ background: '#00211d', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Nyarlathotep</h3>
                <p>
                The story is written in first person and begins by describing a strange and inexplicable sense of foreboding experienced by humanity in general, in anticipation of a great unknown evil.
                The story proceeds to describe the appearance of Nyarlathotep as a "man" of the race of the Pharaohs, who claims to have been dormant for the past twenty-seven centuries, and his subsequent travels from city to city demonstrating his supernatural powers. Wherever Nyarlathotep went, the story relates, the inhabitants' sleep would be plagued by vivid nightmares.
                The story describes Nyarlathotep's arrival in the narrator's city, and the narrator's attendance at one of Nyarlathotep's demonstrations, in which he defiantly dismisses Nyarlathotep's displays of power as mere tricks. The party of observers is driven away by an infuriated Nyarlathotep, and wanders off into at least three columnal groups: One disappears around a corner, from which is then heard a moaning sound; another disappears into a subway station with the sound of mad laughter; and the third group, which contains the narrator, travels outward from the city toward the country. 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
                date="December - 1920"
                iconStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Polaris</h3>
                <h4 className="vertical-timeline-element-subtitle">Read here</h4>
                <p>
                The story begins with the narrator describing the night sky as observed over long sleepless nights from his window, in particular that of the Pole Star, Polaris, which he describes as "winking hideously like an insane watching eye which strives to convey some strange message, yet recalls nothing save that it once had a message to convey".
                He then describes the night of the aurora over his house in the swamp and how on this night he first dreamt of a city of marble lying on plateau between two peaks, with Polaris ever watching in the night sky.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#00211d', color: '#fff' }}
                date="December - 1920"
                iconStyle={{ background: '#00211d', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">The Street</h3>
                <h4 className="vertical-timeline-element-subtitle">Read here</h4>
                <p>
                The story traces the history of the titular street in a New England city, presumably Boston, from its first beginnings as "but a path" in colonial times to a quasi-supernatural occurrence in the years immediately following World War I. As the city grows up around the street, it is planted with many trees and built along with "simple, beautiful houses of brick and wood", each with a rose garden. As the Industrial Revolution runs its course, the area degenerates into a run-down and polluted slum, with all of the street's old houses falling into disrepair. 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
                date="March - 1921"
                iconStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Ex Oblivione</h3>
                <h4 className="vertical-timeline-element-subtitle">Read here</h4>
                <p>
                It is written in first person and tells of the dreams of a presumably dying man. In his dreams, the man is walking through a valley and encounters a vine-covered wall with a locked bronze gate therein. He longs to know what lies beyond the gate.
                Then one night, the man dreams of the dream-city Zakarion, in which he finds a yellowed papyrus written by wise dream-sages who exist only within the dream world. The papyrus tells of the gate, with varying accounts of what lies beyond: some of the dream-sages tell of immense wonders, while others tell of horror and disappointment.
                Despite this lack of unanimity, the man still wishes to see for himself, even knowing that whichever of these is true, there will be no return. Thus he reads further into the papyrus and learns of a drug which will unlock the gate. 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#00211d', color: '#fff' }}
                date="March - 1921"
                iconStyle={{ background: '#00211d', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Facts Concerning the Late Arthur Jermyn and His Family</h3>
                <h4 className="vertical-timeline-element-subtitle">Read here</h4>
                <p>
                The story begins by describing the ancestors of Sir Arthur Jermyn, a British nobleman. His great-great-great-grandfather was Sir Wade Jermyn, an early explorer of the Congo region whose books on a mysterious white civilization there were ridiculed. He was confined to an asylum in 1765. Lovecraft describes how the Jermyn family has a peculiar physical appearance that began to appear in the children of Wade Jermyn and his mysterious and reclusive wife, who Wade claimed was Portuguese. Wade's son, Philip Jermyn, was a sailor who joined the navy after fathering his son and disappeared from his ship one night as it lay off the Congo coast. Philip's son, Robert Jermyn, was a scientist who made two expeditions into the interior of Africa. He married a daughter of the (fictional) 7th Viscount Brightholme and fathered three children, two of whom suffered from severe disabilities, but the middle one of whom, Nevil Jermyn, had a son, Alfred, who was Arthur's father.
                In 1852, Robert met with an explorer, Samuel Seaton, who described "a grey city of white apes ruled by a white god". Robert killed the explorer after hearing this, as well as all three of his children. Nevil managed to save his son, Alfred, before his death. Robert was put in an asylum and, after two years, died there. 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
                date="July - 1921"
                iconStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">The Terrible Old Man</h3>
                <h4 className="vertical-timeline-element-subtitle">Read here</h4>
                <p>
                The Terrible Old Man is a strange elderly man "so old that no one can remember when he was young, and so taciturn that few know his real name." He lives alone in an ancient house on Water Street in the town of Kingsport. Even among the locals, few know the details of the Old Man's life, but it is believed that he captained East Indian clipper ships in his youth and had accumulated great riches throughout his life. Those who had visited the property had seen bizarre collections of stones in the front yard and observed the Old Man carrying on conversations with mysterious bottles on his table, which make "certain definite vibrations as if in answer." Most locals take care to avoid the Old Man and his house. 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#00211d', color: '#fff' }}
                date="August - 1921"
                iconStyle={{ background: '#00211d', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">The Picture in the House</h3>
                <h4 className="vertical-timeline-element-subtitle">Read here</h4>
                <p>
                While riding his bicycle in the Miskatonic Valley of rural New England, a genealogist seeks shelter from an approaching storm. He enters an apparently abandoned house, only to find it occupied by a "loathsome old, white-bearded, and ragged man", speaking in "an extreme form of Yankee dialect... thought long extinct." The narrator notices that the house is full of antique books, exotic artifacts, and furniture predating the American Revolution. At first, the old man appears harmless and ignorant towards his guest. However, he shows a disquieting fascination for an engraving in a rare old book, Regnum Congo, and admits to the narrator how it made him hunger for "victuals I couldn't raise nor buy" – presumably human flesh.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
                date="October - 1921"
                iconStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">The Tree</h3>
                <h4 className="vertical-timeline-element-subtitle">Read here</h4>
                <p>
                "The Tree" is told in past tense, in third person objective. The location of the story is Mount Maenalus, in Arcadia, Greece, a mountain which was a "chosen haunt" for the Greek God Pan. The story opens with a vivid description of the olive grove, and a fearful, human-like olive tree within it.
                The story then recounts a story from centuries ago, recalling the famous sculptors Kalos and Musides, whose works were praised throughout the known world. One day, the Tyrant of Syracuse invited Kalos and Musides to compete in the creation of "a wonder of nations and a goal of travelers". While working on their sculptures, Kalos fell ill, much to the dismay of Musides.
                Musides proposed to erect an elaborate marble tomb for his friend, while Kalos asked only for the planting of olive twigs near his head. After the death of Kalos, Musides buried the olive twigs, in addition to constructing a tomb. 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#00211d', color: '#fff' }}
                date="November - 1921"
                iconStyle={{ background: '#00211d', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">The Nameless City"</h3>
                <h4 className="vertical-timeline-element-subtitle">Read here</h4>
                <p>
                Located somewhere in the Arabian desert, possibly modern-day Yemen, the Nameless City was built in prehistory by a species of quadrupedal reptilian creatures, and thus one of its most distinctive aspects is the proliferation of low ceilings. (HPL: "The Nameless City")
                When built, the city had been located deep beneath the ocean, as its saurian inhabitants felt perfectly at home underwater, but the same cataclysm which sank Atlantis and Mu caused it to rise above the surface. This spelt its doom, as the inhabitants were ill-suited to survival beneath the burning desert sun, and the few survivors fled to the deepest subterranean sections of what remained
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
                date="March - 1922"
                iconStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">The Tomb</h3>
                <h4 className="vertical-timeline-element-subtitle">Read here</h4>
                <p>
                "The Tomb" tells of Jervas Dudley, a self-confessed day-dreamer. While still a child, he discovers the entrance to a mausoleum, belonging to the family Hyde, whose nearby family mansion had burnt down many years previously. The entrance to the mausoleum is padlocked and slightly ajar. Jervas attempts to break the padlock, but is unable. Dispirited, he takes to sleeping beside the tomb. Eventually, inspired by reading Plutarch's Lives, Dudley decides to patiently wait until it is his time to gain entrance to the tomb.
                One night, several years later, Jervas falls asleep once more beside the mausoleum. He awakes suddenly in the late afternoon, and believes that a light has been latterly extinguished from inside the tomb. Taking leave, he returns to his home, where he goes directly to the attic, to a rotten chest, and therein finds the key to the tomb. 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#00211d', color: '#fff' }}
                date="March - 1922"
                iconStyle={{ background: '#00211d', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">The Music of Erich Zann</h3>
                <h4 className="vertical-timeline-element-subtitle">Read here</h4>
                <p>
                A university student is forced, by his lack of funds, to take the only lodging he can afford. In a strange part of the city he had never seen before, on a street named "Rue d'Auseil", he finds an apartment in an almost empty building. One of the few other tenants is an old German man named Erich Zann. The old man is mute cellist with a local orchestra. He lives on the top floor and when alone at night, plays strange melodies never heard before. Over time, the student gains Zann's trust, and eventually learns of his secret, that the old man has discovered melodies and rhythms of sound of an almost otherworldly nature. Zann plays these sounds to keep back unknown and unseen creatures from Zann's window, which is said to look out into a black abyss, most likely another dimension.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
                date="May - 1922"
                iconStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Celephaïs</h3>
                <h4 className="vertical-timeline-element-subtitle">Read here</h4>
                <p>
                Celephaïs was created in a dream by Kuranes (which is his name in dreams—his real name is not given) as a child of the English landed gentry. As a man in his forties, alone and dispossessed in contemporary London, he dreams it again and then, seeking it, slowly slips away to the dream-world. Finally knights guide him through medieval England to his ancestral estate, where he spent his boyhood, and then to Celephaïs. He became the king and chief god of the city, though his body washes up by his ancestors' tower, now owned by a parvenu. 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#00211d', color: '#fff' }}
                date="July - 1922"
                iconStyle={{ background: '#00211d', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Herbert West–Reanimator</h3>
                <h4 className="vertical-timeline-element-subtitle">Read here</h4>
                <p>
                The narrator, a doctor who went to Miskatonic University medical school with the titular character, informs the reader that Herbert West has recently disappeared.
                The narrator goes on to explain how he met West when they were both young men in medical school, and the narrator became fascinated by West's theories, which postulated that the human body is simply a complex, organic machine, which could be "restarted." West initially tries to prove this hypothesis, but is unsuccessful. West realizes he must experiment on human subjects. The two men spirit away numerous supplies from the medical school and set up shop in an abandoned farmhouse. At first, they pay a group of men to rob graves for them, but none of the experiments are successful. West and the narrator go then into grave robbing for themselves. One night, West and the narrator steal a corpse of a construction worker who died that morning in an accident. They take it back to the farmhouse and inject it with West's solution, but nothing happens. Later, an inhuman scream is heard from within the room containing the corpse, which forces the two students to instinctively flee into the night. West accidentally tips over a lantern on the way out and the farmhouse catches fire, and West and the narrator escape. The next day, however, the newspaper reads that a grave in potter's field had been molested violently the night before, with the claws of a beast. 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
                date="April - 1923"
                iconStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">The Lurking Fear</h3>
                <h4 className="vertical-timeline-element-subtitle">Read here</h4>
                <p>
                In 1921, an unnamed monster-hunter travels to Tempest Mountain, in the Catskills range, after reports of various attacks by a group of unidentified creatures against the local inhabitants reaches the media. A month before, an unusually large, destructive thunderstorm had drifted over the region. Many homes were destroyed, seemingly by the storm, but upon closer inspection, the destruction seemed to be left by an enraged beast. The affected area, originally home to only 75 citizens, was completely destroyed, leaving no survivors.
                Gathering what information he can from the locals, the hunter finds out that most of the legends surround the foreboding Martense mansion, a century-old Dutch homestead,
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#00211d', color: '#fff' }}
                date="May - 1923"
                iconStyle={{ background: '#00211d', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Memory</h3>
                <h4 className="vertical-timeline-element-subtitle">Read here</h4>
                <p>
                This story takes place in the ancient valley of Nis, in vegetation-covered stone ruins described by Lovecraft in great detail. These crumbling blocks of monolithic stone now serve only for grey toads and snakes to nest under. Interspersed in the ruins are large trees that are home to little apes. Through the bottom of this valley runs the great, slimy red river called Than.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
                date="May - 1923"
                iconStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Hypnos</h3>
                <h4 className="vertical-timeline-element-subtitle">Read here</h4>
                <p>
                Hypnos is a first-person narrative written from the perspective of an unnamed character living in Kent and later London, England. The narrator writes that he fears sleep, and is resolved to write his story down lest it drive him further mad, regardless of what people think after reading it.
                The narrator, a sculptor, recounts meeting a mysterious man in a railway station. The moment the man opened his "immense, sunken and widely luminous eyes", the narrator knew that the stranger would become his friend-–"the only friend of one who had never possessed a friend before". In the eyes of the stranger he saw the knowledge of the mysteries he always sought to learn.
                From this point on, he would touch his friend and sculpt him daily. At night they would commence their adventures, exploring worlds beyond human comprehension. Over time, the narrator's companion begins speaking of using their ability to transcend into the unknown to rule the universe, via a set of drugs, a thought that scares the narrator (who disavows to the reader any such hubris). 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#00211d', color: '#fff' }}
                date="May - 1923"
                iconStyle={{ background: '#00211d', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">What the Moon Brings</h3>
                <h4 className="vertical-timeline-element-subtitle">Read here</h4>
                <p>
                This story is told in the first person; the narrator is never named. The story describes a surreal dreamscape. The narrator wanders through his garden one night and in the moonlight sees strange and bizarre things. He comes to a stream:
                Silent and sparkling, bright and baleful, those moon-cursed waters hurried I knew not whither; whilst from the embowered banks white lotus-blossoms fluttered one by one in the opiate night-wind and dropped despairingly into the stream, swirling away horribly under the arched, carven bridge, and staring back with the sinister resignation of calm, dead faces.
                He sees that now the garden has no end, and where the walls used to be there are now more trees and plants and terrifying stone idols and pagodas. The dead faces urge him on farther and farther, as the stream becomes a river and leads him to the shore of a sea.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
                date="February - 1924"
                iconStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">The Hound</h3>
                <h4 className="vertical-timeline-element-subtitle">Read here</h4>
                <p>
                The story focuses around the narrator and his friend St. John, a pair of friends in England who have a deranged interest in robbing graves They constantly defile crypts and often keep souvenirs of their nocturnal expeditions. Since they reside in the same house, they have the opportunity to set up a sort of morbid museum in their basement. Using the objects they collect from the various graves they have robbed, they organize the private exhibition. The collection consists of headstones, preserved bodies, skulls and several heads in different phases of decomposition. It also included statues, frightful paintings and a locked portfolio, bound in tanned human skin.
                One day, they learn of a particular grave, which sparks a profound interest in them, an old grave in a Holland cemetery, which holds a legendary tomb raider within. One who was said to have stolen, many years ago, a “potent thing from an mighty sepulcher”. One night, they travel to this old cemetery where the ancient “ghoul” was buried. The thought of exhuming the final resting place of a former grave robber is irresistibly appealing to them.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#00211d', color: '#fff' }}
                date="March - 1924"
                iconStyle={{ background: '#00211d', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">The Rats in the Walls</h3>
                <h4 className="vertical-timeline-element-subtitle">Read here</h4>
                <p>
                Set in 1923 "The Rats in the Walls" is narrated by the scion of the de la Poer family, who has moved from Massachusetts to his ancestral estate in England, the ruined Exham Priory. To the dismay of nearby residents, he restores the Priory, plainly revealing his ignorance of the horrific history of the place. After moving in, the protagonist and his cats frequently hear rats scurrying behind the walls. Upon investigating further (and as revealed in recurring dreams), he learns that his family maintained an underground city for centuries where they raised generations of "human cattle" (some regressed to a quadrupedal state) to supply their taste for human flesh. 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
                date="January - 1925"
                iconStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">The Festival</h3>
                <h4 className="vertical-timeline-element-subtitle">Read here</h4>
                <p>
                The story is set at Christmas time: "It was the Yuletide, that men call Christmas though they know in their hearts it is older than Bethlehem and Babylon, older than Memphis and mankind." An unnamed narrator is making his first visit to Kingsport, Massachusetts, an "ancient sea town where my people had dwelt and kept festival in the elder time when festival was forbidden; where also they had commanded their sons to keep festival once every century, that the memory of primal secrets might not be forgotten."
                The town he comes to, which shows little sign of habitation, seems centuries out of date, 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#00211d', color: '#fff' }}
                date="July - 1925"
                iconStyle={{ background: '#00211d', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">The Unnamable</h3>
                <h4 className="vertical-timeline-element-subtitle">Read here</h4>
                <p>
                Carter, a weird fiction writer, meets with his close friend, Joel Manton, in a cemetery near an old, dilapidated house on Meadow Hill in the town of Arkham, Massachusetts. As the two sit upon a weathered tomb, Carter tells Manton the tale of an indescribable entity that allegedly haunts the house and surrounding area. He contends that because such an entity cannot be perceived by the five senses, it becomes impossible to quantify and accurately describe, thus earning itself the term unnamable. 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
                date="September - 1925"
                iconStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">The Temple</h3>
                <h4 className="vertical-timeline-element-subtitle">Read here</h4>
                <p>
                The story is narrated as a "found manuscript" penned by Karl Heinrich, Graf von Altberg-Ehrenstein, a lieutenant-commander in the Imperial German Navy during the days of World War I. It documents his untimely end at the bottom of the ocean.
                Altberg begins by declaring that he has decided to document the events leading up to his final hour in order to "set certain facts" before the public, aware that he will not survive to do so himself.
                The manuscript states events from June 1917 to August 1917 in the North Atlantic ; after sinking SS Victory, a British freighter, and thereafter sinking its surviving crew's lifeboats, the cruel and arrogant Altberg commands his U-29 u-boat to submerge, surfacing later to find the dead body of a crew member of the sunken ship, who died clinging to the exterior railing of the sub. A search of the body reveals a strange piece of carved ivory. Because of its apparent great age and value, one of Altberg's officers keeps the object, and shortly thereafter, strange phenomena begin to occur. 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#00211d', color: '#fff' }}
                date="November - 1925"
                iconStyle={{ background: '#00211d', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">In the Vault</h3>
                <h4 className="vertical-timeline-element-subtitle">Read here</h4>
                <p>
                George Birch, undertaker for the New England town of Peck Valley, finds himself trapped in the vault where coffins are stored during winter for burial in the spring. When Birch stacks the coffins to reach a transom window, his feet break through the lid of the top coffin, injuring his ankles and forcing him to crawl out of and away from the vault.
                Later, Dr. Davis investigates the vault, and finds that the top coffin was one of inferior workmanship that Birch used as a repository for Asaph Sawyer, a vindictive townsperson whom Birch had disliked, even though the coffin had originally been built for the much shorter Matthew Fenner. Davis finds that Birch had cut off Sawyer's feet to fit the body in the coffin—and that the wounds in Birch's ankles are teeth marks. 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
                date="April - 1926"
                iconStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">The Outsider</h3>
                <h4 className="vertical-timeline-element-subtitle">Read here</h4>
                <p>
                "The Outsider" is written in the first-person narrative style and details the miserable and apparently lonely life of an individual who appears to have never had contact with another individual. The story begins with this narrator explaining his origins. His memory of others is vague, and he cannot seem to recall any details of his personal history, including who he is or where he is from. The narrator tells of his environment: a dark, decaying castle amid an "endless forest" of high, lightless trees. He has never seen natural light, nor another human being, and he has never ventured from the prison-like home he inhabits. The only knowledge the narrator has of the outside world is from his reading of the "antique books" that line the walls of his castle.
                The narrator tells of his eventual determination to free himself from what he sees as an existence within a prison. He decides to climb the ruined staircase of the high castle tower that seems to be his only hope for an escape. At the place where the stairs terminate into crumbled ruin, the narrator begins a long, slow climb up the tower wall, until he eventually finds a trapdoor in the ceiling, which he pushes up and climbs through. Amazingly, he finds himself not at the great height he anticipated, but at ground level in another world. With the sight of the full moon before him, he proclaims, "There came to me the purest ecstasy I have ever known." Overcome with the emotion he feels in beholding what—until now—he had only read about, the narrator takes in his new surroundings. He realizes that he is in an old churchyard, and he wanders out into the countryside before eventually coming upon another castle. 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#00211d', color: '#fff' }}
                date="June - 1926"
                iconStyle={{ background: '#00211d', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">The Moon-Bog</h3>
                <h4 className="vertical-timeline-element-subtitle">Read here</h4>
                <p>
                The unnamed narrator describes the final fate of his good friend, Denys Barry, an Irish-American who reclaims an ancestral estate in Kilderry, a fictional town in Ireland. Barry ignores pleas from the local peasantry not to drain the nearby bog, with unfortunate supernatural consequences. The story bears a similarity to Lord Dunsany's first Irish novel The Curse of the Wise Woman in theme, showing the influence of Dunsany on Lovecraft's works.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
                date="September - 1926"
                iconStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">He</h3>
                <h4 className="vertical-timeline-element-subtitle">Read here</h4>
                <p>
                he story tells of an unnamed poet narrator, who has moved from New England to New York City and greatly regretted it. One night, while wandering an older part of Greenwich Village, he happens upon a man strangely dressed in garments from the eighteenth century. The man offers to show the narrator the secrets of the town. After bringing the narrator to his home, the man tells him the story of a squire who bargained with Native Americans for the secrets of their rituals concerning time and space which were practiced on the land where that squire had recently taken up residence. After learning their secrets, the squire gave the Native Americans "monstrous bad rum," so that within a week all of them were dead and only he was left with the knowledge. 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#00211d', color: '#fff' }}
                date="December - 1926"
                iconStyle={{ background: '#00211d', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">The Horror at Red Hook</h3>
                <h4 className="vertical-timeline-element-subtitle">Read here</h4>
                <p>
                The story begins with Detective Malone describing an on-duty incident at Red Hook, Brooklyn, that gave him a phobia of large buildings. Back-tracking to where it all began, Red Hook is described in detail, with its gangs and crime, and suggesting at an occult underbelly.
                The "case of Robert Suydam" is then told to be the driving force behind Malone's federally ordered involvement at Red Hook. Suydam's demeanor changes suddenly. Known as a shabby recluse, he is seen around town looking younger and more radiant. News arrives of his engagement to a well-to-do woman, while at the same time, there is an increase in local kidnappings. A police raid, involving Malone, uncovers nothing useful from Suydam's Red Hook flat save a few strange inscriptions. 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
                date="September - 1927"
                iconStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">The Colour Out of Space</h3>
                <h4 className="vertical-timeline-element-subtitle">Read here</h4>
                <p>
                Written in the first-person perspective of an unnamed surveyor from Boston, "The Colour Out of Space" tells the story of the narrator's attempts to uncover the secrets behind a shunned place referred to by the locals of Arkham as the "blasted heath".[1] Unable to garner any information from the townspeople, the protagonist seeks out an old and allegedly crazy man by the name of Ammi Pierce who relates his personal experiences with a farmer who used to live on the cursed property, Nahum Gardner. Pierce claims that the troubles began when a meteorite crashed into Gardner's lands in June 1882.
                The meteorite never cools, but begins shrinking and local scientists are unable to discern its origins. As the stone shrinks, it leaves behind globules of colour that are referred to as such "only by analogy",[3] as they do not fall within the range of anything known in the visible spectrum. These remains eventually disappear but, the following season, Gardner's crops come in unnaturally large and abundantly. When he discovers that, despite their appearance, they are inedible, he accuses the meteorite of having poisoned the soil. Over the following year, the problem begins spreading to the surrounding vegetation and local animals, warping them in unusual ways. The plant life around the farmhouse becomes "slightly luminous in the dark",[4] and Gardner's wife eventually goes mad, forcing him to lock her in the attic. During this time, Gardner begins to isolate his family from the rest of the town and Pierce slowly becomes his only contact with the outside world.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#00211d', color: '#fff' }}
                date="October - 1927"
                iconStyle={{ background: '#00211d', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Pickman's Model</h3>
                <h4 className="vertical-timeline-element-subtitle">Read here</h4>
                <p>
                The story revolves around a Bostonian painter named Richard Upton Pickman who creates horrifying images. His works are brilliantly executed, but so graphic that they result in the revocation of his membership in the Boston Art Club and he is shunned by his fellow artists.
                The narrator is a friend of Pickman, who, after the artist's mysterious disappearance, relates to another acquaintance how he was taken on a tour of Pickman's personal gallery, hidden away in a run-down backwater slum of the city. As the two delved deeper into Pickman's mind and art, the rooms seemed to grow ever more evil and the paintings ever more horrific, ending with a final enormous painting of an unearthly, red-eyed and vaguely canine humanoid balefully chewing on a human victim. 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
                date="February - 1928"
                iconStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">The Call of Cthulhu</h3>
                <h4 className="vertical-timeline-element-subtitle">Read here</h4>
                <p>
                It is the only story written by Lovecraft in which the extraterrestrial entity Cthulhu himself makes a major appearance. The story is written in a documentary style, with three independent narratives linked together by the device of a narrator discovering notes left by a deceased relative.
                The narrator pieces together the whole truth and disturbing significance of the information he possesses, illustrating the story's first line: "The most merciful thing in the world, I think, is the inability of the human mind to correlate all its contents. We live on a placid island of ignorance in the midst of black seas of infinity, and it was not meant that we should voyage far." 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#00211d', color: '#fff' }}
                date="March - 1928"
                iconStyle={{ background: '#00211d', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Cool Air</h3>
                <h4 className="vertical-timeline-element-subtitle">Read here</h4>
                <p>
                The story is set up as the narrator's explanation for why a "draught of cool air" causes him more discomfort then one would expect.
                The tale opens up in the spring of 1923 with the narrator looking for housing in New York City, finally settling in a converted brownstone on West Fourteenth Street. Eventually, a chemical leak from the floor above reveals that the inhabitant directly overhead is a strange, old, reclusive doctor. One day the narrator suffers a heart attack, and remembering that a doctor lives directly above, heads there, culminating in his first meeting with Dr. Muñoz. 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
                date="January - 1929"
                iconStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">The Silver Key</h3>
                <h4 className="vertical-timeline-element-subtitle">Read here</h4>
                <p>
                Randolph Carter discovers, at the age of 30, that he has gradually "lost the key to the gate of dreams." Randolph once believed life is made up of nothing but pictures in memory, whether they be from real life or dreams, and he highly prefers his romantic nightly dreams of fantastic places and beings, as an antidote for the "prosiness of life", believing his dreams to reveal truths missing from man's waking ideas, regarding the purpose of humans and the universe, primary among these being the truth of beauty as perceived and invented by humans in times past. As he ages, though, he finds that his daily waking exposure to the more "practical", scientific ideas of man, has eventually eroded his ability to dream as he once did, and has made him regretfully subscribe more and more to the mundane beliefs of everyday, waking "real life". But still not certain which is truer, he sets out to determine whether the waking ideas of man are superior to his dreams, and in the process, he passes through several unsatisfying philosophical stances. 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#00211d', color: '#fff' }}
                date="April - 1929"
                iconStyle={{ background: '#00211d', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">The Dunwich Horror</h3>
                <h4 className="vertical-timeline-element-subtitle">Read here</h4>
                <p>
                In the isolated, desolate, decrepit village of Dunwich, Wilbur Whateley is the hideous son of Lavinia Whateley, a deformed and unstable albino mother, and an unknown father (alluded to in passing by mad Old Whateley, as "Yog-Sothoth"). Strange events surround his birth and precocious development. Wilbur matures at an abnormal rate, reaching manhood within a decade. Locals shun him and his family, and animals fear and despise him (due to his odor). All the while, his sorcerer grandfather indoctrinates him into certain dark rituals and the study of witchcraft. Various locals grow suspicious after Old Whateley buys more and more cattle, yet the number of his herd never increases, and the cattle in his field become mysteriously afflicted with severe open wounds.
                Wilbur and his grandfather have sequestered an unseen presence at their farmhouse; this being is connected somehow to Yog-Sothoth. Year by year, this unseen entity grows to monstrous proportions, requiring the two men to make frequent modifications to their residence. People begin to notice a trend of cattle mysteriously disappearing. Wilbur's grandfather dies. His mother disappears soon afterwards. The colossal entity eventually occupies the whole interior of the farmhouse. 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
                date="August - 1931"
                iconStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">The Whisperer in Darkness</h3>
                <h4 className="vertical-timeline-element-subtitle">Read here</h4>
                <p>
                The story is told by Albert N. Wilmarth, an instructor of literature at Miskatonic University in Arkham. When local newspapers report strange things seen floating in rivers during a historic Vermont flood, Wilmarth becomes embroiled in a controversy about the reality and significance of the sightings, though he sides with the skeptics. Wilmarth uncovers old legends about monsters living in the uninhabited hills who abduct people who venture or settle too close to their territory.
                He receives a letter from one Henry Wentworth Akeley, a man who lives in an isolated farmhouse near Townshend, Vermont. He affirms that he has proof that will convince Wilmarth that he is wrong. From this point on, most of the story involves the exchange of letters between the two characters. Through their correspondence, we learn of the existence of an extraterrestrial race of monstrous beings that have an outpost in the Vermont hills where they mine a rare metal. They have no interest in the human race and usually hide from people. Nonetheless, they ruthlessly defend their outpost and their secrecy, often employing human agents with whom they have made secret pacts. 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#00211d', color: '#fff' }}
                date="October 1931"
                iconStyle={{ background: '#00211d', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">The Strange High House in the Mist</h3>
                <h4 className="vertical-timeline-element-subtitle">Read here</h4>
                <p>
                Thomas Olney, a "philosopher" visiting the town of Kingsport, Massachusetts with his family, is intrigued by a strange house on a cliff overlooking the ocean. It is unaccountably high and old and the locals have a generations-long dread of the place which no one is known to have visited. With great difficulty, Olney climbs the crag, approaches the house, and meets the One, the mysterious man who lives there. The only door opens directly onto a sheer cliff, giving access only to mist and "the abyss". The transmittal of archaic lore and a life-altering encounter with the supernatural ensue, as Olney is not the only visitor that day. He returns to Kingsport the next day, but seems to have left his spirit behind in the strange, remote dwelling. 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
                date="July 1933"
                iconStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">The Dreams in the Witch House</h3>
                <h4 className="vertical-timeline-element-subtitle">Read here</h4>
                <p>
                Walter Gilman, a student of mathematics and folklore at Miskatonic University, takes an attic room in "the Witch House", a house in Arkham thought to be cursed. The first part of the story is an account of the history of the house, which once harboured Keziah Mason, an accused witch who disappeared mysteriously from a Salem jail in 1692. Gilman discovers that for the better part of two centuries many of its occupants have died prematurely.
                The dimensions of Gilman's attic room are unusual, and seem to conform to a kind of unearthly geometry. Gilman theorizes that the structure can enable travel from one plane or dimension to another.
                Shortly after moving into the attic Gilman begins experiencing bizarre dreams, in which he seems to float without physical form through an otherworldly space of unearthly geometry and indescribable colors and sounds. Amongst elements both organic and inorganic, he perceives shapes that he innately recognizes as entities, which appear and disappear instantaneously and at random. Several times his dreaming self encounters bizarre clusters of "iridescent, prolately spheroidal bubbles", as well as a rapidly changing polyhedral figure, both of which seem sapient. 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#00211d', color: '#fff' }}
                date="November 1933"
                iconStyle={{ background: '#00211d', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">The Other Gods</h3>
                <h4 className="vertical-timeline-element-subtitle">Read here</h4>
                <p>
                Barzai the Wise, a high priest and prophet greatly learned in the lore of the "gods of earth", or Great Ones, attempts to scale the mountain of Hatheg-Kla in order to look upon their faces, accompanied by his young disciple Atal. Upon reaching the peak, Barzai at first seems overjoyed until he finds that the "gods of the earth" are not there alone, but rather are overseen by the "other gods, the gods of the outer hells that guard the feeble gods of earth!" Atal flees and Barzai is never seen again. 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
                date="June 1934"
                iconStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">From Beyond</h3>
                <h4 className="vertical-timeline-element-subtitle">Read here</h4>
                <p>
                The story is told from the first person perspective of an unnamed narrator and details his experiences with a scientist named Crawford Tillinghast. Tillinghast creates an electronic device that emits a resonance wave, which stimulates an affected person’s pineal gland, thereby allowing them to perceive planes of existence outside the scope of mundane reality. 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#00211d', color: '#fff' }}
                date="July 1935"
                iconStyle={{ background: '#00211d', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">The Quest of Iranon</h3>
                <h4 className="vertical-timeline-element-subtitle">Read here</h4>
                <p>
                The story is about a golden-haired youth who wanders into the city of Teloth, telling tales of the great city of Aira, where he was prince. While Iranon enjoys singing and telling his tales of wonder, few appreciate it. When a disenfranchised boy named Romnod suggests leaving Teloth to go to the famed city of Oonai (which he thinks may be Aira, now under a different name), Iranon takes him up on his offer.
                Iranon and Romnod spend years on their journey to Oonai. Along the way, Romnod grows up while Iranon remains exactly the same. Eventually they reach Oonai, which Iranon is disappointed (although not surprised) to discover is not Aira. Iranon is loved by the people in Oonai, however, so he stays there even though he still desires to return to Aira. As the years pass, people appreciate him less and less, and he is eventually upstaged by dancers from the desert. By this point, Romnod has grown old and has become a drunkard. After Romnod's death, Iranon decides to leave Oonai and continue his search for Aira. 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
                date="February 1936"
                iconStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">At the Mountains of Madness</h3>
                <h4 className="vertical-timeline-element-subtitle">Read here</h4>
                <p>
                The story is written in the first-person perspective by the geologist William Dyer, a professor from Miskatonic University. He writes to disclose hitherto unknown and closely kept secrets in the hope that he can deter a planned and much publicized scientific expedition to Antarctica. On a previous expedition there, a party of scholars from Miskatonic University, led by Dyer, discovered fantastic and horrific ruins and a dangerous secret beyond a range of mountains taller than the Himalaya.
                The group that discovered and crossed the mountains found the remains of fourteen ancient life forms, completely unknown to science and unidentifiable as either plants or animals, after discovering an underground cave while boring for ice cores. Six of the specimens seem to be badly damaged, the others uncannily pristine. Their highly-evolved features are problematic: their stratum location puts them at a point on the geologic time scale much too early for such features to have naturally evolved yet. Because of their resemblance to creatures of myth mentioned in the Necronomicon, they are dubbed the "Elder Ones".
                When the main expedition loses contact with this party, Dyer and the rest of his colleagues travel to their camp to investigate. The camp is devastated and both the men and the dogs slaughtered, with only one of each missing. Near the camp, they find six star-shaped snow mounds, and a damaged Elder One buried under each. They discover that the better-preserved life forms have vanished and that some form of experiment has been done, though they are only able to speculate on the subject and the possibility that it is the missing man and dog. Dyer decides to close off the area from which they took their samples. 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#00211d', color: '#fff' }}
                date="April 1936"
                iconStyle={{ background: '#00211d', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">The Shadow over Innsmouth</h3>
                <h4 className="vertical-timeline-element-subtitle">Read here</h4>
                <p>
                The story is divided into five chapters. In the first chapter, the narrator begins by recounting to the reader of a secret investigation that was undertaken by the government at the ruined town of Innsmouth, Massachusetts, and that the story told to them by the narrator himself is the reason for this investigation. He proceeds to describe in detail the events surrounding his initial interest in the town (antiquarian and architectural), which lies along the route of his tour across New England, taken when he was twenty-one. While he waits for the bus that will take him to Innsmouth, he busies himself in the neighboring town of Newburyport by gathering information from local townsfolk; all of it with superstitious overtones.
                The second chapter details his ride into Innsmouth, described in great detail as a crumbling, mostly deserted town full of dilapidated structures and people who look just a bit odd and who tend to walk with a distinct shambling gait. All of this is offputting to the narrator, who describes the people as having the "Innsmouth look", "queer narrow heads with flat noses and bulgy, stary eyes". Only one person in town appears normal, a young clerk at the local First National grocery store who comes from neighbouring Arkham. The narrator gathers much information from the clerk, including a map of the town and the name of a local who might be a good source of information: an ancient man named Zadok Allen, known to open up about the town when plied with drink. 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
                date="June 1936"
                iconStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">The Shadow Out of Time</h3>
                <h4 className="vertical-timeline-element-subtitle">Read here</h4>
                <p>
                The Shadow Out of Time indirectly tells of the Great Race of Yith, an extraterrestrial species with the ability to travel through space and time. The Yithians accomplish this by body swap with hosts from the intended spatial or temporal destination. The story implies that the effect when seen from the outside is similar to spiritual possession. The Yithians' original purpose was to study the history of various times and places, and they have amassed a "library city" that is filled with the past and future history of multiple races, including humans. Ultimately the Yithians use their ability to escape the destruction of their planet in another galaxy by switching bodies with a race of cone-shaped plant beings who lived 250 million years ago on Earth. The cone-shaped entities (subsequently also known as the Great Race of Yith) lived in their vast library city in what would later become Australia's Great Sandy Desert.
                The story is told through the eyes of Nathaniel Wingate Peaslee, an American living in the first decade of the 20th century, who is "possessed" by a Yithian. He fears he is losing his mind when he unaccountably sees strange vistas of other worlds and of the Yithian library city. He also feels himself being led about by these creatures and experiences how they live. When he is returned to his own body, he finds that those around him have judged him insane due to the actions of the Yithian that possessed his body. While he was experiencing a Yithian existence in Earth's ancient past, the Yithian occupying his body was experiencing a human one in the present day. 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#00211d', color: '#fff' }}
                date="December 1936"
                iconStyle={{ background: '#00211d', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">The Haunter of the Dark</h3>
                <h4 className="vertical-timeline-element-subtitle">Read here</h4>
                <p>
                The story takes place in Providence, Rhode Island and revolves around the Church of Starry Wisdom. The cult uses an ancient artifact known as the Shining Trapezohedron to summon a terrible being from the depths of time and space.
                The Shining Trapezohedron was discovered in Egyptian ruins, in a box of alien construction, by Professor Enoch Bowen before he returned to Providence in 1844. Members of the Church of Starry Wisdom in Providence would awaken the Haunter of the Dark, an avatar of Nyarlathotep, by gazing into the glowing crystal. Summoned from the black gulfs of chaos, this being could show other worlds, other galaxies, and the secrets of arcane and paradoxical knowledge; but he demanded monstrous sacrifices, hinted at by disfigured skeletons that were later found in the church. The Haunter of the Dark was banished by light and could not cross a lighted area. 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
                date="January 1937"
                iconStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">The Thing on the Doorstep</h3>
                <h4 className="vertical-timeline-element-subtitle">Read here</h4>
                <p>
                Daniel Upton, the story's narrator, begins by telling that he has killed his best friend, Edward Derby, and that he hopes his account will prove that he is not a murderer. He begins by describing Derby's life and career.
                He then tells of Asenath Waite, and how Derby and she wed. A few years later, people start to notice a change in Derby's behaviour. He confides in Upton, telling him strange stories of Asenath, and how he believes her father, Ephraim Waite, may not actually be dead. 
                Upton is called to pick up Derby who has been found in Maine, rambling incoherently. on the trip back, Derby tells of Asenath using his body, and suggests that it is in fact Ephraim who resides in the body of Asenath. Before finishing, he has a small seizure and rapidly changes personality, asking Upton to ignore what he might have just said. 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#00211d', color: '#fff' }}
                date="October 1937"
                iconStyle={{ background: '#00211d', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">The Shunned House</h3>
                <h4 className="vertical-timeline-element-subtitle">Read here</h4>
                <p>
                For many years the protagonist and his uncle, Dr. Elihu Whipple, have nurtured a fascination with an old, abandoned house on Benefit Street. Dr. Whipple has made extensive records tracking the mysterious, yet apparently coincidental sickness and death of many who have lived in the house for over one hundred years. They are also puzzled by the strange weeds growing in the yard, as well as the unexplained foul smell and whitish, phosphorescent fungi growing in the cellar.
                After the protagonist discovers a strange, yellowish vapour in the basement, which seems to be coupled with a moldy outline of a huddled human form on the floor, he and his uncle decide to spend the night in the house, investigating the possibility of some supernatural force. They set up cots and chairs in the cellar, arm themselves with military flamethrowers, and outfit a modified Crookes tube in the hopes of destroying any supernatural presence they might find. 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
                date="January 1938"
                iconStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Ibid</h3>
                <h4 className="vertical-timeline-element-subtitle">Read here</h4>
                <p>
                "Ibid" is a mock biography of the Roman scholar Ibidus (486-587), whose masterpiece was Op. Cit., "wherein all the significant undercurrents of Graeco-Roman thought were crystallized once and for all." The piece traces the skull of Ibidus, once the possession of Charlemagne, William the Conqueror and other notables, to the United States, where it travels via Salem, Massachusetts and Providence, Rhode Island to a prairie dog hole in Milwaukee, Wisconsin. 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#00211d', color: '#fff' }}
                date="June 1938"
                iconStyle={{ background: '#00211d', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Azathoth</h3>
                <h4 className="vertical-timeline-element-subtitle">Read here</h4>
                <p>
                The story begins by describing how the modern world has been stripped of imagination and belief in magic. The protagonist is an unnamed man who lives in a dull and ugly city. Every night for many years the man gazes from his window upon the stars, until he comes over time to observe secret vistas unsuspected by normal humanity. One night the gulf between his world and the stars is bridged, and his mind ascends from his body out unto the boundless cosmos. 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
                date="1938"
                iconStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">The Descendant</h3>
                <h4 className="vertical-timeline-element-subtitle">Read here</h4>
                <p>
                The story begins with a narrator explaining that he is on his deathbed and feels the need to share a particular story before he dies. He tells of a quiet and slightly mad older man who lives in the Gray's Inn with his pet cat. The man is haggard and haunted, looking older than his years and terrified of church bells. A young man named Williams (the narrator) moves into the Inn and tries to befriend the old man and get him to share his knowledge. It is revealed that the man is Lord Northam of England. Williams' attempts are largely rebuked until one day, Williams acquires a copy of the Necronomicon, the book of the dead that captures the minds of so many intrigued by the dark arts.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#00211d', color: '#fff' }}
                date="1938"
                iconStyle={{ background: '#00211d', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">History of the Necronomicon</h3>
                <h4 className="vertical-timeline-element-subtitle">Read here</h4>
                <p>
                The piece provides biographical details about Alhazred, including his origin in Sanaa, Yemen; his travels to Babylon, Memphis, Irem, and the Nameless City; his worship of Yog-Sothoth and Cthulhu; and his "final death or disappearance" in Damascus in 738 A.D., when he was, according to the 12th century biographer Ebn Khallikan, "seized by an invisible monster in broad daylight and devoured horribly before a large number of fright-frozen witnesses." 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
                date="1938"
                iconStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">The Book</h3>
                <h4 className="vertical-timeline-element-subtitle">Read here</h4>
                <p>
                In the story fragment, the narrator is given an ancient book by a strange bookseller, and when he takes it home and examines it, weird and sinister events ensue. 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#00211d', color: '#fff' }}
                date="April 1939"
                iconStyle={{ background: '#00211d', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">The Evil Clergyman</h3>
                <h4 className="vertical-timeline-element-subtitle">Read here</h4>
                <p>
                The story begins in the attic of an ancient house. The narrator’s companion refers to the former owner of the house and the presumably violent end that befell him. He advises the narrator not to stay after dark or touch anything, especially the small object on a table, which the companion seems to fear considerably.
                The narrator is then left alone in the attic; he notes the many theological and classical books, and one bookshelf in particular containing books on magic. He feels a considerable curiosity for the forbidden object on the table. The narrator finds a strange flashlight-like device in his pocket that produces a peculiar violet glow. He attempts to illuminate the object on the table with this strange light, which he describes as being composed of particles. The object makes a crackling sound like a sparking vacuum tube, and takes on a pinkish glow with a vague white shape taking form from its center.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
                date="Summer 1940"
                iconStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">The Very Old Folk</h3>
                <h4 className="vertical-timeline-element-subtitle">Read here</h4>
                <p>
                It is a recording of a dream, where the protagonist is a Roman military official in the Basque country near Pompelo. The countryside is, every year, ravaged by terrible hill people who kidnap citizens and perform cruel rituals at a Sabbath. The narrator wishes to lead a military expedition to crush these hill folk, as a feeling of approaching evil has enveloped the countryside, due to a riot between the citizens and the hill people. These hill folk came to trade, yet some of these are killed and later, no disappearances occur before the time of the Sabbath. The incursion is guided by a local-born son of Roman parents. As the Romans approach the seat of the Sabbath rituals, something terrible attacks them and in an instant, horrible things come to pass
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#00211d', color: '#fff' }}
                date="May 1941"
                iconStyle={{ background: '#00211d', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">The Case of Charles Dexter Ward</h3>
                <h4 className="vertical-timeline-element-subtitle">Read here</h4>
                <p>
                Charles Dexter Ward is a young man from a prominent Rhode Island family who has disappeared from a mental asylum. He had been incarcerated during a prolonged period of insanity, during which he exhibited minor and inexplicable physiological changes. His empty cell is found to be very dusty.
                The bulk of the story concerns the investigation conducted by the Wards' family doctor, Marinus Bicknell Willett, in an attempt to discover the reason for Ward's madness and physiological changes. Willett learns that Ward had spent the past several years attempting to discover the grave of his ill-reputed ancestor, Joseph Curwen. The doctor slowly begins to reveal the truth behind the legends surrounding Curwen, an eighteenth-century shipping entrepreneur and alleged alchemist, who was in reality a necromancer and mass-murderer. A raid on Curwen's farm is remarkable for the shouted incantations, lights, explosions, and some not-quite-human figures shot down by the raiders. The raiders soon swear any witnesses to strict secrecy about what they may have seen or heard. 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
                date="1943"
                iconStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Sweet Ermengarde</h3>
                <h4 className="vertical-timeline-element-subtitle">Read here</h4>
                <p>
                The story is a parody of romantic melodrama, centering on Ermengarde Stubbs and her relationships with villainous mortgage-holder 'Squire Hardman, would-be rescuer Jack Manly and fiance Algernon Reginald Jones. Daniel Harms calls it "a take-off on the Horatio Alger 'rags-to-riches' genre".[1] An H. P. Lovecraft Encyclopedia suggests that a more precise target for Lovecraft's satire was writer Fred Jackson, whose novels often "have exactly the sort of implausibility of plot and sentimentality of action that is parodied in 'Sweet Ermengarde'." 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#00211d', color: '#fff' }}
                date="1943"
                iconStyle={{ background: '#00211d', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">The Dream-Quest of Unknown Kadath</h3>
                <h4 className="vertical-timeline-element-subtitle">Read here</h4>
                <p>
                Randolph Carter dreams three times of a majestic sunset city, but each time he is abruptly snatched away before he can see it up close. When he prays to the gods of dream to reveal the whereabouts of the phantasmal city, they do not answer, and his dreams of the city stop altogether. Undaunted, Carter resolves to go to Kadath, where the gods live, to beseech them in person. However, no one has ever been to Kadath and none even knows how to get there. In dream, Randolph Carter descends "seventy steps" and speaks of his plan to the priests Nasht and Kaman-Thah, whose temple - the Cavern of Flame - borders the Dreamlands. The priests warn Carter of the great danger of his quest and suggest that the gods withdrew his vision of the city on purpose. 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
                date="1944"
                iconStyle={{ background: 'rgb(2, 48, 0)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">The Transition of Juan Romero</h3>
                <h4 className="vertical-timeline-element-subtitle">Read here</h4>
                <p>
                The story involves a mine that uncovers a very deep chasm, too deep for any sounding lines to hit bottom. The night after the discovery of the abyss the narrator and one of the mine's workers, a Mexican called Juan Romero, venture inside the mine, drawn against their will by a mysterious rhythmical throbbing in the ground. Romero reaches the abyss first and is swallowed by it.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#00211d', color: '#fff' }}
                date="1959"
                iconStyle={{ background: '#00211d', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Old Bugs</h3>
                <h4 className="vertical-timeline-element-subtitle">Read here</h4>
                <p>
                The piece was written after Lovecraft's friend Alfred Galpin's suggestion that he wanted to try alcohol before Prohibition went into effect. In response, Lovecraft, a teetotaler, wrote a tale of an old derelict known as Old Bugs, who turns out to be Galpin himself, brought low by "evil habits, dating from a first drink taken years before in woodland seclusion." At the bottom of the manuscript, Lovecraft had written, "Now will you be good?"
                </p>
            </VerticalTimelineElement>

        </VerticalTimeline>
      );
  }