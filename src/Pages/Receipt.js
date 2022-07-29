import InputComp from '../Components/InputComp/InputComp';
import { useState, useRef } from 'react';
import Card from '../Components/Card/card';
import './receipt.css';

const Receipt = () => {
  const [recceiptData, setRecceiptData] = useState({
    date: '',
    amount: '',
    payment: 'Cash',
    remark: '',
  });
  const [receiptList, setReceiptList] = useState([]);

  const formRef = useRef();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRecceiptData({ ...recceiptData, [name]: value });
  };

  const handleSubmit = () => {
    setReceiptList([...receiptList, recceiptData]);
    setRecceiptData({});
    formRef.current.reset();
  };
  const handleCancel = () => {
    setRecceiptData({});
    formRef.current.reset();
  };

  const handleKeyDown = (e) => {
    e.preventDefault();
    let charCode = String.fromCharCode(e.which).toLowerCase();
    if ((e.ctrlKey || e.metaKey) && charCode === 's') handleSubmit();
    if (e.key === 'Escape') handleCancel();
  };

  return (
    <div className='cntnr'>
      <form
        onKeyDown={(e) => {
          handleKeyDown(e);
        }}
        className='form'
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        action=''
      >
        <InputComp
          name='date'
          type='text'
          label='Date'
          onChange={(e) => handleChange(e)}
          className='sm'
        />
        <InputComp
          name='amount'
          type='text'
          label='Amount'
          onChange={(e) => handleChange(e)}
          className='lg'
        />
        <div className='select-box'>
          <label htmlFor='payment'>Pamyment Mode</label>
          <div className='select-wrpr'>
            <select
              className='mode'
              onChange={(e) => handleChange(e)}
              name='payment'
            >
              <option value='Cash'>Cash</option>
              <option value='UPI'>UPI</option>
              <option value='Card'>Card</option>
            </select>
          </div>
        </div>

        <InputComp
          name='remark'
          type='text'
          label='Remark'
          onChange={(e) => handleChange(e)}
          className='lg'
        />

        <div className='btn-cntnr'>
          <button onClick={handleCancel} type='button'>
            Cancel
          </button>
          <button type='submit'>Submit</button>
        </div>
      </form>

      <div className='list-cntnr'>
        {!receiptList.length
          ? null
          : receiptList.map((rcpt) => {
              return (
                <Card
                  key={Math.floor(Math.random() * 1000 * +rcpt.amount)}
                  obj={rcpt}
                />
              );
            })}
      </div>
    </div>
  );
};

export default Receipt;
