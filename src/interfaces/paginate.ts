export interface IPaginate<T> {
    results: T[];
    currentPage: number;
    totalPages: number;
    totalResults: number;
}
