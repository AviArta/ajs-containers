import ErrorRepository from "../js/errorRepo";

// eslint-disable-next-line no-undef
test.each([
    [1, "SyntaxError"],
    [2, "TypeError"],
    [3, "ReferenceError"],
    [4, "AggregateError"],
    [10, 'Unknown error'],
  ])('check class ErrorRepository with metod translate code', (error, description) => {
    const errors = new ErrorRepository();
    // eslint-disable-next-line no-undef
    expect(errors.translate(error)).toBe(description);
  });
