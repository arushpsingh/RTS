import { useState } from "react"

const users = [
    { name: "Ram", age: 20 },
    { name: "Arush", age: 24 },
    { name: "Vikas", age: 29 },
]

const UserSearch: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [user, setUser] = useState<{ name: string, age: number} | undefined>();

    const onClick = () => {
        const foundUser = users.find((user) => {
            return user.name === name;
        })
        setUser(foundUser);
    }

    const onkeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter"){
            onClick();
        }
    }

    return(
        <div>
            User Search
            <input type="text" onKeyDown={(e) => onkeydown(e)} value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={onClick}>Find User</button>
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

export default UserSearch