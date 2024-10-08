

const Clipboard = () => {

    let navBlock = 'ssh agrodroid@192.168.10.10';

    return (
        <>
            <button onClick={() => navigator.clipboard.writeText(navBlock)}>ssh agrodroid@192.168.10.10</button>
        </>
    )
}

export default Clipboard;