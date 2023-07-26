import * as React from "react"
import Layout from "../components/layout"
import * as styles from "../styles/entities.module.css"
import ListGroup from 'react-bootstrap/ListGroup';

export default function Entities() {
    return (
        <Layout>
            <div>
                <h1 className={styles.header}>Cthulhu Mythos Entities</h1>
                <ListGroup horizontal>
                    <ListGroup.Item>Cthulhu</ListGroup.Item>
                    <ListGroup.Item>Cthulhu</ListGroup.Item>
                    <ListGroup.Item>Cthulhu</ListGroup.Item>
                    <ListGroup.Item>Cthulhu</ListGroup.Item>
                </ListGroup>
            </div>
        </Layout>
    )
}