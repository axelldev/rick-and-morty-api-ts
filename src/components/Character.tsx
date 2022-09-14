import styles from '../styles/character.module.css'

export type character = {
  id: number
  name: string
  image: string
}

interface CharacterProps {
  character: character
}

function Character({ character }: CharacterProps) {
  return (
    <li className={styles.card}>
      <img src={character.image} alt={character.name} className={styles.img} />
      <div className={styles.cardBody}>
        <span className={styles.characterId}>#{character.id}</span>
        <span className={styles.characterName}>{character.name}</span>
      </div>
    </li>
  )
}

export default Character
