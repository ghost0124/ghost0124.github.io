import * as React from "react"
import ListGroup from 'react-bootstrap/ListGroup'
import Layout from "../components/layout"
import * as styles from "../styles/whatIsCthulhuMythos.module.css"
import lovecraft from '../../public/cthulhumythos.jpg'
import rlyeh from '../../public/rlyeh.jpg'
import azatoth from '../../public/azatoth.jpg'

export default function WhatIsCthulhuMythos() {
    return (
        <Layout>
          <section className={styles.header}>
              <div>
                <h1 className={styles.header}>Cthulhu Mythos</h1>
                <br></br>
                <h3>
                The Cthulhu Mythos encompasses the shared elements, characters, settings, and themes found in the works of H.P. Lovecraft and associated horror fiction writers. Together, they form the mythos that authors writing in the Lovecraftian milieu have used — and continue to use — to craft their stories. The term itself was coined by the writer August Derleth. Although this legendarium is also sometimes called the Lovecraft Mythos, most notably by the Lovecraft scholar S. T. Joshi, it has long since moved beyond Lovecraft's original conception. 
                </h3>

                <br></br>

                <h3>
                  "The most merciful thing in the world... is the inability of the human mind to correlate all its contents."
                </h3>

                <br></br>

                <h3>During the latter part of Lovecraft's life, there was much borrowing of story elements among the authors of the "Lovecraft Circle", a clique of writers with whom Lovecraft corresponded. This group included Clark Ashton Smith, Robert E. Howard, Robert Bloch, Frank Belknap Long, Henry Kuttner and others.

                Lovecraft recognized that each writer had his own story-cycle and that an element from one cycle would not necessarily become part of another simply because a writer used it in one of his stories. For example, although Smith might mention "Kthulhut" (Cthulhu) or Iog-Sotôt (Yog-Sothoth) in one of his Hyperborean tales, this does not mean that Cthulhu is part of the Hyperborean cycle. A notable exception, however, is Smith's Tsathoggua, which Lovecraft appropriated for his revision of Zealia Bishop's "The Mound" (1940). Lovecraft effectively connected Smith's creation to his story-cycle by placing Tsathoggua alongside such entities as Tulu, Yig, Shub-Niggurath and Nug and Yeb in subterranean K'n-yan. </h3>
                
                <br></br>
                <br></br>

                <h2>Structure</h2>         

                <br></br>       

                <h3>The Mythos usually takes place in fictional New England towns and is centered on the Great Old Ones, a fearsome assortment of ancient, powerful deities who came from outer space and once ruled the Earth. They are presently quiescent, having fallen into a death-like sleep at some time in the distant past. The most well-known of these beings is Cthulhu, who currently lies "dead [but] dreaming" in the submerged city of R'lyeh somewhere in the Southeast Pacific Ocean. One day, "when the stars are right", R'lyeh will rise from beneath the sea, and Cthulhu will awaken and wreak havoc on the earth.
                    Despite his notoriety, Cthulhu is not the most powerful of the deities, nor is he the theological center of the mythos. Instead, this position is held by the demon-god Azathoth, a mindless but all-powerful Outer God, ruling from his cosmically centered court. Nonetheless, his avatar Nyarlathotep, who fulfills Azathoth's random urges, has intervened more frequently and more directly in human affairs than any other Outer god. He has also displayed more blatant contempt for humanity, especially his own worshippers, than almost any other Lovecraftian deity. 
                </h3>


                <br></br>
                <br></br>

                <h2>Theme</h2>         

                <br></br>       

                <h3>
                The essence in the Mythos is that the human world and our role in it are an illusion. Humanity is living inside a fragile bubble of perception, unaware of what lies behind the curtains or even of the curtains themselves, and our seeming dominance over the world is illusory and ephemeral. We are blessed in that we do not realize what lies dormant in the unknown lurking places on Earth and beyond. As Lovecraft famously begins his short story "The Call of Cthulhu", "The most merciful thing in the world, I think, is the inability of the human mind to correlate all its contents." 
                Now and then, individuals can, by accident or carelessness, catch a glimpse of, or even confront the ancient extraterrestrial entities which the mythology centres around, usually with fatal consequences. Other times, they encounter by their non-human worshippers and servants, whose existence shatters the worldview of those who stumble across them. Human followers exist as well. Because of the limitations of the human mind, these deities appearances are so overwhelming that they can often drive a person insane. They are portrayed as neither good or evil; within the Mythos, these are concepts invented by our species as a way to explain what truly are inexplicable intentions and actions. 
                "The Call of Cthulhu" was the premiere story in which Lovecraft realized and made full use of these themes, which is why his mythology would later be named after the creature in this story, as it defined a new direction in both his authorship and in the horror fiction genre. This is also the first and only story by Lovecraft where humans and one of the cosmic entities called the Great Old Ones come face to face.
                In his final years of writing, Lovecraft used fewer supernatural elements to represent the dangers which threaten humanity. Instead, he gradually replaced them with non-supernatural cosmic beings and phenomena, based on principles outside the laws of nature in our own space-time continuum. This sci-fi trend particularly becomes clear in works such as At the Mountains of Madness. 
                </h3>

                <br></br>
                <br></br>

                <h2>Stories belonging to the mythos</h2>         

                <br></br>       

                <ListGroup>
                    <ListGroup.Item>Dagon</ListGroup.Item>
                    <ListGroup.Item>Nyarlathotep</ListGroup.Item>
                    <ListGroup.Item>The Nameless City</ListGroup.Item>
                    <ListGroup.Item>Azathoth</ListGroup.Item>
                    <ListGroup.Item>The Hound</ListGroup.Item>
                    <ListGroup.Item>The Festival</ListGroup.Item>
                    <ListGroup.Item>The Call of Cthulhu</ListGroup.Item>
                    <ListGroup.Item>The Colour out of Space</ListGroup.Item>
                    <ListGroup.Item>History of the Necronomicon</ListGroup.Item>
                    <ListGroup.Item>The Curse of Yig</ListGroup.Item>
                    <ListGroup.Item>The Whisperer in Darkness</ListGroup.Item>
                    <ListGroup.Item>The Mound</ListGroup.Item>
                    <ListGroup.Item>At the Mountains of Madness</ListGroup.Item>
                    <ListGroup.Item>The Shadow over Innsmouth</ListGroup.Item>
                    <ListGroup.Item>The Dreams in the Witch House</ListGroup.Item>
                    <ListGroup.Item>The Man of Stone</ListGroup.Item>
                    <ListGroup.Item>The Horror in the Museum</ListGroup.Item>
                    <ListGroup.Item>The Thing on the Doorstep</ListGroup.Item>
                    <ListGroup.Item>Out of the Aeons</ListGroup.Item>
                    <ListGroup.Item>The Shadow out of Time</ListGroup.Item>
                    <ListGroup.Item>The Haunter of the Dark</ListGroup.Item>
                </ListGroup>

              </div>
              <div>
                <img className="image" src={lovecraft} />
                <img className="image" src={rlyeh} />
                <img className="image" src={azatoth} />
              </div>
          </section>
        </Layout>
      )
}