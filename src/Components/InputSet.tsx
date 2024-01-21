
interface InputSetProps {
    rows: number;
    cols: number;
}

const InputSet = ({ rows, cols }: InputSetProps) => {
    return (
      <div className="input-set">
        {Array.from({ length: rows }, (_, i) => (
          <div className="input-row m-2" key={i}>
            {Array.from({ length: cols }, (_, j) => (
              <input type="number" className="input min-w-10 max-w-16 border rounded-md m-2" key={j} />
            ))}
          </div>
        ))}
      </div>
    );
  };
  

export default InputSet