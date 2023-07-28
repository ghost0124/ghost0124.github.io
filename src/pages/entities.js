import * as React from "react"
import Layout from "../components/layout"
import * as styles from "../styles/entities.module.css"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { Container, Row, Col } from 'react-grid-system';
import 'react-tabs/style/react-tabs.css'
import cthulhu from '../../public/entities/cthulhu-image.jpg'
import yog from '../../public/entities/yog.jpeg'
import dagon from '../../public/entities/dagon.jpg'


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
                    </Tabs>
                </TabPanel>
            </Tabs>
        </Layout>
    )
}