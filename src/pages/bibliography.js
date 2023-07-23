import * as React from "react"
import Layout from "../components/layout"
import * as styles from "../styles/bibliography.module.css"
import StepperTimeline from "../components/timeline"

export default function Bibliography() {
    return (
        <Layout>
            <div>
                <h1 className={styles.header}>Howard Philips Lovecraft's Bibliography</h1>
            </div>
            <div className={styles.timeline}>
                <StepperTimeline>
                    
                </StepperTimeline>
            </div>
        </Layout>
    )
}