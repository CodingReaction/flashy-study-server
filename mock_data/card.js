const CARDS_DATA = [
  {
    id: 1,
    title: "Stepping on the wrong branch",
    tags: ["git", "version-control"],
    frontText:
      "Sometimes we start work in a branch non intended for that code (for example directly in main after a merge/pull). What commands should we execute if the changes aren't stagged?",
    frontImage: "",
    backText: "git checkout -b new-branch-name-to-submit-changes",
    backImage: "",
  },
  {
    id: 2,
    title: "Iterations - JS",
    tags: ["JS", "javascript"],
    frontText:
      "Aside from 'for' loops, what's a concise way of iterating [1, 3, 5] in Javascript?",
    backText: "for (const num of [1, 3, 5])",
    backImage: "",
  },
];

module.exports = CARDS_DATA;
