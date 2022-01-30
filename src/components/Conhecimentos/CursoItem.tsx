import { CursoContainer } from "./styles";

interface CursoProps {
    title: string;
    org: string;
    description: string;
}

export default function CursoItem ({title, org, description}: CursoProps) {

    return(

        <CursoContainer>
            <div>
                <h1>
                    {title}
                </h1>
                <h2>
                    {org}
                </h2>
                <p>
                    {description}
                </p>
            </div>
        </CursoContainer>

    )

}