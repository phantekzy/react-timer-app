/**
 * @param {string} value - Current value of the input
 * @param {string} placeholder - Placeholder text
 * @param {(value: string) => void} onChange - Callback when input changes
 */
export function Input({ value, placeholder, onChange }) {
  return (
    <input
      type="text"
      className="form-control"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}

