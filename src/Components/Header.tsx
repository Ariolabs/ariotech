import styles from "@/Components/Header.module.scss"
export default function Header() {
  return (
    <header className={styles.header}>
        <a>Ario Technologies</a>
        <nav>
            <a href="#">plans</a>
            <a href="#">products</a>
            <a href="#">contact us</a>
            <a href="#">about us</a>
        </nav>
    </header>
  )
}
