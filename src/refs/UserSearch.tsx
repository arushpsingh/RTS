import { useEffect, useRef, useState } from "react";

const users = [
    { name: "Ram", age: 24 },
    { name: "Pratap", age: 26 },
    { name: "Aman", age: 34 },
];

const UserSearch = () => {
    const inputRef = useRef<HTMLInputElement | null>(null); 
    const [name, setname] = useState<string>('');
    const [user, setUser] = useState<{ name: String, age: number} | undefined>();

    useEffect(() => {
        if(!inputRef.current){
            return;
        }
        inputRef.current?.focus()
    }, [])

    const findUser = () => {
        const foundUser =  users.find((user) => {
            return user.name === name;
        })
        setUser(foundUser)
    }

    const onkeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter"){
            findUser();
        }
    }

    return(
        <div>
            User Search
            <input ref={inputRef} type="text" onKeyDown={(e) => onkeydown(e)} value={name} onChange={(e) => setname(e.target.value)} />
            <button onClick={findUser}>Find User</button>
            <div>
                {user ? (
                    <div>
                        <p>Name: {user.name}</p>
                        <p>Age: {user.age}</p>
                    </div>
                ) : (
                    <p>User not found</p>
                )}
            </div>
        </div>
    )
}

export default UserSearch;