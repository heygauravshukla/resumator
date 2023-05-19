import styles from "./Header.module.css"

function Header() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h1 className={styles.heading}>
            A <span>Resume</span> that stands out! Make your own.
            <span> It's free!</span>
          </h1>
        </div>
        <div className={styles.right}>
          <img src="/resume.jpg" alt="Resume image" />
        </div>
      </div>
    </section>
  )
}

export default Header
