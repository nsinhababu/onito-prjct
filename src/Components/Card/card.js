import './card.css';
const Card = ({ obj }) => {
  return (
    <>
      <div className='crd-cntnr'>
        <p className='para'>{obj.date}</p>
        <p className='para'>{obj.amount}</p>
        <p className='para'>{obj.payment}</p>
        <p className='para'>{obj.remark}</p>
      </div>
    </>
  );
};

export default Card;
