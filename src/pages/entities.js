import * as React from "react"
import Layout from "../components/layout"
import * as styles from "../styles/entities.module.css"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css';

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
                        <TabList>
                            <Tab>Cthulhu</Tab>  
                            <Tab>Yogsototh</Tab>
                        </TabList>
                        <TabPanel>
                            Cthulhu entity
                        </TabPanel>
                        <TabPanel>
                            Yogsototh entity
                        </TabPanel>
                    </Tabs>
                </TabPanel>
            </Tabs>
        </Layout>
    )
}