export const Result = ({ result }: { result: string }) => {
  return (
    <div className='input-section'>
      <div>Result:</div>
      <div id='result'>{result}</div>
    </div>
  );
};
