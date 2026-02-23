// Request payload when creating/updating a book
export interface BookRequest {
  title: string;
  author: string;
  language: string;
  noOfPages: number;
  genre: string;
}

// Response payload returned from API
export interface BookResponse extends BookRequest {
  id: number;
}