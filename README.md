# TruthArchive 🕵️‍♂️🔍

**TruthArchive** is an advanced fake news detection web application designed to help users verify the authenticity of news claims. It uses modern Natural Language Processing (NLP) techniques, multi-source fact-checking, and credibility scoring to provide an accurate verdict on the truthfulness of a statement.

## 🌟 Features

- **Automated Fact-Checking**: Extracts core claims from user queries and cross-references them against reliable sources.
- **Multi-Source Evidence**: Searches through news engines (like DDGS) and Wikipedia to gather high-quality evidence.
- **Similarity & Contradiction Analysis**: Compares the provided claim against retrieved articles to detect whether sources support or contradict the claim.
- **Credibility Scoring**: Automatically filters out low-quality information by evaluating the credibility of the source.
- **Intelligent Verdict Generation**: Generates a final conclusion (e.g., True, False, Misleading, Inconclusive) along with a confidence score and the top evidence sources used.
- **Modern UI**: A responsive, fast, and interactive frontend built with Next.js, Tailwind CSS, and Framer Motion.

## 🏗️ Architecture

The project is structured into two main components:

### Backend (`/backend`)
A high-performance REST API built with **FastAPI**. It handles all the heavy lifting:
- Claim extraction and query expansion
- Integration with search engines (News, Wikipedia, GDELT)
- NLP-based similarity and contradiction detection
- Ranking algorithms and verdict generation

### Frontend (`/frontend`)
A modern user interface built using **Next.js 16** and **React 19**.
- Styled with **Tailwind CSS** for a clean, responsive design.
- Animated using **Framer Motion** and **GSAP** for a smooth user experience.
- Uses `lucide-react` for beautiful icons.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- Python (3.9 or higher)

### 1. Setting up the Backend
Navigate to the `backend` directory and set up the Python environment:
```bash
cd backend
python -m venv .venv
# Activate the virtual environment
# Windows:
.venv\Scripts\activate
# Mac/Linux:
source .venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run the FastAPI server
uvicorn main:app --reload
```
The backend API will be available at `http://localhost:8000`.

### 2. Setting up the Frontend
Navigate to the `frontend` directory and install the required NPM packages:
```bash
cd frontend
npm install

# Start the Next.js development server
npm run dev
```
The web application will be available at `http://localhost:3000`.

## 🛠️ Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS, Framer Motion, GSAP
- **Backend**: Python, FastAPI
- **Fact-Checking Services**: DuckDuckGo Search (DDGS), Wikipedia API, Custom NLP modules (Similarity & Contradiction scoring)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.
