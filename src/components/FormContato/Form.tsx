import {FormContainer, Input} from './styles';


export default function Form(){
     return (
         <FormContainer>
             <form>
                <Input placeholder="Nome" required />
                <Input placeholder="E-mail" type="email" required />
                <button type="submit">Enviar </button>
             </form>
             

         </FormContainer>
     )

}