import { useMinLoadingTime } from './useMinLoadingTime';

jest.useFakeTimers();

describe('useMinLoadingTime', () => {
  // it('calls onRequest with the correct argument', () => {
  //   const onRequest = jest.fn().mockResolvedValue('some data');
  //   const onSuccess = jest.fn();

  //   useMinLoadingTime('test', onRequest, onSuccess);

  //   expect(onRequest).toHaveBeenCalledWith('test');
  // });

  it('calls onSuccess with the result of onRequest', (done) => {
    const onRequest = jest.fn().mockResolvedValue('some data');
    const onSuccess = jest.fn();

    useMinLoadingTime('test', onRequest, onSuccess);

    jest.advanceTimersByTime(2000);
    expect(onSuccess).toHaveBeenCalledWith('some data');
  });

  // it('ensures a minimum loading time of 1000ms', (done) => {
  //   const onRequest = jest.fn().mockResolvedValue('some data');
  //   const onRequest = jest.fn();

  //   useMinLoadingTime('test', onRequest, onSuccess);

  //   // onSuccess should not have been called yet
  //   jest.advanceTimersByTime(500);
  //   expect(onSuccess).not.toHaveBeenCalled();

  //   // Now onSuccess should have been called
  //   jest.advanceTimersByTime(500);
  //   expect(onSuccess).toHaveBeenCalledWith('some data');
  // });
});
