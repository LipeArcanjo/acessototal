import { useEffect, useState } from "react";
import { Layout } from "../../components/Layout/Layout";
import { feedbackReactionList } from "../../mocks/feedbackReaction";
import { FeedbackBox, FeedbackReaction, FeedbackText } from "./Feedback.style";
import { FeedbackCard } from "../../components/FeedbackCard/FeedbackCard";

export default function Feedback() {

    const [reactions, setReactions] = useState([]);

    useEffect(() => {
        setReactions(feedbackReactionList);
    }, []);


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
            </FeedbackBox>
        </Layout>
    );
}