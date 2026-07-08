import { useState } from 'react';
export default function App() {
    const [f, setF] = useState({ name: '', email: '', message: '' });
    const [s, setS] = useState(null);
    return (<div><input placeholder='Name' onChange={e => setF({ ...f, name: e.target.value })} />
        <input placeholder='Email' onChange={e => setF({ ...f, email: e.target.value })} />
        <textarea onChange={e => setF({ ...f, message: e.target.value })} />
        <button onClick={() => setS(f)}>Submit</button>
        {s && <pre>{JSON.stringify(s, null, 2)}</pre>}
    </div>);
}