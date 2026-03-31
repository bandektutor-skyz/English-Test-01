const questions = [
  // --- 1-10: Tenses (Present, Past, Future) ---
  { "id": 1, "category": "English Grammar", "question": "I usually _______ to school by bus.", "options": ["go", "goes", "going", "went"], "answerIndex": 0 },
  { "id": 2, "category": "English Grammar", "question": "She _______ her breakfast at the moment.", "options": ["eat", "eats", "is eating", "ate"], "answerIndex": 2 },
  { "id": 3, "category": "English Grammar", "question": "They _______ to Japan last year.", "options": ["go", "gone", "went", "goes"], "answerIndex": 2 },
  { "id": 4, "category": "English Grammar", "question": "Listen! The baby _______.", "options": ["cries", "is crying", "cried", "cry"], "answerIndex": 1 },
  { "id": 5, "category": "English Grammar", "question": "I _______ my homework yet.", "options": ["haven't finished", "didn't finish", "don't finish", "finish"], "answerIndex": 0 },
  { "id": 6, "category": "English Grammar", "question": "Water _______ at 100 degrees Celsius.", "options": ["boil", "boils", "boiling", "boiled"], "answerIndex": 1 },
  { "id": 7, "category": "English Grammar", "question": "We _______ a movie when the phone rang.", "options": ["watch", "watched", "were watching", "are watching"], "answerIndex": 2 },
  { "id": 8, "category": "English Grammar", "question": "Tomorrow, I think it _______ rain.", "options": ["will", "is", "was", "going to"], "answerIndex": 0 },
  { "id": 9, "category": "English Grammar", "question": "How long _______ you lived in this city?", "options": ["do", "did", "have", "are"], "answerIndex": 2 },
  { "id": 10, "category": "English Grammar", "question": "By the time he arrived, the train _______.", "options": ["leaves", "has left", "had left", "left"], "answerIndex": 2 },

  // --- 11-20: Parts of Speech (Nouns, Pronouns, Adjectives, Adverbs) ---
  { "id": 11, "category": "English Grammar", "question": "The cat is sleeping on _______ bed.", "options": ["it", "its", "it's", "they"], "answerIndex": 1 },
  { "id": 12, "category": "English Grammar", "question": "This is the _______ car I have ever seen.", "options": ["expensive", "more expensive", "most expensive", "expensively"], "answerIndex": 2 },
  { "id": 13, "category": "English Grammar", "question": "He runs _______ to catch the bus.", "options": ["quick", "quickly", "quicker", "quickest"], "answerIndex": 1 },
  { "id": 14, "category": "English Grammar", "question": "There are _______ books on the table.", "options": ["much", "any", "some", "a little"], "answerIndex": 2 },
  { "id": 15, "category": "English Grammar", "question": "I don't have _______ money in my pocket.", "options": ["some", "any", "many", "few"], "answerIndex": 1 },
  { "id": 16, "category": "English Grammar", "question": "_______ is my favorite subject.", "options": ["English", "Englishes", "An English", "The English"], "answerIndex": 0 },
  { "id": 17, "category": "English Grammar", "question": "She is a _______ girl.", "options": ["beautifully", "beauty", "beautiful", "beauties"], "answerIndex": 2 },
  { "id": 18, "category": "English Grammar", "question": "Whose bag is this? It's _______.", "options": ["me", "my", "mine", "myself"], "answerIndex": 2 },
  { "id": 19, "category": "English Grammar", "question": "We should help _______.", "options": ["each other", "themselves", "ourselves", "him"], "answerIndex": 0 },
  { "id": 20, "category": "English Grammar", "question": "He speaks English _______ than his brother.", "options": ["good", "well", "better", "best"], "answerIndex": 2 },

  // --- 21-30: Prepositions & Conjunctions ---
  { "id": 21, "category": "English Grammar", "question": "The book is _______ the table.", "options": ["in", "on", "at", "under"], "answerIndex": 1 },
  { "id": 22, "category": "English Grammar", "question": "I go to work _______ 8 o'clock.", "options": ["in", "on", "at", "by"], "answerIndex": 2 },
  { "id": 23, "category": "English Grammar", "question": "He was born _______ 1995.", "options": ["in", "on", "at", "since"], "answerIndex": 0 },
  { "id": 24, "category": "English Grammar", "question": "I am interested _______ learning English.", "options": ["on", "at", "in", "about"], "answerIndex": 2 },
  { "id": 25, "category": "English Grammar", "question": "She is good _______ playing guitar.", "options": ["at", "in", "with", "for"], "answerIndex": 0 },
  { "id": 26, "category": "English Grammar", "question": "I was late _______ the traffic was heavy.", "options": ["but", "so", "because", "although"], "answerIndex": 2 },
  { "id": 27, "category": "English Grammar", "question": "He is rich _______ he is not happy.", "options": ["and", "but", "or", "because"], "answerIndex": 1 },
  { "id": 28, "category": "English Grammar", "question": "You can have tea _______ coffee.", "options": ["but", "and", "or", "so"], "answerIndex": 2 },
  { "id": 29, "category": "English Grammar", "question": "_______ it was raining, we went out.", "options": ["Because", "Although", "If", "When"], "answerIndex": 1 },
  { "id": 30, "category": "English Grammar", "question": "Wait here _______ I come back.", "options": ["until", "since", "for", "while"], "answerIndex": 0 },

  // --- 31-40: Modal Verbs & Passive Voice ---
  { "id": 31, "category": "English Grammar", "question": "You _______ wear a helmet when riding a motorcycle.", "options": ["can", "may", "must", "might"], "answerIndex": 2 },
  { "id": 32, "category": "English Grammar", "question": "_______ I use your pen, please?", "options": ["Must", "May", "Should", "Will"], "answerIndex": 1 },
  { "id": 33, "category": "English Grammar", "question": "He _______ swim when he was five.", "options": ["can", "could", "must", "should"], "answerIndex": 1 },
  { "id": 34, "category": "English Grammar", "question": "The window _______ by the boy yesterday.", "options": ["broke", "is broken", "was broken", "is breaking"], "answerIndex": 2 },
  { "id": 35, "category": "English Grammar", "question": "English _______ all over the world.", "options": ["speaks", "is spoken", "is speaking", "spoke"], "answerIndex": 1 },
  { "id": 36, "category": "English Grammar", "question": "Rice _______ in Thailand.", "options": ["grow", "grows", "is grown", "is growing"], "answerIndex": 2 },
  { "id": 37, "category": "English Grammar", "question": "You _______ smoke in the hospital.", "options": ["mustn't", "don't have to", "can", "might"], "answerIndex": 0 },
  { "id": 38, "category": "English Grammar", "question": "I _______ go to the party if I'm tired.", "options": ["won't", "don't", "am not", "wasn't"], "answerIndex": 0 },
  { "id": 39, "category": "English Grammar", "question": "They _______ be at home; the lights are off.", "options": ["must", "can't", "should", "may"], "answerIndex": 1 },
  { "id": 40, "category": "English Grammar", "question": "This bridge _______ in 1990.", "options": ["built", "was built", "is built", "builds"], "answerIndex": 1 },

  // --- 41-50: Conditional Sentences (If-Clause) & Question Tags ---
  { "id": 41, "category": "English Grammar", "question": "If it rains, we _______ stay at home.", "options": ["stay", "will stay", "would stay", "stayed"], "answerIndex": 1 },
  { "id": 42, "category": "English Grammar", "question": "If I _______ you, I would tell the truth.", "options": ["am", "was", "were", "be"], "answerIndex": 2 },
  { "id": 43, "category": "English Grammar", "question": "If I had more money, I _______ a new car.", "options": ["buy", "will buy", "would buy", "bought"], "answerIndex": 2 },
  { "id": 44, "category": "English Grammar", "question": "You are a student, _______?", "options": ["are you", "aren't you", "do you", "don't you"], "answerIndex": 1 },
  { "id": 45, "category": "English Grammar", "question": "He can speak English, _______?", "options": ["can he", "can't he", "does he", "doesn't he"], "answerIndex": 1 },
  { "id": 46, "category": "English Grammar", "question": "She doesn't like coffee, _______?", "options": ["does she", "doesn't she", "is she", "isn't she"], "answerIndex": 0 },
  { "id": 47, "category": "English Grammar", "question": "They went to the park, _______?", "options": ["do they", "don't they", "did they", "didn't they"], "answerIndex": 3 },
  { "id": 48, "category": "English Grammar", "question": "_______ you ever been to London?", "options": ["Do", "Did", "Have", "Are"], "answerIndex": 2 },
  { "id": 49, "category": "English Grammar", "question": "I don't know _______ he is.", "options": ["who", "what", "where", "when"], "answerIndex": 0 },
  { "id": 50, "category": "English Grammar", "question": "He is the man _______ lives next door.", "options": ["who", "which", "whose", "whom"], "answerIndex": 0 }
];
