from sklearn.metrics.pairwise import (
    cosine_similarity
)

from models.model_loader import (
    embedding_model
)


def calculate_similarity(

    claim,

    evidence
):

    claim_embedding = (
        embedding_model.encode(
            claim
        )
    )

    evidence_embedding = (
        embedding_model.encode(
            evidence
        )
    )

    similarity = cosine_similarity(

        [claim_embedding],

        [evidence_embedding]
    )[0][0]

    return float(similarity)