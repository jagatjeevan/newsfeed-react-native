export const appConstants = {
  spacer: 20,
  subSpacer: 10,

  // Text sizes
  h1: 24,
  h3: 20,
  bodyText: 18,

  // Border
  borderColor: "#cdcdcd",
  borderWidth: 1,
  borderStyle: "solid"
};

const globalStyles = {
  appContainer: {
    flex: 1,
    padding: appConstants.spacer
  },
  heading1: {
    fontSize: appConstants.h1
  },
  heading3: {
    fontSize: appConstants.h3,
    marginBottom: 5
  }
};

export default globalStyles;
