import { useState } from 'react'
import { Hibauzenet } from './Hibauzenet';

export function Main(){
    const[ password, setpassword] = useState('')
    const patern = /[0-9]/;
    const test = !patern.test(password)

    return <main>
      <input type="password" onInput={e => {setpassword(e.currentTarget.value)}}/>
      <p>Az aktuális jelszó erősége:</p>
      <Hibauzenet hibauzenetek = {password.length<8 || test ? ['A jelszó nem elég biztonságos']: []} biztonsagose = {password.length>8 && test} menyirenembiz={password.length>8}/>
    </main>;
}