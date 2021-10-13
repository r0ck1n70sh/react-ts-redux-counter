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
        <span>
          {label}: {count}
        </span>
        <button onClick={() => handleOnIncrement(1)}>
          +1
        </button>
      </>
    )
}

export default Counter;
