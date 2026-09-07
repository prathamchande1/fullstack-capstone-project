require('dotenv').config();

const express = require('express');
const axios = require('axios');
const logger = require('./logger');
const expressPinoLogger = require('express-pino-logger');

const natural = require('natural');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(expressPinoLogger({ logger }));

// POST /sentiment
app.post('/sentiment', async (req, res) => {
  try {
    // Extract sentence from request body
    const { sentence } = req.body;

    // Check if sentence was provided
    if (!sentence) {
      logger.error('No sentence provided');

      return res.status(400).json({
        error: 'Sentence is required'
      });
    }

    // Analyze sentiment using Natural
    const analyzer = new natural.SentimentAnalyzer(
      'English',
      natural.PorterStemmer,
      'afinn'
    );

    const tokenizer = new natural.WordTokenizer();
    const tokens = tokenizer.tokenize(sentence);

    const analysisResult = analyzer.getSentiment(tokens);

    // Determine sentiment
    let sentiment = 'neutral';

    if (analysisResult < 0) {
      sentiment = 'negative';
    } else if (analysisResult >= 0 && analysisResult <= 0.33) {
      sentiment = 'neutral';
    } else {
      sentiment = 'positive';
    }

    logger.info({
      sentence,
      sentimentScore: analysisResult,
      sentiment
    }, 'Sentiment analysis successful');

    // Success response
    return res.status(200).json({
      sentimentScore: analysisResult,
      sentiment: sentiment
    });

  } catch (error) {
    logger.error(error, 'Sentiment analysis failed');

    // Error response
    return res.status(500).json({
      error: 'Failed to analyze sentiment'
    });
  }
});

app.listen(port, () => {
  logger.info(`Sentiment server running on port ${port}`);
});