const anchor = require("@coral-xyz/anchor");

const main = async () => {
  console.log('Start testing....');
  anchor.setProvider(anchor.AnchorProvider.env());
  const program = anchor.workspace.Gifportal;
}

const runMain = async () => {
  try {
    main();
  } catch (error) {
    console.log(error)
  }
};
runMain();
