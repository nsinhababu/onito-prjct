import InputComp from '../Components/InputComp/InputComp';

const Receipt = () => {
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setStudentData({ ...studentData, [name]: value });
  };

  return (
    <div>
      <InputComp type='text' label='Date' onChange={(e) => handleChange(e)} />
    </div>
  );
};

export default Receipt;
