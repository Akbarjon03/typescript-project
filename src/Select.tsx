import { styles } from "./Select.css";

type SelectOption = {
  label: string
  value: string
}

type SelectProps = {
  options: SelectOption[]
  value?: SelectOption
  onChange: (value: SelectOption | undefined) => void
}

export function Select({ value, onChange, options }: SelectProps) {
  return (
    <div className={styles.container}>
      <span className={sytles.value}>Value</span>
    </div>
  )
}