import * as React from 'react'


type Props = {
  label: string,
  count: number,
  onIncrement: () => void
}

const Counter: React.FC<Props> = (props) => {
    const { label, count, onIncrement } = props;

    const handleOnIncrement = () => {
      onIncrement()
    }

    return(
      <>
        <span>
          {label}: {count}
        </span>
        <button onClick={handleOnIncrement}>
          Increment
        </button>
      </>
    )
}
