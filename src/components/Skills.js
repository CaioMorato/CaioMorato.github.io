function Skills() {
  return (
    <div id="skills">
      <h3>Habilidades</h3>
      <div className="column-skills">
        <div className="frontend-skills">
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>Bootstrap</li>
            <li>Sass</li>
          </ul>
        </div>
        <div className="separator"></div>
        <div className="backend-skills">
          <ul>
            <li>Node</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>MySQL</li>
          </ul>
        </div>
      </div>
      <div className="row-skills">
        <ul>
          <li>Testes Unitários</li>
          <li>TDD</li>
          <li>RTL | Jest</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
