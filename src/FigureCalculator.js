/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
class FigureCalculator {
  constructor(mathBasic) {
    this._mathBasic = mathBasic;
  }

  _verifyArgs(args, expectedArgsCount) {
    if (args.length !== expectedArgsCount) {
      throw new Error(`fungsi hanya menerima ${expectedArgsCount} parameter`);
    }

    args.forEach((arg) => {
      if (typeof (arg) !== 'number') {
        throw new Error('fungsi hanya menerima tipe data number');
      }
    });

    return args;
  }

  calculateRectanglePerimeter(...args) {
    const [length, width] = this._verifyArgs(args, 2);
    return this._mathBasic.multiply(2, this._mathBasic.add(length, width));
  }

  calculateRectangleArea(...args) {
    const [length, width] = this._verifyArgs(args, 2);
    return this._mathBasic.multiply(length, width);
  }

  calculateTrianglePerimeter(...args) {
    const [sideA, sideB, base] = this._verifyArgs(args, 3);
    return this._mathBasic.add(sideA, this._mathBasic.add(sideB, base));
  }

  calculateTriangleArea(...args) {
    const [base, height] = this._verifyArgs(args, 2);
    return this._mathBasic.divide(this._mathBasic.multiply(base, height), 2);
  }
}

module.exports = FigureCalculator;
