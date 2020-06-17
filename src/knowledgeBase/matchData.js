const matchData = [
  {
    id: 1,
    personalityType: ["INTP", "INTJ"],
    type: "Ideal match",
    description:
      "The Architect (INTJ) tends to be a perfectionist, and at the core, values rules, order, and planning. They work best with someone who can either balance out their introversion or totally accept it — like The Logician (INTP). This is an excellent match because both types value honesty and independence. Since both enjoy time alone, neither is likely to get offended when the other needs to recharge solo. And given that they both spend a lot of time thinking about and exploring theories, they can definitely have super insightful, engaging conversation. In fact, they can challenge each other intellectually in a way that each craves. Both personality types have high expectations for themselves, as well as those around them — and neither shies away from a heated debate.",
  },
  {
    id: 2,
    personalityType: ["ENFP", "INFJ"],
    type: "Ideal match",
    description:
      "At first glance, it may seem like these two types are quite different, but the two traits they do share are actually super important — and the ones they don’t can complement each other in a surprising way. For an ENFP, having an introverted partner offers up a rewarding challenge in terms of connecting on a deep level. Meanwhile, for an INFJ, having an extroverted partner (who’s especially friendly, warm, and compassionate, to boot) may encourage them to get out of their comfort zone when it comes to socializing. In other words, this relationship can challenge both partners in a positive way.",
  },
  {
    id: 3,
    personalityType: ["ENFJ", "INFP"],
    type: "Ideal match",
    description:
      "This is another pairing that perfectly illustrates the importance of balance. ENFJs have a knack for getting people to open up so they can get a deeper look, and that’s just what an INFP needs. The INFP has many complex layers to their personality, and fortunately, an ENFJ will find it immensely fulfilling to take the time to peel back each one. Since these types are both intuitive feelers, they have the awe-inspiring ability to sense each other’s moods, desires, and needs with ease, and then care for each other accordingly. This is helpful given that the ENFJ — aka The Giver — is prone to forgetting to take care of their own needs. It will be nearly effortless for these two types to become in tune with each other, and since they’re both skilled communicators, they’re able to avoid misunderstandings and handle issues with ease (which is saying a lot for the conflict-hating ENFJ). Note that two ENFJs are also a phenomenal pairing, given that they are sensitive peacemakers by nature who value planning and organization.",
  },
  {
    id: 4,
    personalityType: ["ISTJ", "ESFP"],
    type: "Ideal match",
    description:
      "While this may seem like an unlikely duo, The Examiner and The Entertainer actually make a lot of sense, because they can bring different things to the relationship. You know the old expression “opposites attract”? This combo serves as the perfect proof that it can certainly be true. While the ESFP will appreciate the ISTJ’s determination, strength of character, and reliability, the ISTJ is bound to be attracted to the ESFP’s natural amiability, charm, and emotional intelligence. These two types make a great team because they’re both sensing personalities, meaning that they tend to focus on the here and now and make decisions based on the facts rather than their feelings or intuition. Best of all, these personalities complement each other in a number of unique ways. For example, ESFPs can challenge ISTJs to consider other peoples’ feelings in any situation, and ISTJs can help ESFPs approach problem-solving in a more practical way and strategically pursue their goals.",
  },
  {
    id: 5,
    personalityType: ["ESTP", "ISFJ"],
    type: "Ideal match",
    description:
      "What often draws these two personality types to each other is that they’re both incredibly energetic and enthusiastic in everything they do. Also, neither type demands a ton of emotional feedback in order to feel satisfied in their relationship. Even though the ISFJ is an introvert, this type does enjoy being around small groups of people, so they can totally keep up with the ESTP’s active social life. An ESTP is often attracted to the ISFJ’s dependable, nurturing nature, while the ISFJ is sucked in by the ESTP’s charisma and sense of adventure. Both are sensing types, so they pay attention to detail, which means they’re more likely to make choices and respond to situations in a similar fashion — based on knowledge from past experiences, as well as present facts. On top of that, they can push each other toward self-improvement. For instance, ESTPs are especially good at dealing with change, so they can help ISFJs to adapt to new situations.",
  },
  {
    id: 6,
    personalityType: ["ESFJ", "ISFP"],
    type: "Ideal match",
    description:
      "Despite a few differences, this pairing tends to balance each other out, while also sharing a common sensitivity, expressiveness, and natural affection. Since they both possess the sensing and feeling preferences, they are both super conscientious and empathetic — not to mention expert communicators, and they both prefer to hash out problems by openly and honestly sharing their feelings. As such, they can quickly recognize each others’ needs and easily overcome conflict. While the ISFP can be a bit scattered (it comes with the territory of being incredibly creative), the ESFJ is wonderfully patient, and are able to appreciate their partner’s artistic sensibilities while also helping to bring a little order to their lives (which they usually appreciate). Meanwhile, ISFPs can help ESFJs to lighten up and approach life with a more playful, spontaneous attitude.",
  },
  {
    id: 7,
    personalityType: ["ISTP", "ESTJ"],
    type: "Ideal match",
    description:
      "While ISTPs tend to be spontaneous and unpredictable, ESTJs are methodical, organized, and value structure. While it might seem like an odd pairing, these personalities are both pretty pragmatic. Most importantly, they share the sensing and thinking preferences. That means they have the same straightforward communication tendencies, and they both approach decisions in the same logical, practical way. These shared traits allow them to better understand each other and potentially avoid some conflict because they can be super direct without having to worry about offending each other. Besides, their differences only make them a stronger team. The extrovert side of ESTJs will appreciate that the introverted ISTP is always willing to lend an ear when they need to vent, and the ISTP will enjoy the fact that their extroverted partner connects them to new people who they may otherwise have been too shy to meet.",
  },
  {
    id: 8,
    personalityType: ["INFJ", "ENTP"],
    type: "Ideal match",
    description:
      "This pairing only shares one trait — the intuitive preference. But if you’re scratching your head over this match, consider this: These two personalities love a challenge, which means their complex relationship will prove immensely fulfilling for both partners. In other words, they aren’t likely to get frustrated by their differences — instead, they’ll view them as an exciting opportunity for growth. The ENTP is a pro at getting the slightly guarded INFJ to come out of their shell, while the INFJ is able to help the ENTP improve their organizational skills. While the ENTP can give the INFJ the encouragement they may need to socialize, they also won’t get offended when the INFJ needs some personal space or time alone.",
  },
  {
    id: 9,
    personalityType: ["ENTJ", "INTP"],
    type: "Ideal match",
    description:
      "What makes this bond super special is that these personality types place a high value on intellect and have a shared eagerness and passion for learning, which means they’re bound to have an endlessly stimulating relationship. They can even enjoy a little healthy competition, motivating each other to improve in a variety of ways. Direct, analytical, and logical, these personalities tend to approach conflict in much the same way. They can engage in candid conversations about their problems, because neither type is overly sensitive — so they don’t have to sugar coat their thoughts to avoid hurting each other’s feelings. Another commonality for this duo is that they are both forward-thinking, and prefer to thoroughly think through their decisions. As a result, they have an easy time planning for the future together",
  },
  {
    id: 10,
    personalityType: ["ENFP", "INTJ"],
    type: "Ideal match",
    description:
      "Quiet but intense, the INFP and INTJ relationship is one where loyalty runs deep and ideas branch out in many directions. Both of these personality types share a passion for ideas and non-conformist ideals. Both find that their mind’s come alive in the quiet and peace of their alone time. However, when they’re together they refine each other’s ideas or improve upon them. This is a relationship that is often passionate, intense, and deeply creative. The similarities and differences between these two types allow them to easily connect on a variety of subjects and decisions, but still have enough of a difference that a spark of curiosity still remains.\n\nhttps://www.psychologyjunkie.com/2020/03/03/the-infp-and-intj-relationship/",
  },
];

export default matchData;
