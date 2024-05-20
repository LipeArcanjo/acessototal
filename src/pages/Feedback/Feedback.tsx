import { useEffect, useState } from "react";
import { Layout } from "../../components/Layout/Layout";
import { feedbackReactionList } from "../../mocks/feedbackReaction";
import { FeedbackBox, FeedbackForms, FeedbackReaction, FeedbackText } from "./Feedback.style";
import { FeedbackCard } from "../../components/FeedbackCard/FeedbackCard";
import { Button } from "../../components/Button/Button";

interface FeedbackReactionType {
    text: string;
    emoji: string;
}

export default function Feedback() {

    const [reactions, setReactions] = useState<FeedbackReactionType[]>([]);
    const [feedbackInput, setFeedbackInput] = useState('');

    useEffect(() => {
        setReactions(feedbackReactionList);
    }, []);

    // Armazenando o "feedback" do usuário
    const handleChange = (event: any) => {
        setFeedbackInput(event.target.value);
    };

    // Exibir no console!
    const handleClick = () => {
        console.log(feedbackInput);
        setFeedbackInput(''); // <- Pra limpar o conteudo toda vez que o usuário apertar o botão!!
    }

    return (
        <Layout>
            <FeedbackBox>
                <FeedbackText>
                    <p>Sua avaliação garante a melhoria do nosso serviço.</p>
                    <p>
                        <span>Agora é com você!</span>
                    </p>
                </FeedbackText>
                <FeedbackReaction>
                    {reactions.map((reaction, index) => (
                        <FeedbackCard key={index}>
                            <h1>{reaction.text}</h1>
                            <span>{reaction.emoji}</span>
                        </FeedbackCard>
                    ))}
                </FeedbackReaction>
                <FeedbackText>
                    <h2>Quais são os pensamentos que você gostaria de compartilhar?</h2>
                </FeedbackText>
                <FeedbackForms>
                    <textarea value={feedbackInput} onChange={handleChange}/>
                </FeedbackForms>
                <Button variant="info" onClick={handleClick}>
                    Enviar Solicitação
                </Button>
            </FeedbackBox>
        </Layout>
    );
}