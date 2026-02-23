import { APIRequestContext } from '@playwright/test';

/**
    * Central place for API configuration.
    * This is our transport layer. All HTTP calls pass through this client.
 */

/**
 * //Copilot Prompt: 
    // Create a reusable Playwright API client
    // Base URL should be http://localhost:5000
    // Support GET, POST, PUT, DELETE
    // Return response JSON
*/

export class ApiClient {
    private baseUrl = 'http://localhost:5000';
    private apiRequestContext: APIRequestContext;

    constructor(apiRequestContext: APIRequestContext) {
        this.apiRequestContext = apiRequestContext;
    }

    async get(endpoint: string) {
        const response = await this.apiRequestContext.get(`${this.baseUrl}${endpoint}`);
        return response.json();
    }

    async post(endpoint: string, data: object) {
        const response = await this.apiRequestContext.post(`${this.baseUrl}${endpoint}`, {
            data,
        });
        return response.json();
    }

    async put(endpoint: string, data: object) {
        const response = await this.apiRequestContext.put(`${this.baseUrl}${endpoint}`, {
            data,
        });
        return response.json();
    }

    async delete(endpoint: string) {
        const response = await this.apiRequestContext.delete(`${this.baseUrl}${endpoint}`);
        return response.json();
    }
}