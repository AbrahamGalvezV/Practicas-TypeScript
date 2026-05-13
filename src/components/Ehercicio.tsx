
import { useRef } from "react";

export default function App() {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        console.log(inputRef.current?.value)
    };

    return (
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          ref={inputRef}
        />
        <button>Enviar</button>
      </form>
    );
}






