function TextArea({ value, id, placeholder, name, setDataInput, className, label }) {
  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    const inputName = ev.target.name;
    setDataInput(inputValue, inputName);
  };
  return (
    <label className="label">{label}
    <textarea
      className={className}
      type="text"
      placeholder={placeholder}
      required
      name={name}
      id={id}
      value={value}
      onChange={handleInput}
    />
    </label>
  );
}

export default TextArea;
