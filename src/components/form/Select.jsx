import styles from './Select.module.css'

export default function Select({ text, name, options, onChangeHandler, value }) {
    return (
        <div className={styles.select_cont}>
            <label htmlFor={name}>{text}</label>
            <select name={name} onChange={onChangeHandler} value={value} >
                <option value="" selected disabled>Selecione uma opção</option>
            </select>
        </div>
    )
}