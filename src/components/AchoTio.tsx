interface Props {
    title: string;
    id: number;
}

const AchoTio = ({ title, id }: Props) => {

    return ( 
    <li>
        {title} - {id}
    </li>
    )
}

export default AchoTio