import * as React from 'react'
import Counter from '../Components/Counter'


const CounterPage: React.FC = () => {
  const label: string = 'count';
  const timeout: number = 3000; //ms

  const [ value, setValue ] = React.useState<number>(0);
  const [ message, setMessage ] = React.useState<string>('');

  const handleIncrement = (incrementAmount: number): void => {
    if (incrementAmount > 0)  {
      setValue((value) => (value + incrementAmount))
    }

    setMessage(`count`)
    setTimeout(() => {
        setMessage('')
    }, timeout);
  }

  const renderMessage = (): JSX.Element => {
    return ( message.length > 0 ) ? (
      <>
        { message }
      </>
    ) : (
      <>
        { `click to increase ${label}, by some amount ` }
      </>
    )
  }

  return(
    <>
      { renderMessage() }
      <Counter
        label={label}
        count={value}
        onIncrement={handleIncrement}
      />
    </>
  )

}

export default CounterPage;
