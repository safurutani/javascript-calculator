function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class Digit extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", {
        id: this.props.id,
        className: "col digit",
        onClick: this.props.onClick },

      this.props.text));


  }}

class Operator extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", {
        id: this.props.id,
        className: "col operator",
        onClick: this.props.onClick },

      this.props.text));


  }}


class Display extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "displayBox" }, /*#__PURE__*/
      React.createElement("div", { id: "equation" }, this.props.equation), /*#__PURE__*/
      React.createElement("div", { id: "display", class: "primary" },
      this.props.currentNumber)));



  }}


const OPERATORS = /[-+*/]/;

class Calculator extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "state",







    {
      equation: "",
      currentNumber: "0" });this.clearDisplay = this.clearDisplay.bind(this);this.inputNum = this.inputNum.bind(this);this.inputOperator = this.inputOperator.bind(this);this.inputDecimal = this.inputDecimal.bind(this);this.calculate = this.calculate.bind(this);}


  clearDisplay() {
    this.setState({
      equation: "",
      currentNumber: "0" });

  }

  inputNum(num) {
    let { currentNumber, equation } = this.state;
    if (OPERATORS.test(currentNumber)) {
      this.setState({
        currentNumber: num,
        equation: equation + num });

    } else if (currentNumber === "0") {
      if (num != "0") {
        this.setState({
          currentNumber: num,
          equation: equation + num });

      }
    } else {
      this.setState({
        currentNumber: currentNumber + num,
        equation: equation + num });

    }
  }

  inputDecimal() {
    let { currentNumber, equation } = this.state;
    if (!OPERATORS.test(currentNumber) && !currentNumber.includes(".")) {
      this.setState({
        currentNumber: currentNumber + ".",
        equation: equation + (equation == "" ? "0." : ".") });

    }
  }

  inputOperator(operator) {
    let { currentNumber, equation } = this.state;
    if (equation[equation.length - 1] == "-") {
      equation = equation.slice(0, equation.length - 1);
    }
    if (equation === "") {
      equation = "0";
    } else if (
    equation[equation.length - 1] === "." ||
    OPERATORS.test(currentNumber) && operator != "-")
    {
      equation = equation.slice(0, equation.length - 1);
    }

    /*if (OPERATORS.test(equation[equation.length-2]) && OPERATORS.test(equation[equation.length-1]) ) {
      
    }*/

    this.setState({
      currentNumber: operator,
      equation: equation + operator });

  }

  calculate(input) {
    let { currentNumber, equation } = this.state;
    if (OPERATORS.test(equation[equation.length - 1])) {
      equation = equation.slice(0, equation.length - 1);
    }
    let result = eval(equation);
    this.setState({
      currentNumber: result,
      equation: result });

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "container" }, /*#__PURE__*/
      React.createElement("div", { id: "calculator" }, /*#__PURE__*/
      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement(Display, {
        currentNumber: this.state.currentNumber,
        equation: this.state.equation })), /*#__PURE__*/


      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement(Operator, { id: "clear", text: "C", onClick: this.clearDisplay }), /*#__PURE__*/
      React.createElement(Operator, {
        id: "divide",
        text: "/",
        onClick: () => this.inputOperator("/") }), /*#__PURE__*/

      React.createElement(Operator, {
        id: "multiply",
        text: "*",
        onClick: () => this.inputOperator("*") })), /*#__PURE__*/


      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement(Digit, { id: "seven", text: "7", onClick: () => this.inputNum("7") }), /*#__PURE__*/
      React.createElement(Digit, { id: "eight", text: "8", onClick: () => this.inputNum("8") }), /*#__PURE__*/
      React.createElement(Digit, { id: "nine", text: "9", onClick: () => this.inputNum("9") }), /*#__PURE__*/
      React.createElement(Operator, {
        id: "subtract",
        text: "-",
        onClick: () => this.inputOperator("-") })), /*#__PURE__*/


      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement(Digit, { id: "four", text: "4", onClick: () => this.inputNum("4") }), /*#__PURE__*/
      React.createElement(Digit, { id: "five", text: "5", onClick: () => this.inputNum("5") }), /*#__PURE__*/
      React.createElement(Digit, { id: "six", text: "6", onClick: () => this.inputNum("6") }), /*#__PURE__*/
      React.createElement(Operator, {
        id: "add",
        text: "+",
        onClick: () => this.inputOperator("+") })), /*#__PURE__*/


      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("div", { className: "col" }, /*#__PURE__*/
      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement(Digit, { id: "one", text: "1", onClick: () => this.inputNum("1") }), /*#__PURE__*/
      React.createElement(Digit, { id: "two", text: "2", onClick: () => this.inputNum("2") }), /*#__PURE__*/
      React.createElement(Digit, { id: "three", text: "3", onClick: () => this.inputNum("3") })), /*#__PURE__*/

      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement(Digit, { id: "zero", text: "0", onClick: () => this.inputNum("0") }), /*#__PURE__*/
      React.createElement(Digit, {
        id: "decimal",
        text: ".",
        onClick: () => this.inputDecimal() }))), /*#__PURE__*/



      React.createElement("div", { className: "col" }, /*#__PURE__*/
      React.createElement(Operator, {
        id: "equals",
        text: "=",
        onClick: () => this.calculate("=") }))))));






  }}


ReactDOM.render( /*#__PURE__*/React.createElement(Calculator, null), document.getElementById("root"));