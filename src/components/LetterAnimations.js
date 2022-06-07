import './LetterAnimations.scss';

const LetterAnimations = ({ letterClass, strArray, idx }) => {
  return (
      
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  );
};

export default LetterAnimations;
