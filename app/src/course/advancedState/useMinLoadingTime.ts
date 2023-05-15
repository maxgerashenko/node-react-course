export async function useMinLoadingTime(
  searchTerm: string,
  onRequest: (searchTerm: string) => any,
  onSuccess: (result: any) => void
) {
  // const startTime = Date.now();

  const result = await onRequest(searchTerm);
  onSuccess(result);

  // const minLoadingTime = 1000; // Minimum loading time in ms
  // const elapsed = Date.now() - startTime;
  // const delay = elapsed > minLoadingTime ? 0 : minLoadingTime - elapsed;

  // setTimeout(() => {
  //   onSuccess(result);
  // }, delay);
}
