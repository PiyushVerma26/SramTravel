export default function LabelInput({
  input,
  error,
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
        <div className='flex flex-col lg:flex-row lg:justify-between'>
          {labelText ? <span className=''>{labelText}</span> : null}
          {error ? <span className='text-red-500 text-sm lg:flex lg:items-center animate-jiggle'>{error}</span> : null}
        </div>
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
