import * as React from "react"
import Layout from "../components/layout"
import * as styles from "../styles/entities.module.css"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { Container, Row, Col } from 'react-grid-system';
import 'react-tabs/style/react-tabs.css'
import cthulhu from '../../public/entities/cthulhu-image.jpg'
import yog from '../../public/entities/yog.jpeg'
import dagon from '../../public/entities/dagon.jpg'
import azatoth from '../../public/entities/azatoth.jpg'
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
                    <Tab>The Great Ones</Tab>
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
                            <Tab>Zo-Kalar</Tab>
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
                                        <p>Azatoth</p>
                                    </Col>
                                    <Col width={600}>
                                        <img src={azatoth} className="image" />
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
                                        <p>Azatoth</p>
                                    </Col>
                                    <Col width={600}>
                                        <img src={azatoth} className="image" />
                                    </Col>
                                </Row>
                            </Container>
                        </TabPanel>
                    </Tabs>
                </TabPanel>
                <TabPanel>
                    <Tabs defaultIndex={5}>
                        <TabList>
                            <Tab>Lobon</Tab>
                            <Tab>Nath-Horthath</Tab>
                            <Tab>Oukranos</Tab>
                            <Tab>Tamash</Tab>
                            <Tab>Zo-Kalar</Tab>
                            <Tab>Hagarg Ryonis</Tab>
                            <Tab>Karakal</Tab>
                        </TabList>
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
                    </Tabs>
                </TabPanel>
            </Tabs>
        </Layout>
    )
}