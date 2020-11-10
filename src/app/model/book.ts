/**
 * Ein Buch ...
 */
export interface Book {
    /**
     * Die ISBN
     * @link https://de.wikipedia.org/wiki/Internationale_Standardbuchnummer
     */
    isbn: string;
    /**
     * Der Buchtitel
     */
    title: string;
    /**
     * Der Untertitel
     */
    subtitle?: string;
}

/**
 * Eine Liste von Büchern
 */
export type Books = Book[];
