import styles from '../styles/characters.module.css'

interface CardProps {
  children: any
}

const Characters = ({ children }: CardProps) => {
  return (
    <div>
      <ul className={styles.characters}>{children}</ul>
    </div>
  )
}

export default Characters
