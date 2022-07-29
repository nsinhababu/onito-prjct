import './inputcomp.css';
const InputComp = ({ onChange, name, label, className }) => {
  return (
    <div className='inp-cntnr'>
      <label htmlFor={name}>{label}</label>
      <div className='inp-box'>
        <input
          className={className}
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
