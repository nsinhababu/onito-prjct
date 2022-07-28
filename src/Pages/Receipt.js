import InputComp from '../Components/InputComp/InputComp';
import { useState } from 'react';

const Receipt = () => {
  const [recceiptData, setRecceiptData] = useState({});
  const [receiptList, setReceiptList] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRecceiptData({ ...recceiptData, [name]: value });
  };

  return (
    <div>
      <InputComp
        name='date'
        type='text'
        label='Date'
        onChange={(e) => handleChange(e)}
      />
      <InputComp
        name='amount'
        type='text'
        label='Amount'
        onChange={(e) => handleChange(e)}
      />
      <label htmlFor='payment'>Pamyment Mode</label>
      <select name='payment'>
        <option value=''>Cash</option>
        <option value=''>UPI</option>
        <option value=''>Card</option>
      </select>

      <InputComp
        name='remark'
        type='text'
        label='Remark'
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default Receipt;
