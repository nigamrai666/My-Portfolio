import '../App.css';

function SkillBox() {
  return (
    <>
      <div className="skill-box">
        <div className="skill-box__icon">
          <i className="fa fa-code">SKILLS</i>
        </div>
        <div className="skill-box__text">
          <h3>HTML/CSS</h3>
          <p>HTML and CSS are markup languages used for structuring and styling web pages.</p>
          <h3>JavaScript</h3>
          <p>JavaScript is a programming language that allows you to implement complex features on web pages.</p>
          <h3>React</h3>
          <p>React is a JavaScript library for building user interfaces.</p>
        </div>
      </div>
    </>
  );
}

export default SkillBox;
