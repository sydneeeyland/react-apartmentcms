export const FetchNewImages = async(newPage) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${newPage}&_limit=20`);
    const data = await response.json();
    return data;
}