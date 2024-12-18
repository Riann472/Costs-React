import styles from './Button.module.css'

export default function Button({ value }) {
    return (
        <div className={styles.button}>
            <input type="submit" value={value} />
        </div>
    )
}