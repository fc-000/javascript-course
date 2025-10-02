'Estimated tax (10%): $' + Math.round((2095 * 2 + 799 * 2 + 499 + 499) / 100) * 0.1;
// misplaced 0.1

// correct answer
`Estimated tax (10%): $${Math.round((2 * 2095 + 2 * 799 + 499 + 499) * 0.1) / 100}`