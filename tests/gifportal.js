const anchor = require("@coral-xyz/anchor");

const main = async () => {
  console.log('Start testing....');

  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.Gifportal;

  // 🧠 The function name in Rust is start_stuff_off.
  // Anchor automatically exposes it to your frontend or test file as startStuffOff()

  // Generate a new keypair for the BaseAccount
  const baseAccount = anchor.web3.Keypair.generate();

  const tx = await program.methods.startStuffOff()
    .accounts({
      baseAccount: baseAccount.publicKey,
      user: provider.wallet.publicKey,
      systemProgram: anchor.web3.SystemProgram.programId,
    })
    .signers([baseAccount])
    .rpc();

  console.log("Transaction signature:", tx);

  let account = await program.account.baseAccount.fetch(baseAccount.publicKey);
  console.log("GIFs Count:", account.totalGifs.toString());

  await program.methods.addGif()
  .accounts("https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjh4aTJqZGl2MTB2ZzcxdG1tNmk5YXY5aDN3YjYxZzkwY2Fmcmh0biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tsX3YMWYzDPjAARfeg/giphy.gif",{
    baseAccount: baseAccount.publicKey,
    user: provider.wallet.publicKey,
  })
  .rpc();

  account = await program.account.baseAccount.fetch(baseAccount.publicKey);
  console.log("Updated GIFs Count:", account.totalGifs.toString());
  console.log("Updated GIFs List:", account.gifList);
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error)
    process.exit(1);
  }
};
runMain();
