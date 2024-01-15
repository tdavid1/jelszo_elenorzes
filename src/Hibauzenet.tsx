interface passwordProps {
  biztonsagose: boolean;
  menyirenembiz: boolean;
  hibauzenetek: string[];
}
export function Hibauzenet(props: passwordProps) {
  return <ul className={props.biztonsagose ? 'Biztonsagos' : ''}
    style={{ color: props.menyirenembiz ? 'orange' : 'red' }}>
    {props.hibauzenetek.map(msg => <li>{msg}</li>)}
  </ul>;
}
