export default function LabelInput({
  input,
  onChange,
  labelStyles,
  inputStyles,
  labelText,
  inputPlaceholder,
  onClick,
  isReadOnly = false,
}) {
  return (
    <label onClick={onClick}>
      <div className={`flex flex-col text-black bg-white px-4 py-2 ${labelStyles}`}>
        {labelText ? <span>{labelText}</span> : null}
        <input
          type='text'
          placeholder={inputPlaceholder ? inputPlaceholder : ''}
          value={input}
          onChange={onChange ? onChange : null}
          readOnly={isReadOnly}
          className={`text-ellipsis ${inputStyles ? inputStyles : ''}`}
        />
      </div>
    </label>
  )
}
