import React, { useState } from 'react';

const Greeting = () => {
  const [locale, setLocale] = React.useState('id');

  const changeToId = () => setLocale('id');
  const changeToEn = () => setLocale('en');


   // counter
   const [count, setCount] = useState(0);
   const [message, setMessage] = useState('');
   const increament = () => setCount((prevCount) => prevCount +1);
  //  const decreament = () => setCount((prevCount) => prevCount -1);
// !Jika sudah nol tidak bisa di kutangin
const decreament = () => {
  if (count >0) {
    setCount((prevCount) => prevCount -1);
    setMessage('');
  }
  else {
    setMessage('Tidak boleh kurang dari nol');
  }
}


  return (
    <div>
      {locale === 'id' ? (
        <>
        <p>Selamat Pagi</p>
        <button onClick={changeToEn}> Translate</button>
        </>
      ) : (
        <>
        <p> Good Morning </p>
        <button onClick={changeToId}> Terjemahkan </button>
        </>
      )
    
    }

    <>
    <p>{count}</p>
    <button onClick={increament}>+</button>
    <button onClick={decreament}>-</button>
    {message && <p style={{color: 'red'}}>{message}</p>}
    </>
    </div>
  );
}

export default Greeting;