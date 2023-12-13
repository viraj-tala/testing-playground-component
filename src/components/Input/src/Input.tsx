import classNames from 'classnames'

export const Input = ({
  type,
  placeholder,
  value,
  onChange,
  className,
}: {
  type: string
  placeholder: string
  value: string
  onChange: () => void
  className: string
}) => {
  return (
    <div>
      <input
        className={classNames('w-full', className)}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
