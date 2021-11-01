import { useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'

import { useForm, FormActions } from '../../contexts/FormContext'

import { Container, Buttons } from "./styles"

import { Theme } from "../../components/Theme"
import { SelectOption } from '../../components/SelectOption'

export const FormStep2 = () => {

    const history = useHistory()
    const { state, dispatch } = useForm()

    useEffect(() => {
        if (state.name === '') {
            history.push('/')
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            })
        }
    }, [])

    const handleNextStep = () => {
        history.push('/step3')
    }

    const handlePreviousStep = () => {
        history.push('/')
    }

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level,
        })
    }

    return (
        <Theme>
            <Container>
                <p>Passo 2/3</p>
                <h1>{state.name}, o que melhor descreve você?</h1>
                <p>Escolha a opção que melhor condiz com seu estado atual, profissionalmente.</p>

                <hr />

                <SelectOption
                    title="Sou iniciante"
                    description="Comecei a programar há menos de 2 anos"
                    icon="🥳"
                    selected={state.level === 0}
                    onClick={() => setLevel(0)}
                />
                <SelectOption
                    title="Sou programador"
                    description="Já programo há 2 anos ou mais"
                    icon="😎"
                    selected={state.level === 1}
                    onClick={() => setLevel(1)}
                />
                <Buttons>
                    <Link to='/' className="backButton">Voltar</Link>
                    {/* <button onClick={handlePreviousStep}>Anterior</button> */}
                    <button onClick={handleNextStep}>Próximo</button>
                </Buttons>
            </Container>
        </Theme>
    )
}