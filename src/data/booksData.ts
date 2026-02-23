/** 
    * Test data management.
    * We don’t hardcode data inside tests.
    * Good frameworks separate test data.
 */

/**
 * //Copilot Prompt: 
    // Create valid and invalid book payloads for API testing
*/

export const validBookPayload = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isbn: "978-0743273565",
    publishedYear: 1925,
    pages: 180,
};

export const invalidBookPayload = {
    title: "",
    author: null,
    isbn: "invalid-isbn",
    publishedYear: -1,
    pages: 0,
};

export const bookPayloads = {
    valid: validBookPayload,
    invalid: invalidBookPayload,
};