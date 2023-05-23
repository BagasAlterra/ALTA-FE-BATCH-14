import { Component } from "react";

class App extends Component {
  render() {
    return <div>App</div>;
  }
}

export default App;

// ================================= CONTOH STATE PADA DARK MODE =================================

// import { Component } from "react";

// interface ModeState {
//   isMode: boolean;
// }

// class App extends Component<ModeState> {
//   state = {
//     isMode: false,
//   };

//   changeModeDark() {
//     this.setState({ isMode: true });
//   }

//   changeModeWhite() {
//     this.setState({ isMode: false });
//   }

//   render() {
//     const { isMode } = this.state;

//     return (
//       <div
//         className={`w-screen h-screen ${
//           isMode === true ? "bg-slate-950" : "bg-white"
//         }`}
//       >
//         <button
//           className="w-40 h-16 bg-orange-500 m-10"
//           onClick={() => this.changeModeDark()}
//         >
//           Switch Mode to Dark
//         </button>
//         <button
//           className="w-40 h-16 bg-orange-500 m-10"
//           onClick={() => this.changeModeWhite()}
//         >
//           Switch Mode to White
//         </button>
//       </div>
//     );
//   }
// }

// export default App;

// ================================= CONTOH STATE PADA INCREMENT, DECREMENT, CHECK NUMBER =================================

// import React, { Component } from "react";

// interface CountState {
//   value: number;
// }

// class App extends Component<CountState> {
//   state = {
//     value: 0,
//   };

//   incrementValue() {
//     this.setState({ value: this.state.value + 1 });
//     this.checkNumber(this.state.value);
//   }

//   decrementValue() {
//     this.setState({ value: this.state.value - 1 });
//     this.checkNumber(this.state.value);
//     if (this.state.value < 0) {
//       alert("Your value is out of range");
//     }
//   }

//   checkNumber(num: number) {
//     if (num % 2 === 0) {
//       alert(`${num} adalah Bilangan Genap`);
//     }
//   }

//   render() {
//     const { value } = this.state;

//     return (
//       <div className="m-10">
//         <h1>{value < 0 ? "Out of Range" : value}</h1>
//         <button
//           className="w-20 h-12 bg-orange-500"
//           onClick={() => this.incrementValue()}
//         >
//           +
//         </button>
//         <button
//           className="w-20 h-12 bg-orange-500"
//           onClick={() => this.decrementValue()}
//         >
//           -
//         </button>
//       </div>
//     );
//   }
// }

// export default App;

// ================================= CONTOH STATE PADA UNDIAN =================================

// import { Component } from "react";

// interface CountState {
//   count: number;
// }

// class App extends Component<CountState> {
//   state = {
//     count: 0,
//   };

//   withDrawLottery() {
//     this.setState({ count: Math.floor(Math.random() * 100) });
//   }

//   render() {
//     const { count } = this.state;

//     return (
//       <div className="m-10">
//         <div>
//           <h1>Undian ke : {count}</h1>
//           <button
//             className="w-40 h-12 bg-blue-500"
//             onClick={() => this.withDrawLottery()}
//           >
//             Withdraw
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;

// ================================= CONTOH STATE PADA GANTI WARNA =================================

// import { Component } from "react";

// interface ColorState {
//   name: string;
// }

// class App extends Component<ColorState> {
//   state = {
//     name: "blue",
//   };

//   changeToOrange() {
//     this.setState({ name: "orange" });
//   }

//   changeToBlue() {
//     this.setState({ name: "blue" });
//   }

//   render() {
//     const { name } = this.state;

//     return (
//       <div className="m-10">
//         <div
//           className={`w-40 h-12 ${
//             name === "orange" ? "bg-orange-500" : "bg-blue-500"
//           }`}
//         ></div>
//         <div className="flex flex-col mt-10 grid gap-y-5">
//           <button
//             className="w-40 h-16 bg-orange-500"
//             onClick={() => this.changeToOrange()}
//           >
//             Change to Orange
//           </button>
//           <button
//             className="w-40 h-12 bg-blue-500"
//             onClick={() => this.changeToBlue()}
//           >
//             Change to Blue
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;

// =================================================================================

// import { Component } from "react";
// import Button from "./components/Button";

// import Card from "./components/Card";
// import CustomerService from "./components/CustomerService";
// import Navbar from "./components/Navbar";

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Navbar />
//         <div className="m-10 gap-y-5 gap-x-5 flex flex-row">
//           <Card />
//           <Card />
//           <Card />
//         </div>
//         <div className="m-10 gap-y-5 gap-x-5 flex flex-row">
//           <Card />
//           <Card />
//           <Card />
//         </div>
//         <div className="m-10 gap-y-5 gap-x-5 flex flex-row">
//           <Card />
//           <Card />
//           <Card />
//         </div>
//         <div className="m-10 gap-y-5 gap-x-5 flex flex-row">
//           <Card />
//           <Card />
//           <Card />
//         </div>
//         <CustomerService />
//       </div>
//     );
//   }
// }

// export default App;
