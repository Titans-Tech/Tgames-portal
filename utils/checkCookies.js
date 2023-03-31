import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default function (){
  fetch("https://docs.google.com/spreadsheets/d/1eWrw8DgvNw5Rv6XXaBpncM0Okr4JuAjl6r2SHS28Px0/gviz/tq?&sheet=Sheet1")
  .then(response => response.text())
  .then(data => {

    //Remove additional text and extract only JSON:
    const jsonData = JSON.parse(data.substring(47).slice(0, -2));
    var dataUsername = jsonData.table.rows[1].c[0].v;
    var dataPassword = jsonData.table.rows[1].c[1].v;
  })
}