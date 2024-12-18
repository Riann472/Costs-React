import styles from './Input.module.css'

export default function Input({ type, text, placeholder, name, onChangeHandler, value, }) {
    return (
        <div className={styles.input_cont}>
            <label htmlFor={name}>{text}</label>
            <input type={type} placeholder={placeholder} name={name} onChange={onChangeHandler} value={value} />
        </div>
    )
}