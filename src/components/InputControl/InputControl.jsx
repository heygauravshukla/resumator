import "./InputControl.css"

function InputControl({ label, ...props }) {
  return (
    <div className="container">
      {label && <label>{label}</label>}
      <input type="text" {...props} />
    </div>
  )
}

export default InputControl
