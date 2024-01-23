import type { Matrix } from "@/util/Matrix";

interface InputSetProps {
    rows: number;
    cols: number;
    value?: Matrix;
}

const InputSet = ({ rows, cols }: InputSetProps) => {
    return (
      <div className="input-set">
        {Array.from({ length: rows }, (_, i) => (
          <div className="input-row" key={i}>
            {Array.from({ length: cols }, (_, j) => (
              <input type="number" className="input min-w-10 max-w-16 border text-sm p-1 text-center rounded-md m-1" key={j} min={-999} max={999} />
            ))}
          </div>
        ))}
      </div>
    );
  };
  

export default InputSet