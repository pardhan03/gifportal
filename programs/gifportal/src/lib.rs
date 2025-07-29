use anchor_lang::prelude::*;
use anchor_lang::solana_program::entrypoint::ProgramResult;
declare_id!("HuGk61mTDfo6FzvrEUCcAkF7yFiGzAimkrAZNTvNi1C1");

#[program]
pub mod gifportal {
    use super::*;

    pub fn start_stuff_off(ctx:Context<StartStuffOff>) -> Result<()>{
        let base_account =&mut ctx.accounts.base_account;
        base_account.total_gifs = 0;
        Ok(())
    }

}

#[derive(Accounts)]
pub struct StartStuffOff<'info> {
    #[account(init, payer = user, space = 8 + 8)]
    pub base_account: Account<'info, BaseAccount>,

    #[account(mut)]
    pub user: Signer<'info>,

    pub system_program: Program<'info, System>, // it is responsible for run solana
    // the main function of this is to make account on the solana
}

#[account]
pub struct BaseAccount {
    pub total_gifs: u64,
}