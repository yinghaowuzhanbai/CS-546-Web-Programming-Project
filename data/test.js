
const reviewsMethods = require("./reviews");
const questionsdMethods = require("./questions");

async function test1() {
    try {
        const op1 = await reviewsMethods.getReviewById("5fb5cd906768a33e948daf2");
        console.log(op1);
    } catch (error) {
        throw error
    }
    console.log("-----///----///---///");
    try {
        const op2 = await reviewsMethods.getReviewById("5fb5cd906768a33e948daf2d");
        // const test=await reviewsMethods.getAllReviews()
        console.log(op2);
    } catch (error) {
        throw error
    }
}
async function test2() {
    const getAll = await questionsdMethods.getAllQuestions()
    console.log(getAll);
    console.log("-----///----///---///");
    try {
        const getOne = await questionsdMethods.getQuestionById("5fb5cd906768a33e948daf2");
        console.log(getOne);
    } catch (error) {
        throw error
    }
    console.log("-----///----///---///");
    try {
        const getOne = await questionsdMethods.getQuestionById("5fb5cd906768a33e948daf2b");
        console.log(getOne);
    } catch (error) {
        throw error
    }
}
async function createDate() {
    const da = new Date();
    console.log(da);
}
/**
 * addReview
 */
async function test3() {
    await reviewsMethods.addReview("test","5fb5cd906768a33e948daf29","5fb5cd906768a33e948daf2c");
}
// createDate()

test1()