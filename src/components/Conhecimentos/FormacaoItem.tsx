import { FormacaoContainer } from "./styles";

interface FormacaoProps {
    title: string;
    year: string;
    description: string;
}

export default function FormacaoItem({title, year, description}: FormacaoProps) {

    return(
        <FormacaoContainer>
            <div>
                <h1>
                    {title}

                </h1>
                <h2>
                    {year}
                </h2>
                <p>
                    {description}
                </p>
            </div>

        </FormacaoContainer>
    )
}