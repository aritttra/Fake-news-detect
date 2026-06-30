from sentence_transformers import (
    SentenceTransformer
)

from transformers import pipeline

# =====================================
# EMBEDDING MODEL
# =====================================

embedding_model = SentenceTransformer(
    "sentence-transformers/all-mpnet-base-v2"
)

# =====================================
# FACT VERIFICATION MODEL
# =====================================

nli_pipeline = pipeline(

    "text-classification",

    model=(
        "MoritzLaurer/"
        "DeBERTa-v3-large-"
        "mnli-fever-anli-ling-wanli"
    ),

    top_k=None
)