/**
 * *  Given a string, returns true if it is a nesting of zero or more pairs of parentheses, such as "(())" or "((()))".
 * *  Hint: check the first and last character, and then repeat what's inside of them. (Use recursion).
 */

const parentheses = "((()))";
const parentheses2 = "((())";
const parentheses3 = "(((9))";

const nestingParentheses = (str, index1, index2, matches) => {
    const regex = /^[\(\)]+$/;
    const fisrtWord = str[index1];
    const secondWord = str[index2];
    let noMatches = matches || 0;

    if (regex.test(str)) { //VERIFY THE STR ONLY CONTAIN '(' OR ')'
        if (noMatches >= 2 && str.length / 2 === noMatches) { //VERIFY THE NUMBER OF PAIR OF PARENTHESES (base case)
            return true;
        } else if (fisrtWord === "(" && secondWord === ")") {
            index1++;
            index2--;
            noMatches++;
            return nestingParentheses(str, index1, index2, noMatches);
        } else {
            return false;
        }
    } else {
        return false;
    }
};

console.log(nestingParentheses(parentheses, 0, parentheses.length - 1));
console.log(nestingParentheses(parentheses2, 0, parentheses2.length - 1));
console.log(nestingParentheses(parentheses3, 0, parentheses3.length - 1));
