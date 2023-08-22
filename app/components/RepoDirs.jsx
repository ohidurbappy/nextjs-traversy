
import Link from "next/link";
import { FaFolderOpen } from "react-icons/fa";



async function fetchRepoContents(name) {

    await new Promise((resolve)=>setTimeout(resolve,1000));



    const res = await fetch(`https://api.github.com/repos/ohidurbappy/${name}/contents`);
    const contents = await res.json();
    return contents;
}



const RepoDirs = async({name}) => {

    const contents = await fetchRepoContents(name);
    const dirs = contents.filter((content)=>content.type==='dir');


  return (
    <>
    <h3>Directories</h3>

    <ul>
        {
            dirs.map((dir)=>(
                <li key={dir.path}>
                    <Link href={`/code/repos/${name}/${dir.path}`}>
                    <FaFolderOpen/>&nbsp;
                    {dir.path}
                    </Link>
                </li>
            )
            )
        }
    </ul>
    
    </>
  )
}

export default RepoDirs