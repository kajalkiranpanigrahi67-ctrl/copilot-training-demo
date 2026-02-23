import test, { expect } from "@playwright/test";

const API_URL = 'http://localhost:5000/api';

test.describe('BookService API Tests', () => {
    test('1. Create book successfully', async ({ request }) => {
        const response = await request.post(`${API_URL}/books`, {
            data: {
                title: 'The Great Gatsby',
                author: 'F. Scott Fitzgerald',
                language: 'English',
                noOfPages: 180,
                genre: 'Classic'
            }
        });

        expect(response.status()).toBe(201);
        const book = await response.json();
        expect(book.title).toBe('The Great Gatsby');
    });

    test('2. Fail when required field missing', async ({ request }) => {
        const response = await request.post(`${API_URL}/books`, {
            data: {
                author: 'F. Scott Fitzgerald'
            }
        });

        expect(response.status()).toBe(400);
    });

    test('3. Get book by id', async ({ request }) => {
        // Create a book first for this test
        const createResponse = await request.post(`${API_URL}/books`, {
            data: {
                title: 'To Kill a Mockingbird',
                author: 'Harper Lee',
                language: 'English',
                noOfPages: 281,
                genre: 'Classic'
            }
        });
        const book = await createResponse.json();
        const bookId = book.id;

        const response = await request.get(`${API_URL}/books/${bookId}`);

        expect(response.status()).toBe(200);
        const retrievedBook = await response.json();
        expect(retrievedBook.id).toBe(bookId);
    });

    test('4. Update book', async ({ request }) => {
        // Create a book first for this test
        const createResponse = await request.post(`${API_URL}/books`, {
            data: {
                title: '1984',
                author: 'George Orwell',
                language: 'English',
                noOfPages: 328,
                genre: 'Dystopian'
            }
        });
        const book = await createResponse.json();
        const bookId = book.id;

        const response = await request.put(`${API_URL}/books/${bookId}`, {
            data: {
                title: '1984',
                author: 'George Orwell',
                language: 'English',
                noOfPages: 350,
                genre: 'Dystopian'
            }
        });

        expect(response.status()).toBe(200);
        const updatedBook = await response.json();
        expect(updatedBook.noOfPages).toBe(350);
    });

    test('5. Delete book', async ({ request }) => {
        // Create a book first for this test
        const createResponse = await request.post(`${API_URL}/books`, {
            data: {
                title: 'Pride and Prejudice',
                author: 'Jane Austen',
                language: 'English',
                noOfPages: 432,
                genre: 'Romance'
            }
        });
        const book = await createResponse.json();
        const bookId = book.id;

        const response = await request.delete(`${API_URL}/books/${bookId}`);
        expect(response.status()).toBe(204);
    });
});