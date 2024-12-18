import Input from '../form/Input'
import Select from '../form/Select'
import Button from '../form/Button'


export default function ProjectForm({btnText}) {
    return (
        <>
            <Input name="nome_projeto" text="Nome do projeto:" placeholder="Insira o nome do projeto" />
            <Input name="orcamento_projeto" text="Orçamento do projeto:" placeholder="Insira o orçamento total" />
            <Select name="categoria_projeto" text="Selecione a categoria" />
            <Button value={btnText} />
        </>
    )
}