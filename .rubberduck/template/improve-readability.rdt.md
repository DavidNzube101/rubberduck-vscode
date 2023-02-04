```json conversation-template
{
  "id": "improve-readability",
  "engineVersion": 0,
  "type": "selected-code-analysis-chat",
  "label": "Improve Readability",
  "description": "Improve the readability of the selected code.",
  "icon": {
    "type": "codicon",
    "value": "symbol-color"
  },
  "initVariableRequirements": [
    {
      "type": "non-empty-text",
      "variable": "selectedText"
    },
    {
      "type": "non-empty-text",
      "variable": "language"
    }
  ],
  "analysisPlaceholder": "Looking for readability improvements",
  "analysisPrompt": {
    "sections": [
      {
        "type": "lines",
        "title": "Instructions",
        "lines": [
          "How could the readability of the code below be improved?",
          "The programming language is ${language}.",
          "Consider overall readability and idiomatic constructs."
        ]
      },
      {
        "type": "optional-selected-code",
        "title": "Selected Code"
      },
      {
        "type": "lines",
        "title": "Task",
        "lines": [
          "How could the readability of the code be improved?",
          "The programming language is ${language}.",
          "Consider overall readability and idiomatic constructs.",
          "Provide potential improvements suggestions where possible.",
          "Consider that the code might be perfect and no improvements are possible.",
          "Include code snippets (using Markdown) and examples where appropriate.",
          "The code snippets must contain valid ${language} code."
        ]
      },
      {
        "type": "lines",
        "title": "Readability Improvements",
        "lines": []
      }
    ],
    "maxTokens": 1024
  },
  "chatTitle": "Improve Readability",
  "chatPrompt": {
    "sections": [
      {
        "type": "lines",
        "title": "Instructions",
        "lines": [
          "Continue the conversation below.",
          "Pay special attention to the current developer request.",
          "The programming language is ${language}."
        ]
      },
      {
        "type": "lines",
        "title": "Current Request",
        "lines": ["Developer: ${lastMessage}"]
      },
      {
        "type": "optional-selected-code",
        "title": "Selected Code"
      },
      {
        "type": "lines",
        "title": "Potential Readability Improvements",
        "lines": ["${firstMessage}"]
      },
      {
        "type": "conversation",
        "excludeFirstMessage": true,
        "roles": {
          "bot": "Bot",
          "user": "Developer"
        }
      },
      {
        "type": "lines",
        "title": "Task",
        "lines": [
          "Write a response that continues the conversation.",
          "Stay focused on current developer request.",
          "Consider the possibility that there might not be a solution.",
          "Ask for clarification if the message does not make sense or more input is needed.",
          "Use the style of a documentation article.",
          "Omit any links.",
          "Include code snippets (using Markdown) and examples where appropriate.",
          "The code snippets must contain valid ${language} code."
        ]
      },
      {
        "type": "lines",
        "title": "Response",
        "lines": ["Bot:"]
      }
    ],
    "maxTokens": 1024,
    "stop": ["Bot:", "Developer:"]
  }
}
```