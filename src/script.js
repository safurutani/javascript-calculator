class Digit extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        id={this.props.id}
        className="col digit"
        onClick={this.props.onClick}
      >
        {this.props.text}
      </div>
    );
  }
}
class Operator extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        id={this.props.id}
        className="col operator"
        onClick={this.props.onClick}
      >
        {this.props.text}
      </div>
    );
  }
}

class Display extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="displayBox">
        <div id="equation">{this.props.equation}</div>
        <div id="display" class="primary">
          {this.props.currentNumber}
        </div>
      </div>
    );
  }
}

const OPERATORS = /[-+*/]/;

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.clearDisplay = this.clearDisplay.bind(this);
    this.inputNum = this.inputNum.bind(this);
    this.inputOperator = this.inputOperator.bind(this);
    this.inputDecimal = this.inputDecimal.bind(this);
    this.calculate = this.calculate.bind(this);
  }
  state = {
    equation: "",
    currentNumber: "0"
  };

  clearDisplay() {
    this.setState({
      equation: "",
      currentNumber: "0"
    });
  }

  inputNum(num) {
    let { currentNumber, equation } = this.state;
    if (OPERATORS.test(currentNumber)) {
      this.setState({
        currentNumber: num,
        equation: equation + num
      });
    } else if (currentNumber === "0") {
      if (num != "0") {
        this.setState({
          currentNumber: num,
          equation: equation + num
        });
      }
    } else {
      this.setState({
        currentNumber: currentNumber + num,
        equation: equation + num
      });
    }
  }

  inputDecimal() {
    let { currentNumber, equation } = this.state;
    if (!OPERATORS.test(currentNumber) && !currentNumber.includes(".")) {
      this.setState({
        currentNumber: currentNumber + ".",
        equation: equation + (equation == "" ? "0." : ".")
      });
    }
  }

  inputOperator(operator) {
    let { currentNumber, equation } = this.state;
    if (equation[equation.length-1] == "-") {
      equation = equation.slice(0, equation.length-1);
    }
    if (equation === "") {
      equation = "0";
    } else if (
      equation[equation.length - 1] === "." ||
      (OPERATORS.test(currentNumber) && operator != "-")
    ) {
      equation = equation.slice(0, equation.length - 1);
    }
    
    /*if (OPERATORS.test(equation[equation.length-2]) && OPERATORS.test(equation[equation.length-1]) ) {
      
    }*/
    
      this.setState({
        currentNumber: operator,
        equation: equation + operator
      });
  }

  calculate(input) {
    let { currentNumber, equation } = this.state;
    if (OPERATORS.test(equation[equation.length - 1])) {
      equation = equation.slice(0, equation.length - 1);
    }
    let result = eval(equation);
    this.setState({
      currentNumber: result,
      equation: result
    });
  }

  render() {
    return (
      <div id="container">
        <div id="calculator">
          <div className="row">
            <Display
              currentNumber={this.state.currentNumber}
              equation={this.state.equation}
            />
          </div>
          <div className="row">
            <Operator id="clear" text="C" onClick={this.clearDisplay} />
            <Operator
              id="divide"
              text="/"
              onClick={() => this.inputOperator("/")}
            />
            <Operator
              id="multiply"
              text="*"
              onClick={() => this.inputOperator("*")}
            />
          </div>
          <div className="row">
            <Digit id="seven" text="7" onClick={() => this.inputNum("7")} />
            <Digit id="eight" text="8" onClick={() => this.inputNum("8")} />
            <Digit id="nine" text="9" onClick={() => this.inputNum("9")} />
            <Operator
              id="subtract"
              text="-"
              onClick={() => this.inputOperator("-")}
            />
          </div>
          <div className="row">
            <Digit id="four" text="4" onClick={() => this.inputNum("4")} />
            <Digit id="five" text="5" onClick={() => this.inputNum("5")} />
            <Digit id="six" text="6" onClick={() => this.inputNum("6")} />
            <Operator
              id="add"
              text="+"
              onClick={() => this.inputOperator("+")}
            />
          </div>
          <div className="row">
            <div className="col">
              <div className="row">
                <Digit id="one" text="1" onClick={() => this.inputNum("1")} />
                <Digit id="two" text="2" onClick={() => this.inputNum("2")} />
                <Digit id="three" text="3" onClick={() => this.inputNum("3")} />
              </div>
              <div className="row">
                <Digit id="zero" text="0" onClick={() => this.inputNum("0")} />
                <Digit
                  id="decimal"
                  text="."
                  onClick={() => this.inputDecimal()}
                />
              </div>
            </div>
            <div className="col">
              <Operator
                id="equals"
                text="="
                onClick={() => this.calculate("=")}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById("root"));
