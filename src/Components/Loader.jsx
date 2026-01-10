import Image from "next/image";

export default function Loader(){
    return(
        <Image src={'/loader.gif'} height={50} width={50} alt="loader"/>
    )
}