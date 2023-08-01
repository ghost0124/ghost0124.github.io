import * as React from "react"
import Layout from "../components/layout"
import * as styles from "../styles/entities.module.css"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { Container, Row, Col } from 'react-grid-system';
import 'react-tabs/style/react-tabs.css'
import cthulhu from '../../public/entities/cthulhu-image.jpg'
import yog from '../../public/entities/yog.jpeg'
import dagon from '../../public/entities/dagon.jpg'
import tsathoggua from '../../public/entities/tsathoggua.jpg'
import chaugnar from '../../public/entities/chaugnar.jpg'
import ghatanothoa from '../../public/entities/ghatanothoa.jpg'
import gloon from '../../public/entities/gloon.jpg'
import gobogeg from '../../public/entities/gobogeg.avif'
import jukshabb from '../../public/entities/jukshabb.webp'
import mormo from '../../public/entities/mormo.jpg'
import nugandyeb from '../../public/entities/nugandyeb.png'
import oorn from '../../public/entities/oorn.png'
import ran from '../../public/entities/rhan-tegoth.jpg'
import shaurash from '../../public/entities/shauras.webp'
import umr from '../../public/entities/umrattawil.jpg'
import yig from '../../public/entities/yig.png'
import hagarg from '../../public/entities/hagarg.jpg'
import lobon from '../../public/entities/lobon.webp'
import lilith from '../../public/entities/lilith.webp'
import oukranos from '../../public/entities/oukranos.webp'
import tamash from '../../public/entities/tamash.webp'
import zokalar from '../../public/entities/zokalar.webp'

/*Outer gods*/

import azatoth from '../../public/entities/azatoth.jpg'
import abhoth from '../../public/entities/abhot.webp'
import cxaxukluth from '../../public/entities/Cxaxukluth.webp'
import darkness from '../../public/entities/darkness.png'
import dendrrah from '../../public/entities/dendraa.webp'
import namelessmist from '../../public/entities/nameless.png'
import noth from '../../public/entities/noth-yidik.webp'
import nyarlathotep from '../../public/entities/nyarlahotep.webp'
import shub from '../../public/entities/shub-niggurath.webp'
import trunembra from '../../public/entities/trunembra.jpg'
import tulzscha from '../../public/entities/tulzscha.webp'

/*Elder gods */


import bast from '../../public/entities/bast.webp'
import hypnos from '../../public/entities/hypnos.jpg'
import orryx from '../../public/entities/oryx.webp'
/*import oztalun from '../../public/entities/no.jpg'*/
import nodens from '../../public/entities/nodens.webp'
/*import shavalyoth from '../../public/entities/azatoth.jpg'*/
import vorvadoss from '../../public/entities/vorvadoss.jpg'



/*
Every lovecraftian monster

shoggoth
Azatoth
cthulhu
nyarlathotep
dagon
great old one
yog-sothoth
night-gaunt
outer god
deep one
rhan-tegoth
yig
mi-go
elder thing
R'lyeh
nodens
bgnu-thun
bokrug
formless spawn
dimensional shambler - hunter from beyond
dreamlands
shub-niggurath
spider of leng
hydra
dunwich horror
shathak
zvilpogghua
ghatanothoa
gloon
yugoth
gnop-keh
wilbur whateley
gobogeg
hastur
hound of tindalos
hunting horror
innsmouth
venus
shaggai

*/


export default function Entities() {
    return (
        <Layout>
            <h1 className={styles.header}>Cthulhu Mythos Entities</h1>
            <Tabs defaultIndex={1}>
                <TabList>
                    <Tab>The Great Old Ones</Tab>
                    <Tab>The Great Ones</Tab>
                    <Tab>The Outer Gods</Tab>
                    <Tab>The Elder Gods</Tab>
                </TabList>
                <TabPanel>
                    <Tabs defaultIndex={1}>
                        <Row></Row>
                        <Row></Row>
                        <TabList>
                            <Tab>Cthulhu</Tab>  
                            <Tab>Hastur</Tab>
                            <Tab>Dagon</Tab>
                            <Tab>Tsathoggua</Tab>
                            <Tab>Chaugnar Faugn</Tab>  
                            <Tab>Ghatanothoa</Tab>  
                            <Tab>Gloon</Tab>  
                            <Tab>Gobogeg</Tab>  
                            <Tab>Juk-Shabb</Tab>  
                            <Tab>Mormo</Tab>  
                            <Tab>Nug and Yeb</Tab>  
                            <Tab>Oorn</Tab>  
                            <Tab>Rhan-Tegoth</Tab>  
                            <Tab>Shaurash-ho</Tab>  
                            <Tab>'Umr At-Tawil</Tab>  
                            <Tab>Yig</Tab>  
                        </TabList>
                        <TabPanel>
                            <Container>
                                <Row>
                                    <Col>
                                        <p>Cthulhu</p>
                                    </Col>
                                    <Col width={600}>
                                        <img src={cthulhu} className="image" />
                                    </Col>
                                </Row>
                            </Container>
                        </TabPanel>
                        <TabPanel>
                            <Container>
                                <Row>
                                    <Col>
                                        <p>Yog-sototh</p>
                                    </Col>
                                    <Col width={600}>
                                        <img src={yog} className="image" />
                                    </Col>
                                </Row>
                            </Container>
                        </TabPanel>
                        <TabPanel>
                            <Container>
                                <Row>
                                    <Col>
                                        <p>Dagon</p>
                                    </Col>
                                    <Col width={600}>
                                        <img src={dagon} className="image" />
                                    </Col>
                                </Row>
                            </Container>
                        </TabPanel>
                        <TabPanel>
                            <Container>
                                <Row>
                                    <Col>
                                        <p>Tsathoggua</p>
                                    </Col>
                                    <Col width={600}>
                                        <img src={tsathoggua} className="image" />
                                    </Col>
                                </Row>
                            </Container>
                        </TabPanel>
                        <TabPanel>
                            <Container>
                                <Row>
                                    <Col>
                                        <p>Chaugnar</p>
                                    </Col>
                                    <Col width={600}>
                                        <img src={chaugnar} className="image" />
                                    </Col>
                                </Row>
                            </Container>
                        </TabPanel>
                        <TabPanel>
                            <Container>
                                <Row>
                                    <Col>
                                        <p>Ghatanothoa</p>
                                    </Col>
                                    <Col width={600}>
                                        <img src={ghatanothoa} className="image" />
                                    </Col>
                                </Row>
                            </Container>
                        </TabPanel>
                        <TabPanel>
                            <Container>
                                <Row>
                                    <Col>
                                        <p>Gloon</p>
                                    </Col>
                                    <Col width={600}>
                                        <img src={gloon} className="image" />
                                    </Col>
                                </Row>
                            </Container>
                        </TabPanel>
                        <TabPanel>
                            <Container>
                                <Row>
                                    <Col>
                                        <p>Gobogeg</p>
                                    </Col>
                                    <Col width={600}>
                                        <img src={gobogeg} className="image" />
                                    </Col>
                                </Row>
                            </Container>
                        </TabPanel>
                        <TabPanel>
                            <Container>
                                <Row>
                                    <Col>
                                        <p>Juk-Shabb</p>
                                    </Col>
                                    <Col width={600}>
                                        <img src={jukshabb} className="image" />
                                    </Col>
                                </Row>
                            </Container>
                        </TabPanel>
                        <TabPanel>
                            <Container>
                                <Row>
                                    <Col>
                                        <p>Mormo</p>
                                    </Col>
                                    <Col width={600}>
                                        <img src={mormo} className="image" />
                                    </Col>
                                </Row>
                            </Container>
                        </TabPanel>
                        <TabPanel>
                            <Container>
                                <Row>
                                    <Col>
                                        <p>Nug and Yeb</p>
                                    </Col>
                                    <Col width={600}>
                                        <img src={nugandyeb} className="image" />
                                    </Col>
                                </Row>
                            </Container>
                        </TabPanel>
                        <TabPanel>
                            <Container>
                                <Row>
                                    <Col>
                                        <p>Oorn</p>
                                    </Col>
                                    <Col width={600}>
                                        <img src={oorn} className="image" />
                                    </Col>
                                </Row>
                            </Container>
                        </TabPanel>
                        <TabPanel>
                            <Container>
                                <Row>
                                    <Col>
                                        <p>Rhan Tegoth</p>
                                    </Col>
                                    <Col width={600}>
                                        <img src={ran} className="image" />
                                    </Col>
                                </Row>
                            </Container>
                        </TabPanel>
                        <TabPanel>
                            <Container>
                                <Row>
                                    <Col>
                                        <p>Shaurash-ho</p>
                                    </Col>
                                    <Col width={600}>
                                        <img src={shaurash} className="image" />
                                    </Col>
                                </Row>
                            </Container>
                        </TabPanel>
                        <TabPanel>
                            <Container>
                                <Row>
                                    <Col>
                                        <p>Umr At-Tawil</p>
                                    </Col>
                                    <Col width={600}>
                                        <img src={umr} className="image" />
                                    </Col>
                                </Row>
                            </Container>
                        </TabPanel>
                        <TabPanel>
                            <Container>
                                <Row>
                                    <Col>
                                        <p>Yig</p>
                                    </Col>
                                    <Col width={600}>
                                        <img src={yig} className="image" />
                                    </Col>
                                </Row>
                            </Container>
                        </TabPanel>
                    </Tabs>
                </TabPanel>
                <TabPanel>
                    <Tabs defaultIndex={2}>
                        <TabList>
                            <Tab>Hagarg Ryonis</Tab>
                            <Tab>Karakal</Tab>
                            <Tab>Lobon</Tab>
                            <Tab>Lilith</Tab>
                            <Tab>Oukranos</Tab>
                            <Tab>Tamash</Tab>
                        </TabList>
                        <TabPanel>
                            <Container>
                                <Row>
                                    <Col>
                                        <p>Hagarg Ryonis</p>
                                    </Col>
                                    <Col width={600}>
                                        <img src={hagarg} className="image" />
                                    </Col>
                                </Row>
                            </Container>
                        </TabPanel>
                        <TabPanel>
                            <Container>
                                <Row>
                                    <Col>
                                        <p>Karakal</p>
                                    </Col>
                                    <Col width={600}>
                                        <img src={zokalar} className="image" />
                                    </Col>
                                </Row>
                            </Container>
                        </TabPanel>
                        <TabPanel>
                            <Container>
                                <Row>
                                    <Col>
                                        <p>Lobon</p>
                                    </Col>
                                    <Col width={600}>
                                        <img src={lobon} className="image" />
                                    </Col>
                                </Row>
                            </Container>
                        </TabPanel>
                        <TabPanel>
                            <Container>
                                <Row>
                                    <Col>
                                        <p>Lilith</p>
                                    </Col>
                                    <Col width={600}>
                                        <img src={lilith} className="image" />
                                    </Col>
                                </Row>
                            </Container>
                        </TabPanel>
                        <TabPanel>
                            <Container>
                                <Row>
                                    <Col>
                                        <p>Oukranos</p>
                                    </Col>
                                    <Col width={600}>
                                        <img src={oukranos} className="image" />
                                    </Col>
                                </Row>
                            </Container>
                        </TabPanel>
                        <TabPanel>
                            <Container>
                                <Row>
                                    <Col>
                                        <p>Tamash</p>
                                    </Col>
                                    <Col width={600}>
                                        <img src={tamash} className="image" />
                                    </Col>
                                </Row>
                            </Container>
                        </TabPanel>
                    </Tabs>
                </TabPanel>
                <TabPanel>
                    <Tabs defaultIndex={3}>
                        <TabList>
                            <Tab>Abhoth</Tab>
                            <Tab>Azatoth</Tab>
                            <Tab>Cxaxukluth</Tab>
                            <Tab>Darkness</Tab>
                            <Tab>D'endrrah</Tab>
                            <Tab>The Nameless Mist/Magnum Innominandum</Tab>
                            <Tab>Noth-Yidik</Tab>
                            <Tab>Nyarlathotep</Tab>
                            <Tab>Shub-Niggurath</Tab>
                            <Tab>Tru'nembra</Tab>
                            <Tab>Tulzscha</Tab>
                            <Tab>Yog-Sothoth</Tab>
                        </TabList>
                        <TabPanel>
                            <Container>
                                <Row>
                                    <Col>
                                        <p>Abhoth</p>
                                    </Col>
                                    <Col width={600}>
                                        <img src={abhoth} className="image" />
                                    </Col>
                                </Row>
                            </Container>
                        </TabPanel>
                        <TabPanel>
                            <Container>
                                <Row>
                                    <Col>
                                        <p>Azatoth</p>
                                    </Col>
                                    <Col width={600}>
                                        <img src={azatoth} className="image" />
                                    </Col>
                                </Row>
                            </Container>
                        </TabPanel>
                        <TabPanel>
                            <Container>
                                <Row>
                                    <Col>
                                        <p>Cxaxukluth</p>
                                    </Col>
                                    <Col width={600}>
                                        <img src={cxaxukluth} className="image" />
                                    </Col>
                                </Row>
                            </Container>
                        </TabPanel>
                        <TabPanel>
                            <Container>
                                <Row>
                                    <Col>
                                        <p>Darkness</p>
                                    </Col>
                                    <Col width={600}>
                                        <img src={darkness} className="image" />
                                    </Col>
                                </Row>
                            </Container>
                        </TabPanel>
                        <TabPanel>
                            <Container>
                                <Row>
                                    <Col>
                                        <p>D'endrrah</p>
                                    </Col>
                                    <Col width={600}>
                                        <img src={dendrrah} className="image" />
                                    </Col>
                                </Row>
                            </Container>
                        </TabPanel>
                        <TabPanel>
                            <Container>
                                <Row>
                                    <Col>
                                        <p>The Nameless Mist/Magnum Innominandum</p>
                                    </Col>
                                    <Col width={600}>
                                        <img src={namelessmist} className="image" />
                                    </Col>
                                </Row>
                            </Container>
                        </TabPanel>
                        <TabPanel>
                            <Container>
                                <Row>
                                    <Col>
                                        <p>Noth-Yidik</p>
                                    </Col>
                                    <Col width={600}>
                                        <img src={noth} className="image" />
                                    </Col>
                                </Row>
                            </Container>
                        </TabPanel>
                        <TabPanel>
                            <Container>
                                <Row>
                                    <Col>
                                        <p>Nyarlathotep</p>
                                    </Col>
                                    <Col width={600}>
                                        <img src={nyarlathotep} className="image" />
                                    </Col>
                                </Row>
                            </Container>
                        </TabPanel>
                        <TabPanel>
                            <Container>
                                <Row>
                                    <Col>
                                        <p>Shub-Niggurath</p>
                                    </Col>
                                    <Col width={600}>
                                        <img src={shub} className="image" />
                                    </Col>
                                </Row>
                            </Container>
                        </TabPanel>
                        <TabPanel>
                            <Container>
                                <Row>
                                    <Col>
                                        <p>Tru'nembra</p>
                                    </Col>
                                    <Col width={600}>
                                        <img src={trunembra} className="image" />
                                    </Col>
                                </Row>
                            </Container>
                        </TabPanel>
                        <TabPanel>
                            <Container>
                                <Row>
                                    <Col>
                                        <p>Tulzscha</p>
                                    </Col>
                                    <Col width={600}>
                                        <img src={tulzscha} className="image" />
                                    </Col>
                                </Row>
                            </Container>
                        </TabPanel>
                        <TabPanel>
                            <Container>
                                <Row>
                                    <Col>
                                        <p>Zog-Sothoth</p>
                                    </Col>
                                    <Col width={600}>
                                        <img src={yog} className="image" />
                                    </Col>
                                </Row>
                            </Container>
                        </TabPanel>
                    </Tabs>
                </TabPanel>
                <TabPanel>
                    <Tabs defaultIndex={4}>
                        <TabList>
                            <Tab>Bast</Tab>
                            <Tab>Hypnos</Tab>
                            <Tab>Orryx</Tab>
                            <Tab>Oztalun</Tab>
                            <Tab>Nodens</Tab>
                            <Tab>Shavalyoth</Tab>
                            <Tab>Vorvadoss</Tab>
                        </TabList>
                        <TabPanel>
                            <Container>
                                <Row>
                                    <Col>
                                        <p>Bast</p>
                                    </Col>
                                    <Col width={600}>
                                        <img src={bast} className="image" />
                                    </Col>
                                </Row>
                            </Container>
                        </TabPanel>
                        <TabPanel>
                            <Container>
                                <Row>
                                    <Col>
                                        <p>Hypnos</p>
                                    </Col>
                                    <Col width={600}>
                                        <img src={hypnos} className="image" />
                                    </Col>
                                </Row>
                            </Container>
                        </TabPanel>
                        <TabPanel>
                            <Container>
                                <Row>
                                    <Col>
                                        <p>Orryx</p>
                                    </Col>
                                    <Col width={600}>
                                        <img src={orryx} className="image" />
                                    </Col>
                                </Row>
                            </Container>
                        </TabPanel>
                        <TabPanel>
                            <Container>
                                <Row>
                                    <Col>
                                        <p>Oztalun</p>
                                    </Col>
                                    <Col width={600}>
                                    </Col>
                                </Row>
                            </Container>
                        </TabPanel>
                        <TabPanel>
                            <Container>
                                <Row>
                                    <Col>
                                        <p>Nodens</p>
                                    </Col>
                                    <Col width={600}>
                                        <img src={nodens} className="image" />
                                    </Col>
                                </Row>
                            </Container>
                        </TabPanel>
                        <TabPanel>
                            <Container>
                                <Row>
                                    <Col>
                                        <p>Shavalyoth</p>
                                    </Col>
                                    <Col width={600}>
                                    </Col>
                                </Row>
                            </Container>
                        </TabPanel>
                        <TabPanel>
                            <Container>
                                <Row>
                                    <Col>
                                        <p>Vorvadoss</p>
                                    </Col>
                                    <Col width={600}>
                                        <img src={vorvadoss} className="image" />
                                    </Col>
                                </Row>
                            </Container>
                        </TabPanel>
                    </Tabs>
                </TabPanel>
            </Tabs>
        </Layout>
    )
}