import * as React from 'react'


type Props = {
  label: string,
  count: number,
  onIncrement: (amount: number) => void
}

const Counter: React.FC<Props> = (props) => {
    const { label, count, onIncrement } = props;

    const handleOnIncrement = (amount: number): void => {
      onIncrement(amount)
    }

    return(
      <>
        <span
          style={{
            padding: '0.5rem'
          }}>
          {label}: {count}
        </span>
        <button onClick={() => handleOnIncrement(1)}>
          +1
        </button>
      </>
    )
}

export default Counter;
