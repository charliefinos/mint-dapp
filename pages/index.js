import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from "../components/Header"
import Mint from "../components/Mint"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Mint Dapp</title>
                <meta name="description" content="Minting Dapp" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Mint />
        </div>
    )
}
