import { ApiClient } from '../client/apiClient';
import { BookRequest, BookResponse } from '../types/books.types';

/** 
    * Service layer wraps API calls into meaningful business actions.
    * We abstract HTTP calls into business-level methods.
 */

export class BookService {
  private apiClient: ApiClient;

  constructor(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async getAllBooks(): Promise<BookResponse[]> {
    return this.apiClient.get('/api/books');
  }

  async createBook(data: BookRequest): Promise<BookResponse> {
    return this.apiClient.post('/api/books', data);
  }

  async getBookById(id: string): Promise<BookResponse> {
    return this.apiClient.get(`/api/books/${id}`);
  }

  async updateBook(id: string, data: BookRequest): Promise<BookResponse> {
    return this.apiClient.put(`/api/books/${id}`, data);
  }

  async deleteBook(id: string): Promise<any> {
    return this.apiClient.delete(`/api/books/${id}`);
  }
}