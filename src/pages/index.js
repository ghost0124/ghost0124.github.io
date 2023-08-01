import * as React from "react"
import Layout from "../components/layout"
import * as styles from "../styles/home.module.css"
import lovecraft from '../../public/lovecraft.jpg'

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
          <div>
            <h1>Home</h1>
            <h3>
              "The oldest and strongest emotion of mankind is fear, and the oldest and strongest kind of fear is fear of the unknown."
            </h3>
            <h3>
              "The most merciful thing in the world... is the inability of the human mind to correlate all its contents."
            </h3>
          </div>
          <div>
            <img className="image" src={lovecraft} />
          </div>
      </section>
    </Layout>
  )
}

