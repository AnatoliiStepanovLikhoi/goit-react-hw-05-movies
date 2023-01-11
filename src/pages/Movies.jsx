import { useState } from 'react';

export default function Movies() {
  const [inputRequest, setInputRequest] = useState('');

  const onInputSubmit = event => {
    event.preventDefault();

    console.log(inputRequest);
  };

  const onInputUpdate = ({ target }) => {
    setInputRequest(target.value);

    // console.log(target.value);
  };

  return (
    <>
      <form onSubmit={onInputSubmit}>
        <label>
          <input type="text" name="findMovie" onChange={onInputUpdate} />
        </label>
        <button type="submit">Search</button>
      </form>
    </>
  );
}
