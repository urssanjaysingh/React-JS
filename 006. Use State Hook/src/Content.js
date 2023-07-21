import { useState } from "react";

const Content = () => {
    const [name, setName] = useState('Sanjay');
    const [count, setCount] = useState(0);

    const handleNameChange = () => {
        const names = ['Sanjay', 'Akash', 'Shivam', 'Monu'];
        const int = Math.floor(Math.random() * 4);
        setName(names[int]);
    }

    const handleClick = () => {
        setCount(count + 1)
        setCount(count + 1)
        console.log(count)
    }

    return (
        <main>
            <p>
                Hello {name}!
            </p>
            <button onClick={handleNameChange}>Change Name</button>
            <button onClick={handleClick}>Click It</button>
        </main>
    )
}

export default Content