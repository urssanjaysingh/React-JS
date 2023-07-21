const Content = () => {
    const handleNameChange = () => {
        const names = ['Sanjay', 'Akash', 'Shivam', 'Monu'];
        const int = Math.floor(Math.random() * 4);
        return names[int];
    }

    const handleClick = (e) => {
        console.log(e.target.innerText)
    }

    return (
        <main>
            <p>
                Hello {handleNameChange()}!
            </p>
            <button onClick={(e) => handleClick(e)}>Click It</button>
        </main>
    )
}

export default Content