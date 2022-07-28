const InputComp = ({ onChange, name, label }) => {
  return (
    <div className='inp-cntnr'>
      <label htmlFor={name}>{label}</label>
      <div>
        <input
          onChange={(e) => {
            onChange(e);
          }}
          name={name}
          type='text'
          required
        />
      </div>
    </div>
  );
};
export default InputComp;
